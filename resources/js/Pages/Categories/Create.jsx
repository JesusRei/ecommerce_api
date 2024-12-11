import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        slug: "",
        description: "",
        priority: "",
    });

    const submit = (e) => {
        e.preventDefault();

        // Enviar los datos al backend
        post(route("categories.store"), {
            onFinish: () => reset("name", "slug", "description", "priority"), // Reinicia los campos después de enviar
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800">
                    Create a New Category
                </h2>
            }
        >
            <Head title="Create a New Category" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg rounded-lg">
                        <div className="p-6 space-y-6 text-gray-900">
                            <form onSubmit={submit} className="space-y-4">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2 text-sm text-red-500"
                                    />
                                </div>

                                {/* Slug Field */}
                                <div className="space-y-2">
                                    <InputLabel htmlFor="slug" value="Slug" />
                                    <TextInput
                                        id="slug"
                                        name="slug"
                                        value={data.slug}
                                        className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        autoComplete="slug"
                                        isFocused={false}
                                        onChange={(e) =>
                                            setData("slug", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.slug}
                                        className="mt-2 text-sm text-red-500"
                                    />
                                </div>

                                {/* Description Field */}
                                <div className="space-y-2">
                                    <InputLabel
                                        htmlFor="description"
                                        value="Description"
                                    />
                                    <TextInput
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        autoComplete="description"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.description}
                                        className="mt-2 text-sm text-red-500"
                                    />
                                </div>

                                {/* Priority Field */}
                                <div className="space-y-2">
                                    <InputLabel
                                        htmlFor="priority"
                                        value="Priority"
                                    />
                                    <TextInput
                                        id="priority"
                                        name="priority"
                                        type="number" // Cambié el tipo a "number" para asegurar que sea un valor numérico
                                        value={data.priority}
                                        className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        autoComplete="priority"
                                        onChange={(e) =>
                                            setData("priority", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.priority}
                                        className="mt-2 text-sm text-red-500"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="mt-4 flex justify-end">
                                    <PrimaryButton
                                        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                                        disabled={processing}
                                    >
                                        Create Category
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
