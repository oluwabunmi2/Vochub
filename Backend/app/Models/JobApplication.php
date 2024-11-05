<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'company', 'type', 'description'
    ];

    public function user_job_applications(): HasMany {
        return $this->hasMany(UserJobApplication::class);
    }
}
