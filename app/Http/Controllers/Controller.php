<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

/**
 * @OA\OpenApi(
 *  @OA\Info(
 *      title="Returns Services API",
 *      version="1.0.0",
 *      description="API documentation for Returns Service App",
 *      @OA\Contact(
 *          email="sushil@stepfront.com"
 *      )
 *  ),
 *  @OA\Server(
 *      description="Returns App API",
 *      url="http://localhost/"
 *  ),
 *  @OA\PathItem(
 *      path="/"
 *  )
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}