<?php
use App\Http\Controllers\JobApplicationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/users', function (){
    return count(\App\Models\User::all());
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/auth', [AuthController::class, 'redirectToGoogle']);
Route::get('/auth/callback', [AuthController::class, 'handleGoogleCallback']);
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/user', [AuthController::class, 'deleteUser']);

Route::middleware('auth:api')->post('/update-profile-picture', [AuthController::class, 'updateProfilePicture']);
Route::group(["middleware" => ["auth:api"]], function (){
    Route::get('/jobs', [JobApplicationController::class, 'index']);
    Route::get('/jobs/{id}', [JobApplicationController::class, 'show']);
});

Route::get('/password/reset/{token}', function ($token) {
    return view('auth.passwords.reset', ['token' => $token]);
})->name('password.reset');
