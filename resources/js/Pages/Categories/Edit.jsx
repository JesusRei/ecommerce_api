import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Edit({ category }) {
    const { data, setData, put, processing, errors } = useForm({
        name: category.name || "",
        slug: category.slug || "",
        description: category.description || "",
        priority: category.priority || "",
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("categories.update", category.slug), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-3xl font-extrabold text-gray-800">
                    Edit Category
                </h2>
            }
        >
            <Head title="Edit Category" />

            <div className="py-12 bg-gray-50">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-xl sm:rounded-lg border border-gray-300">
                        <div className="p-8 space-y-6">
                            <form onSubmit={submit}>
                                {/* Nombre de la categoría */}
                                <div className="mb-6">
                                    <InputLabel
                                        htmlFor="name"
                                        value="Category Name"
                                    />
                                    <TextInput
                                        id="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2 text-sm text-red-600"
                                    />
                                </div>

                                {/* Slug de la categoría */}
                                <div className="mb-6">
                                    <InputLabel htmlFor="slug" value="Slug" />
                                    <TextInput
                                        id="slug"
                                        value={data.slug}
                                        onChange={(e) =>
                                            setData("slug", e.target.value)
                                        }
                                        className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                                        required
                                    />
                                    <InputError
                                        message={errors.slug}
                                        className="mt-2 text-sm text-red-600"
                                    />
                                </div>

                                {/* Descripción de la categoría */}
                                <div className="mb-6">
                                    <InputLabel
                                        htmlFor="description"
                                        value="Description"
                                    />
                                    <TextInput
                                        id="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                                    />
                                    <InputError
                                        message={errors.description}
                                        className="mt-2 text-sm text-red-600"
                                    />
                                </div>

                                {/* Prioridad de la categoría */}
                                <div className="mb-6">
                                    <InputLabel
                                        htmlFor="priority"
                                        value="Priority"
                                    />
                                    <TextInput
                                        id="priority"
                                        type="number"
                                        value={data.priority}
                                        onChange={(e) =>
                                            setData("priority", e.target.value)
                                        }
                                        className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                                    />
                                    <InputError
                                        message={errors.priority}
                                        className="mt-2 text-sm text-red-600"
                                    />
                                </div>

                                <div className="mt-6 flex items-center justify-end">
                                    <PrimaryButton
                                        className="ml-4 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                        disabled={processing}
                                    >
                                        Update Category
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
