<?php

namespace App\Http\Controllers;

use PDO;
use App\Models\Product;
use Illuminate\View\View;
use App\ValueObjects\Cart;
use App\ValueObjects\CartItem;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\UpsertProductRequest;

class CartController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(): View
    {
        dd(Session::get('cart', new Cart()));
        return view('home');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreProductRequest  $request
     * @return JsonResponse
     */
    public function store(Product $product): JsonResponse
    {
        $cart = Session::get('cart', new Cart());

        Session::put('cart', $cart->addItem($product));

        return response()->json([
            'status' => 'success'
        ]);
    }
}
