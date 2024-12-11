<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\ProductRequest;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('category')->get();
        return response()->json($products, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        // Verificar si la imagen fue cargada y es válida
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            // Almacenar la imagen en el disco 'public' y obtener su ruta
            $imagePath = $request->file('image')->store('images', 'public');
        } else {
            // Si la imagen no es válida o no se ha cargado, asignar un valor por defecto o manejar el error
            $imagePath = null;
        }

        // Crear el producto con los datos validados y la imagen almacenada
        $product = new Product($request->all());
        $product->image = $imagePath; // Guardar la ruta de la imagen en la base de datos
        $product->save();

        return response()->json($product, Response::HTTP_CREATED);
    }


    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $product = Product::where('slug', $slug)->with('category')->firstOrFail();

        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($product->load('category'), Response::HTTP_OK);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, $slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $imagePath = $request->file('image')->store('images', 'public');
            $product->image = $imagePath;
        }

        if ($request->has('category_slug')) {
            $category = Category::where('slug', $request->category_slug)->first();
            if ($category) {
                $product->category_id = $category->id;
            }
        }

        $product->fill($request->validated());
        $product->save();

        return response()->json($product, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $product = Product::where('slug', $slug)->first();

        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], Response::HTTP_NOT_FOUND);
        }
        if ($product->image && Storage::exists('public/' . $product->image)) {
            Storage::delete('public/' . $product->image);
        }

        $product->delete();

        return response()->json(['message' => 'Producto eliminado correctamente'], Response::HTTP_OK);
    }
}
