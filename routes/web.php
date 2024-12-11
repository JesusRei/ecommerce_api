<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VisualProductController;
use App\Http\Controllers\VisualCategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'categories' => \App\Models\Category::all(),
        'products' => \App\Models\Product::all(),
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('products', VisualProductController::class);
Route::resource('categories', VisualCategoryController::class);
Route::get('/products/{slug}', [VisualProductController::class, 'show'])->name('products.show');








require __DIR__.'/auth.php';
