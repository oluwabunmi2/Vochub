<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;

class JobApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $jobs = JobApplication::all();
        return response()->json($jobs, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $job = JobApplication::find($id);

        if (!$job) {
            return response()->json(['error' => 'Job not found'], 404);
        }

        return response()->json($job, 200);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobApplication $jobApplication)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, JobApplication $jobApplication)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobApplication $jobApplication)
    {
        //
    }
}
