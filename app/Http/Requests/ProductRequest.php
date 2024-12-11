<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:categories,slug,' . $this->route('slug') . ',slug',
            'description' => 'required|string',
            'price' => ['required', 'decimal', 'max:99999.99'],
            'stock' => 'required|integer',
            'dimensions' => 'required|string',
            'weight' => ['required', 'decimal', 'max:999.99'],
            'material' => 'required|string',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category_slug' => 'required|string|exists:categories,slug',

        ];

        // Solo aplicar la regla de imagen si se está subiendo una nueva imagen
        if ($this->hasFile('image')) {
            $rules['image'] = 'image|mimes:jpeg,png,jpg,gif,svg|max:2048';
        }

        return $rules;
    }
}
