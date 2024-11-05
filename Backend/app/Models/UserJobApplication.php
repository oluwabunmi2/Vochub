<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserJobApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'job_id'
    ];
    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function job(): BelongsTo {
        return $this->belongsTo(JobApplication::class);
    }
}
