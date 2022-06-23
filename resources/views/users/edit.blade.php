@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"> {{ __('shop.user.edit_title', ['name' => $user->email]) }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('users.update', $user->id) }}">
                            {{ method_field('PUT') }}
                            @csrf

                            <div class="row mb-3">
                                <label for="city" maxlength="500" class="col-md-4 col-form-label text-md-end">
                                    {{ __('shop.user.fields.city') }}</label>

                                <div class="col-md-6">
                                    <input id="city" type="text"
                                        class="form-control @error('city') is-invalid @enderror" name="address[city]"
                                        value="@if ($user->hasAddress()) {{ $user->address->city }} @endif"
                                        required autocomplete="city" autofocus>

                                    @error('city')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="zip_code" maxlength="500" class="col-md-4 col-form-label text-md-end">
                                    {{ __('shop.user.fields.zip_code') }}</label>

                                <div class="col-md-6">
                                    <input id="zip_code" type="text"
                                        class="form-control @error('zip_code') is-invalid @enderror"
                                        name="address[zip_code]"
                                        value="@if ($user->hasAddress()) {{ $user->address->zip_code }} @endif"
                                        required autocomplete="zip_code" autofocus>

                                    @error('zip_code')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="street" maxlength="500" class="col-md-4 col-form-label text-md-end">
                                    {{ __('shop.user.fields.street') }}</label>

                                <div class="col-md-6">
                                    <input id="street" type="text"
                                        class="form-control @error('street') is-invalid @enderror" name="address[street]"
                                        value="@if ($user->hasAddress()) {{ $user->address->street }} @endif"
                                        required autocomplete="street" autofocus>

                                    @error('street')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="street_no" maxlength="500" class="col-md-4 col-form-label text-md-end">
                                    {{ __('shop.user.fields.street_no') }}</label>

                                <div class="col-md-6">
                                    <input id="street_no" type="text"
                                        class="form-control @error('street_no') is-invalid @enderror"
                                        name="address[street_no]"
                                        value="@if ($user->hasAddress()) {{ $user->address->street_no }} @endif"
                                        required autocomplete="street_no" autofocus>

                                    @error('street_no')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="home_no" maxlength="500" class="col-md-4 col-form-label text-md-end">
                                    {{ __('shop.user.fields.home_no') }}</label>

                                <div class="col-md-6">
                                    <input id="home_no" type="text"
                                        class="form-control @error('street_no') is-invalid @enderror"
                                        name="address[home_no]"value="@if ($user->hasAddress()) {{ $user->address->home_no }} @endif"
                                        required autocomplete="home_no" autofocus>

                                    @error('home_no')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>



                            <div class="form-group row mb-0 float-end">
                                <div class="col-md-6">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('shop.button.save') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
