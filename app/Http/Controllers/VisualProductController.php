<?php

namespace App\Http\Controllers;



use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;

class VisualProductController extends Controller
{
    public function indexByCategory($slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        $products = Product::where('category_slug', $category->slug)->get();

        return Inertia::render('Home', [
            'categories' => Category::all(),
            'products' => $products,
            'selectedCategory' => $category,
            'auth' => [
                'user' => \Illuminate\Support\Facades\Auth::user(),
            ],
        ]);
    }

    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => Product::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all(['name', 'slug']); // Fetch only name and slug

        return Inertia::render('Products/Create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        $imagePath = null;
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            // Almacenar la imagen en el disco 'public' y obtener su ruta
            $imagePath = $request->file('image')->store('images', 'public');
        }

        // Obtener el id de la categoría a partir del slug
        $category = Category::where('slug', $request->category_slug)->firstOrFail();

        $product = Product::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock,
            'dimensions' => $request->dimensions,
            'weight' => $request->weight,
            'material' => $request->material,
            'category_slug' => $category->slug,
            'category_id' => $category->id,
            'image' => $imagePath,
        ]);

        return redirect()->route('products.index');
    }


    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();

        return Inertia::render('Products/Show', [
            'product' => $product->load('category')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($slug)
    {
        $product = Product::where('slug', $slug)->with('category')->firstOrFail();
        $categories = Category::all(['name', 'slug']);

        return Inertia::render('Products/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, string $slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();

        $data = $request->validated();

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $data['image'] = $request->file('image')->store('images', 'public');
        } else {
            unset($data['image']);
        }

        if (isset($data['category_slug'])) {
            $category = Category::where('slug', $data['category_slug'])->first();
            if ($category) {
                $data['category_slug'] = $category->slug;
            }
        }

        $product->update($data);

        return redirect()->route('products.index')->with('success', 'Product updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        // Encontrar el producto por slug
        $product = Product::where('slug', $slug)->firstOrFail();
        $product->delete();
        return redirect()->route('products.index')->with('success', 'Product deleted successfully!');
    }
}
