import { Link } from "@inertiajs/react";

export default function Show({ product, auth }) {
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

                        {/* Product Details */}
                        <div className="mt-8">
                            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
                                {/* Product Image */}
                                <div className="flex-shrink-0 w-full md:w-96">
                                    <img
                                        src={`/storage/${product.image}`}
                                        alt={product.name}
                                        className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="mt-6 md:mt-0 md:ml-8 flex-grow">
                                    <h3 className="text-3xl font-bold mb-4 text-[#1E3A8A]">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        {product.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-4">
                                        <span className="font-semibold text-[#1E3A8A]">
                                            Price:
                                        </span>{" "}
                                        ${product.price}
                                    </div>

                                    {/* Stock */}
                                    <div className="mb-4">
                                        <span className="font-semibold text-[#1E3A8A]">
                                            Stock:
                                        </span>{" "}
                                        {product.stock}
                                    </div>

                                    {/* Dimensions */}
                                    <div className="mb-4">
                                        <span className="font-semibold text-[#1E3A8A]">
                                            Dimensions:
                                        </span>{" "}
                                        {product.dimensions}
                                    </div>

                                    {/* Weight */}
                                    <div className="mb-4">
                                        <span className="font-semibold text-[#1E3A8A]">
                                            Weight:
                                        </span>{" "}
                                        {product.weight}
                                    </div>

                                    {/* Material */}
                                    <div className="mb-4">
                                        <span className="font-semibold text-[#1E3A8A]">
                                            Material:
                                        </span>{" "}
                                        {product.material}
                                    </div>

                                    {/* Category */}
                                    <div className="mb-4">
                                        <span className="font-semibold text-[#1E3A8A]">
                                            Category:
                                        </span>{" "}
                                        {product.category_slug}
                                    </div>

                                    {/* Back to Home Button */}
                                    <Link
                                        href={route("home")}
                                        className="inline-block px-6 py-2 mt-6 bg-[#1E3A8A] text-white font-semibold rounded-md hover:bg-[#2563EB] transition-all duration-300"
                                    >
                                        Back to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
