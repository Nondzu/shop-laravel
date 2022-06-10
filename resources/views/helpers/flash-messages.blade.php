@if (session('status'))
    <div class="row">
        <div class="col-12">
            <div class="alert alert-success">
                <a style="float: right;" >
                    <button style="border: 0px; background-color: transparent" class="close" data-bs-dismiss="alert" >
                        <i class="fa-regular fa-circle-xmark fa-2x"></i>
                    </button>
                </a>
                {{ session('status') }}
            </div>
        </div>
    </div>
@endif
