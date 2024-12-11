import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Index({ categories }) {
    console.log(categories); // Verificar los datos de las categorías en la consola

    // Función para manejar la eliminación de la categoría
    const { delete: deleteCategorie } = useForm();

    const handleDelete = (slug) => {
        if (confirm("Are you sure you want to delete this category?")) {
            // Redirecciona al backend para manejar la eliminación
            deleteCategorie(route("categories.destroy", slug));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold leading-tight text-gray-800">
                    Manage Categories
                </h2>
            }
        >
            <Head title="Categories" />

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
                                            Priority
                                        </th>
                                        <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-600">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category) => (
                                        <tr
                                            key={category.id_categorie}
                                            className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition duration-200"
                                        >
                                            <td className="border border-gray-200 px-6 py-4 text-sm font-medium text-gray-700">
                                                {category.id_categorie}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm font-medium text-gray-700">
                                                {category.name}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm font-medium text-gray-700">
                                                {category.slug}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm text-gray-600">
                                                {category.description}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm text-gray-600">
                                                {category.priority}
                                            </td>
                                            <td className="border border-gray-200 px-6 py-4 text-sm">
                                                <div className="flex space-x-2">
                                                    {/* Botón de Editar */}
                                                    <Link
                                                        href={route(
                                                            "categories.edit",
                                                            category.slug
                                                        )}
                                                        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
                                                    >
                                                        Edit
                                                    </Link>

                                                    {/* Botón de Eliminar */}
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                category.slug
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
                                <a
                                    href={route("categories.create")}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                                >
                                    Create Category
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
