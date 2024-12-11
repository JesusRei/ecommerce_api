<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_categorie';
    protected $fillable = ['name', 'slug', 'description', 'priority'];

    public function products()
    {
        return $this->hasMany(Product::class, 'category_slug', 'slug');
    }
}
