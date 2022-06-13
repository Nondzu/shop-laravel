<?php

namespace App\ValueObjects;

use App\Models\Product;

class CartItem
{
    private int $productId;
    private string $name;
    private float $price;
    private ?string $imagePath;
    private int $quantity = 0;

    public function __construct(Product $product, int $quantity = 1)
    {
        $this->productId = $product->id;
        $this->name = $product->name;
        $this->price = $product->price;
        $this->imagePath = $product->image_path;
        $this->quantity += $quantity;
    }

    public function addQuantity(Product $product): CartItem
    {
        return new CartItem($product, ++$this->quantity);
    }

    /**
     * Get the value of productId
     */
    public function getProductId()
    {
        return $this->productId;
    }

    /**
     * Get the value of name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Get the value of price
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Get the value of quantity
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Get the value of imagePath
     */
    public function getImagePath()
    {
        return $this->imagePath;
    }
}
