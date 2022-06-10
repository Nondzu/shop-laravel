@if (session('status'))
    <div class="row">
        <div class="col-12">
            <div class="alert alert-success">
                <a style="float: right;" >
                    <button style="border: 0px; background-color: rgb(82, 255, 82)" class="close" data-bs-dismiss="alert" aria-hidden="true">
                        &times;
                    </button>
                </a>
                {{ session('status') }}
            </div>
        </div>
    </div>
@endif
