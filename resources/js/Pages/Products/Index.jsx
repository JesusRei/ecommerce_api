import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Index({ products }) {
    console.log(products); // Verificar los datos de los productos en la consola

    // Función para manejar la eliminación del producto
    const { delete: deleteProduct } = useForm();

    const handleDelete = (slug) => {
        if (confirm("Are you sure you want to delete this product?")) {
            deleteProduct(route("products.destroy", slug));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold leading-tight text-gray-800">
                    Manage Products
                </h2>
            }
        >
            <Head title="Products" />

            <div className="py-12 bg-gray-50">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                        <div className="p-8 text-gray-900">
                            <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            ID
                                        </th>
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            Name
                                        </th>
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            Slug
                                        </th>
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            Description
                                        </th>
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            Price
                                        </th>
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            Stock
                                        </th>
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            Weight
                                        </th>
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            Image
                                        </th>
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            Category
                                        </th>
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr
                                            key={product.id_product}
                                            className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition duration-200"
                                        >
                                            <td className="border border-gray-200 px-6 py-4 text-sm font-medium text-gray-700">
                                                {product.id_product}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm font-medium text-gray-700">
                                                {product.name}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm font-medium text-gray-700">
                                                {product.slug}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm text-gray-600">
                                                {product.description}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm text-gray-600">
                                                ${product.price}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm text-gray-600">
                                                {product.stock}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm text-gray-600">
                                                {product.weight}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm">
                                                {product.image ? (
                                                    <img
                                                        src={`/storage/${product.image}`}
                                                        alt={product.name}
                                                        className="w-20 h-20 object-cover"
                                                    />
                                                ) : (
                                                    "No image"
                                                )}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm text-gray-600">
                                                {product.category_slug}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm">
                                                <div className="flex flex-col space-y-2">
                                                    {/* Botón de Editar */}
                                                    <Link
                                                        href={route(
                                                            "products.edit",
                                                            product.slug
                                                        )}
                                                        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
                                                    >
                                                        Edit
                                                    </Link>

                                                    {/* Botón de Eliminar */}
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                product.slug
                                                            )
                                                        }
                                                        className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition duration-200"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="mt-6 flex justify-center">
                                <Link
                                    href={route("products.create")}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                                >
                                    Create Product
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
