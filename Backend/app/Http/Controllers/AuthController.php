<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    // Register a new user
    public function register(RegisterUserRequest $request) : JsonResponse
    {
        $user = User::query()->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('authToken')->accessToken;

        return response()->json(['token' => $token, 'user' => $user], 201);
    }

    public function login(Request $request) : JsonResponse
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->accessToken;
            return response()->json(['token' => $token, 'user' => auth()->user()], 200);
        }

        return response()->json(['error' => 'These Credentials do not match our records'], 401);
    }

    // Redirect to Google for authentication
    public function redirectToGoogle(): JsonResponse
    {
        return response()->json([
            'url' => Socialite::driver('google')
                ->stateless()
                ->redirect()
                ->getTargetUrl(),
        ]);
    }

    // Handle Google callback
    public function handleGoogleCallback(Request $request) : JsonResponse
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();
            $user = User::query()->firstOrCreate(
                ['email' => $googleUser->getEmail()],
                ['name' => $googleUser->getName(), 'password' => Hash::make(Str::random(24))]
            );

            Auth::login($user);
            $token = $user->createToken('authToken')->accessToken;

            // Return the token as JSON
            return response()->json(['token' => $token], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to authenticate with Google.'], 500);
        }
    }

    // Forgot password
    public function forgotPassword(Request $request) : JsonResponse
    {
        $request->validate(['email' => 'required|email']);

        $user = User::query()->where('email', $request->email)->first();
        if (!$user) {
            return response()->json(['message' => 'Email does not exist'], 404);
        }

        $status = Password::sendResetLink($request->only('email'));

        return $status === Password::RESET_LINK_SENT
            ? response()->json(['message' => __($status)], 200)
            : response()->json(['email' => __($status)], 400);
    }

    // Reset password
    public function resetPassword(Request $request): JsonResponse
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();
            }
        );

        return $status === Password::PASSWORD_RESET
            ? response()->json(['message' => __($status)], 200)
            : response()->json(['email' => [__($status)]], 400);
    }

    public function logout() : JsonResponse
    {
        $user = auth()->user();
        if ($user) {
            $user->token()->revoke();
            return response()->json(['message' => 'Logged out successfully'], 200);
        }

        return response()->json(['error' => 'Unable to logout'], 500);
    }

    public function deleteUser(Request $request) : JsonResponse
    {
        $request->validate(['email' => 'required|email']);

        $user = User::query()->where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Revoke all tokens
        $user->tokens->each(function ($token, $key) {
            $token->revoke();
        });

        // Delete the user
        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);
    }
    public function updateProfilePicture(Request $request): JsonResponse
    {
        $request->validate([
            'profile_picture' => 'required|image|mimes:jpg,jpeg,png|max:2048', // max 2MB
        ]);

        $user = Auth::user();

        // Delete the old profile picture if it exists
        if ($user->profile_picture) {
            Storage::disk('public')->delete($user->profile_picture);
        }

        // Store the new profile picture
        if ($request->hasFile('profile_picture')) {
            $file = $request->file('profile_picture');
            $path = $file->store('profile_pictures', 'public');

            // Save the new path to the user's profile picture
            $user->profile_picture = $path;
            $user->save();
        }

        return response()->json([
            'success' => 'Profile picture updated successfully',
            'profile_picture_url' => asset('storage/' . $user->profile_picture)
        ], 200);
    }

}
