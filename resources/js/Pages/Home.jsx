import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Home({ auth, categories, products }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const showAllProducts = () => {
        setSelectedCategory(null);
    };

    const filteredProducts = selectedCategory
        ? products.filter(
              (product) => product.category_slug === selectedCategory.slug
          )
        : products;

    return (
        <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
            <div className="relative flex min-h-screen flex-col items-center justify-start selection:bg-[#1E3A8A] selection:text-white">
                <div className="relative w-full max-w-7xl px-6 py-8 lg:px-8">
                    <div className="container mx-auto">
                        <header className="flex items-center justify-between px-6 py-4 bg-[#1E3A8A] text-white rounded-lg shadow-lg">
                            <div className="flex items-center">
                                <h1 className="text-2xl font-extrabold ml-3">
                                    Productos del y para Hogar
                                </h1>
                            </div>
                            <nav className="flex items-center space-x-6">
                                {auth.user ? (
                                    <>
                                        <Link
                                            href={route("profile.edit")}
                                            className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-[#1E3A8A] transition"
                                        >
                                            Mi Cuenta
                                        </Link>
                                        <Link
                                            href={route("dashboard")}
                                            className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-[#1E3A8A] transition"
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-[#1E3A8A] transition"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-[#1E3A8A] transition"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <div className="mb-8 mt-8">
                            <div className="flex space-x-4 mt-4">
                                <button
                                    onClick={showAllProducts}
                                    className={`px-6 py-3 text-white rounded-lg transition ${
                                        !selectedCategory
                                            ? "bg-[#1E3A8A]"
                                            : "bg-[#3B82F6] hover:bg-[#1E3A8A]"
                                    }`}
                                >
                                    All Products
                                </button>
                                {categories.map((category) => (
                                    <button
                                        key={category.slug}
                                        onClick={() =>
                                            handleCategorySelect(category)
                                        }
                                        className={`px-6 py-3 text-white rounded-lg transition ${
                                            selectedCategory?.id_categorie ===
                                            category.id_categorie
                                                ? "bg-[#1E3A8A]"
                                                : "bg-[#3B82F6] hover:bg-[#1E3A8A]"
                                        }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            {selectedCategory
                                ? `Productos en ${selectedCategory.name}`
                                : "Productos Destacados"}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id_product}
                                    className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
                                >
                                    <img
                                        src={`/storage/${product.image}`}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 bg-white">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-2">
                                            {product.description}
                                        </p>
                                        <p className="text-[#1E3A8A] font-semibold text-lg mt-4">
                                            ${product.price}
                                        </p>
                                        <Link
                                            href={route(
                                                "products.show",
                                                product.slug
                                            )}
                                            className="mt-4 inline-block px-6 py-3 bg-[#1E3A8A] text-white rounded-md hover:bg-[#2563EB] transition transform hover:scale-105"
                                        >
                                            Ver detalles
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
