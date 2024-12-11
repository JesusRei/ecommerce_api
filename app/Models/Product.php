<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_product';
    protected $fillable = ['name', 'slug', 'description', 'price', 'stock', 'dimensions', 'weight', 'material', 'image', 'category_slug'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_slug', 'slug');
    }
}