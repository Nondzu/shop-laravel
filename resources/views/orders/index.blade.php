@extends('layouts.app')

@section('content')
    <div class="container">
        @include('helpers.flash-messages')

        <div class="row">
            <div class="col-6">
                <h1><i class="fa-solid fa-clipboard-list"></i> Zamówienia</h1>
            </div>

        </div>

        <div class="row">

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($orders as $order)
                        <tr>
                            <th scope="row">{{ $product->id }}</th>
                            <td>{{ $order->id }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $orders->links() }}
        </div>
    </div>
@endsection
