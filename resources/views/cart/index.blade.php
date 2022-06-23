@extends('layouts.app')
@section('css-files')
    <link href="{{ asset('css/cart.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div class="container">
        @include('helpers.flash-messages')

        <div class="cart_section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="cart_container">
                            <div class="cart_title">Shopping Cart<small> ({{ $cart->getItems()->count() }}) </small></div>
                            <form action="{{ route('orders.store') }}" method="POST" id="order-form">
                                @csrf
                                <div class="cart_items">
                                    <ul class="cart_list">
                                        @foreach ($cart->getItems() as $item)
                                            <li class="cart_item clearfix">
                                                <div class="cart_item_image"><img src="{{ $item->getImage() }}"
                                                        alt="Zdjęcie produktu"></div>
                                                <div
                                                    class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                    <div class="cart_item_name cart_info_col">
                                                        <div class="cart_item_title">{{ __('shop.product.fields.name') }}
                                                        </div>
                                                        <div class="cart_item_text">{{ $item->getName() }}</div>
                                                    </div>
                                                    <div class="cart_item_quantity cart_info_col">
                                                        <div class="cart_item_title">
                                                            {{ __('shop.product.fields.amount') }}
                                                        </div>
                                                        <div class="cart_item_text">{{ $item->getQuantity() }}</div>
                                                    </div>
                                                    <div class="cart_item_price cart_info_col">
                                                        <div class="cart_item_title">{{ __('shop.product.fields.price') }}
                                                            [PLN]</div>
                                                        <div class="cart_item_text">{{ $item->getPrice() }}</div>
                                                    </div>
                                                    <div class="cart_item_total cart_info_col">
                                                        <div class="cart_item_title">{{ __('shop.product.fields.sum') }}
                                                            [PLN]
                                                        </div>
                                                        <div class="cart_item_text">{{ $item->getSum() }}</div>
                                                    </div>

                                                    <div class="cart_info_col">
                                                        <button class="btn btn-danger btn-sm delete"
                                                            data-id="{{ $item->getProductId() }}"><i
                                                                class="fa-regular fa-trash-can"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                                <div class="order_total">
                                    <div class="order_total_content text-md-right">
                                        <div class="order_total_title">{{ __('shop.product.fields.sum_order') }} [PLN]:
                                        </div>
                                        <div class="order_total_amount">{{ $cart->getSum() }}</div>
                                    </div>
                                </div>
                                <div class="cart_buttons">
                                    <a href="/" type="button"
                                        class="button cart_button_clear">{{ __('shop.button.continue_shopping') }}</a>

                                    <button type="submit"
                                        class="button cart_button_checkout">{{ __('shop.button.payment') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

<script type="text/javascript">
    @section('javascript')

        const deleteUrl = "{{ url('cart') }}/";
        const confirmDelete = "{{ __('shop.messages.delete_confirm') }}"
    @endsection
</script>

@section('js-files')
    <script src="{{ asset('js/delete.js') }}"></script>
@endsection
