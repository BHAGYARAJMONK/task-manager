<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('TaskForm');
});
Route::get('/tasks/upcoming', function () {
   
    return Inertia::render('UpcomingTasks');
});
