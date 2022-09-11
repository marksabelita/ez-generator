<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sample extends Model
{
    use HasFactory;
    public $table = '';
    protected $primaryKey = 'id';

    public $fillable = [
        'uuid',
        'email',
        'message',
        'name',
        'phone',
        'subject'
    ];
}
