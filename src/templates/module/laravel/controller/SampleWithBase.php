<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Interfaces\SampleInterface;
class SampleController extends RestBaseController
{
    protected $interface;
    protected $basicFilterFields = [  ];

    public function __construct(SampleInterface $interface) {
        $this->interface = $interface;
    }
}
