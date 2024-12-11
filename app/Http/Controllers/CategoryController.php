<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Category::all(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $category = Category::create($request->validated());
        return response()->json($category, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        return response()->json($category, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        $category->update($request->validated());
        return response()->json($category, Response::HTTP_OK);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        // Buscar la categoría por slug
        $category = Category::where('slug', $slug)->first();

        if (!$category) {
            // Si no se encuentra la categoría, devolver un error
            return response()->json(['message' => 'Categoría no encontrada'], Response::HTTP_NOT_FOUND);
        }

        // Eliminar productos asociados a la categoría
        $category->products()->delete();

        // Eliminar la categoría
        $category->delete();

        // Devolver respuesta exitosa
        return response()->json(['message' => 'Categoría y productos eliminados correctamente'], Response::HTTP_OK);
    }
}
