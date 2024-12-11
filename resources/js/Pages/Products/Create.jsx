import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        slug: "",
        description: "",
        price: "",
        stock: "",
        dimensions: "",
        weight: "",
        material: "",
        image: null,
        category_slug: "",
    });

    const submit = (e) => {
        e.preventDefault();

        console.log(data); // Verifica que los datos son correctos antes de enviarlos

        post(route("products.store"), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () =>
                reset(
                    "name",
                    "slug",
                    "description",
                    "price",
                    "stock",
                    "dimensions",
                    "weight",
                    "material",
                    "image",
                    "category_slug"
                ),
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create a new product
                </h2>
            }
        >
            <Head title="Create a new product" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form
                                onSubmit={submit}
                                encType="multipart/form-data"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <InputLabel
                                            htmlFor="name"
                                            value="Product name"
                                        />
                                        <TextInput
                                            id="name"
                                            type="text"
                                            name="title"
                                            value={data.name}
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

                                    <div>
                                        <InputLabel
                                            htmlFor="slug"
                                            value="Slug (URL)"
                                        />
                                        <TextInput
                                            id="slug"
                                            type="text"
                                            name="slug"
                                            value={data.slug}
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            autoComplete="slug"
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
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <InputLabel
                                            htmlFor="description"
                                            value="Product Description"
                                        />
                                        <TextInput
                                            id="description"
                                            type="text"
                                            name="description"
                                            value={data.description}
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

                                    <div>
                                        <InputLabel
                                            htmlFor="price"
                                            value="Price"
                                        />
                                        <TextInput
                                            id="price"
                                            type="number"
                                            name="price"
                                            value={data.price}
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            autoComplete="price"
                                            onChange={(e) =>
                                                setData("price", e.target.value)
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.price}
                                            className="mt-2 text-sm text-red-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <InputLabel
                                            htmlFor="stock"
                                            value="Stock"
                                        />
                                        <TextInput
                                            id="stock"
                                            type="number"
                                            name="stock"
                                            value={data.stock}
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            autoComplete="stock"
                                            onChange={(e) =>
                                                setData("stock", e.target.value)
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.stock}
                                            className="mt-2 text-sm text-red-500"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="dimensions"
                                            value="Dimensions"
                                        />
                                        <TextInput
                                            id="dimensions"
                                            type="text"
                                            name="dimensions"
                                            value={data.dimensions}
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            autoComplete="dimensions"
                                            onChange={(e) =>
                                                setData(
                                                    "dimensions",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.dimensions}
                                            className="mt-2 text-sm text-red-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <InputLabel
                                            htmlFor="weight"
                                            value="Weight"
                                        />
                                        <TextInput
                                            id="weight"
                                            type="text"
                                            name="weight"
                                            value={data.weight}
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            autoComplete="weight"
                                            onChange={(e) =>
                                                setData(
                                                    "weight",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.weight}
                                            className="mt-2 text-sm text-red-500"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="material"
                                            value="Material"
                                        />
                                        <TextInput
                                            id="material"
                                            type="text"
                                            name="material"
                                            value={data.material}
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            autoComplete="material"
                                            onChange={(e) =>
                                                setData(
                                                    "material",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.material}
                                            className="mt-2 text-sm text-red-500"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="image"
                                        value="Product Image"
                                    />
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />
                                    <InputError
                                        message={errors.image}
                                        className="mt-2 text-sm text-red-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="category_slug"
                                        value="Category"
                                    />
                                    <Select
                                        id="category_slug"
                                        name="category_slug"
                                        value={data.category_slug}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        onChange={(e) =>
                                            setData(
                                                "category_slug",
                                                e.target.value
                                            )
                                        }
                                        required
                                    >
                                        <option value="">
                                            Select a category
                                        </option>
                                        {categories.map((category) => (
                                            <option
                                                key={category.slug}
                                                value={category.slug}
                                            >
                                                {category.name}
                                            </option>
                                        ))}
                                    </Select>
                                    <InputError
                                        message={errors.category_slug}
                                        className="mt-2 text-sm text-red-500"
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ml-4 px-6 py-3 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        disabled={processing}
                                    >
                                        Create Product
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
