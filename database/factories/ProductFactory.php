<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Product::class;
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'slug' => $this->faker->unique()->slug(),
            'description' => $this->faker->text(),
            'price' => $this->faker->randomFloat(2, 1, 1000),
            'stock' => $this->faker->randomNumber(2),
            'dimensions' => $this->faker->text(),
            'weight' => $this->faker->randomFloat(2, 1, 100),
            'material' => $this->faker->text(),
            'image' => $this->faker->imageUrl(),
            'category_slug' => Category::factory()->create()->slug,
        ];
    }
}
