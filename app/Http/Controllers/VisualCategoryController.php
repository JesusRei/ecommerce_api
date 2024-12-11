<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use Inertia\Inertia;
use Illuminate\Http\Request;

class VisualCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Categories/Index', [
            'categories' => Category::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        // Crear la categoría usando los datos validados
        $categorie = Category::create($request->validated());

        // Redirigir a la lista de categorías
        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        $products = $category->products;

        return Inertia::render('Categories/Show', [
            'category' => $category,
            'products' => $products,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        return Inertia::render('Categories/Edit', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, string $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        $category->update($request->validated());

        return redirect()->route('categories.index')->with('success', 'Category updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        Category::where('slug', $slug)->firstOrFail()->delete();
        return redirect()->route('categories.index');
    }
}
