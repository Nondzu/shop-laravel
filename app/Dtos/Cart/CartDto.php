<?php

namespace App\Dtos\Cart;

class CartDto
{
    private array $items = [];
    private float $totalSum = 0;
    private int $totalQuantity = 0;

    /**
     * Get the value of irems
     */
    public function getItems()
    {
        return $this->items;
    }

    /**
     * Set the value of irems
     *
     * @return  self
     */
    public function setItems($items)
    {
        $this->items = $items;

        return $this;
    }

    /**
     * Get the value of totalSum
     */
    public function getTotalSum()
    {
        return $this->totalSum;
    }

    /**
     * Set the value of totalSum
     *
     * @return  self
     */
    public function setTotalSum($totalSum)
    {
        $this->totalSum = $totalSum;

        return $this;
    }

    /**
     * Get the value of totalQuantity
     */
    public function getTotalQuantity()
    {
        return $this->totalQuantity;
    }

    /**
     * Set the value of totalQuantity
     *
     * @return  self
     */
    public function setTotalQuantity($totalQuantity)
    {
        $this->totalQuantity = $totalQuantity;

        return $this;
    }

    public function incrementTotalQuantity(): void
    {
        $this->totalQuantity += 1;
    }

    public function incrementTotalSum(float $price): void
    {
        $this->totalSum += $price;
    }
}
