<?php

namespace App\Repositories;
use App\Models\Sample;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Interfaces\SampleInterface;

class SampleRepository extends BaseRepository implements SampleInterface
{
    protected $model;
    protected $hasLogs = true;

    public function __construct(Sample $sample) {
        $this->model = $sample;
    }
}
