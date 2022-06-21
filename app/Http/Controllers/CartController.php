<?php

namespace App\Http\Controllers;

use PDO;
use Exception;
use App\Models\Product;
use Illuminate\View\View;
use App\ValueObjects\Cart;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\ValueObjects\CartItem;
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
        // dd(Session::get('cart', new Cart()));
        return view('cart.index', [
            'cart' => Session::get('cart', new Cart())
        ]);
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

        /**
     * Remove the specified resource from storage.
     *
     * @param Product  $product
     * @return JsonResponse
     */
    public function destroy(Product $product): JsonResponse
    {
        try {
            $cart = Session::get('cart', new Cart());
            Session::put('cart', $cart->removeItem($product));

            Session::flash('status', __('shop.product.status.delete.success'));
            return response()->json([
                'status' => 'success'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Wystapił bład',
            ])->setStatusCode(500);
        }
    }
}
