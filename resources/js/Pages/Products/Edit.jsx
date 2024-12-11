import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({ product, categories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: product.name || "",
        slug: product.slug || "",
        description: product.description || "",
        price: product.price || "",
        stock: product.stock || "",
        dimensions: product.dimensions || "",
        weight: product.weight || "",
        material: product.material || "",
        image: null,
        category_slug: product.category_slug || "",
        _method: "PUT",
    });

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (let key in data) {
            if (key === "image" && data[key] === null) continue;
            formData.append(key, data[key]);
        }

        post(route("products.update", product.slug), formData);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-gray-800">
                    Edit Product
                </h2>
            }
        >
            <Head title="Edit Product" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                        <div className="p-8 text-gray-900">
                            <form
                                onSubmit={submit}
                                encType="multipart/form-data"
                                className="space-y-6"
                            >
                                <div>
                                    <InputLabel
                                        htmlFor="name"
                                        value="Product Name"
                                    />
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="slug"
                                        value="Slug (URL)"
                                    />
                                    <TextInput
                                        id="slug"
                                        name="slug"
                                        value={data.slug}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        autoComplete="slug"
                                        onChange={(e) =>
                                            setData("slug", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.slug}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="description"
                                        value="Product Description"
                                    />
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    ></textarea>
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="price" value="Price" />
                                    <TextInput
                                        id="price"
                                        name="price"
                                        value={data.price}
                                        type="number"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        autoComplete="price"
                                        onChange={(e) =>
                                            setData("price", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.price}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="stock" value="Stock" />
                                    <TextInput
                                        id="stock"
                                        name="stock"
                                        value={data.stock}
                                        type="number"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        autoComplete="stock"
                                        onChange={(e) =>
                                            setData("stock", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.stock}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="dimensions"
                                        value="Dimensions"
                                    />
                                    <TextInput
                                        id="dimensions"
                                        name="dimensions"
                                        value={data.dimensions}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="weight"
                                        value="Weight"
                                    />
                                    <TextInput
                                        id="weight"
                                        name="weight"
                                        value={data.weight}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        autoComplete="weight"
                                        onChange={(e) =>
                                            setData("weight", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.weight}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="material"
                                        value="Material"
                                    />
                                    <TextInput
                                        id="material"
                                        name="material"
                                        value={data.material}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        autoComplete="material"
                                        onChange={(e) =>
                                            setData("material", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.material}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="image"
                                        value="Product Image"
                                    />
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />
                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="category_slug"
                                        value="Category"
                                    />
                                    <Select
                                        id="category_slug"
                                        name="category_slug"
                                        value={data.category_slug}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center justify-end">
                                    <PrimaryButton
                                        className="ml-4 bg-indigo-500 hover:bg-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        disabled={processing}
                                    >
                                        Update Product
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
