@extends('layouts.app')

@section('content')
    <div class="container">
        @include('helpers.flash-messages')

        <div class="row">
            <div class="col-6">
                <h1><i class="fa-solid fa-clipboard-list"></i> {{ __('shop.product.index_title') }}</h1>
            </div>
            <div class="col-6">
                <a style="float: right;" href="{{ route('products.create') }}">
                    <button type="button" class="btn btn-primary "><i class="fa-solid fa-plus"></i></button>
                </a>
            </div>
        </div>

        <div class="row">

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{ __('shop.product.fields.name') }}</th>
                        <th scope="col">{{ __('shop.product.fields.description') }}</th>
                        <th scope="col">{{ __('shop.product.fields.amount') }}</th>
                        <th scope="col">{{ __('shop.product.fields.price') }}</th>
                        <th scope="col">{{ __('shop.product.fields.category') }}</th>
                        <th scope="col">{{ __('shop.columns.actions') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($products as $product)
                        <tr>
                            <th scope="row">{{ $product->id }}</th>
                            <td>{{ $product->name }}</td>
                            <td>{{ $product->description }}</td>
                            <td>{{ $product->amount }}</td>
                            <td>{{ $product->price }}</td>
                            <td>
                                @if ($product->hasCategory())
                                    {{ $product->category->name }}
                                @endif
                            </td>
                            <td>
                                <a href="{{ route('products.show', ['product' => $product->id]) }}">
                                    <button class="btn btn-primary btn-sm"><i class="fa-solid fa-magnifying-glass"></i></button>
                                </a>
                                <a href="{{ route('products.edit', ['product' => $product->id]) }}">
                                    <button class="btn btn-success btn-sm"><i class="fa-regular fa-pen-to-square"></i></button>
                                </a>
                                <button class="btn btn-danger btn-sm delete" data-id="{{ $product->id }}"><i class="fa-regular fa-trash-can"></i></button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $products->links() }}
        </div>
    </div>
@endsection

<script type="text/javascript">
    @section('javascript')

        const deleteUrl = "{{ url('products') }}/";
        const confirmDelete = "{{ __('shop.messages.delete_confirm') }}"
    @endsection
</script>

@section('js-files')
    <script src="{{ asset('js/delete.js') }}"></script>
@endsection
