<?php

namespace Database\Seeders;

use App\Models\JobApplication;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jobs = [
            [
                "title" => "Web Developer",
                "company" => "Creative Inc",
                "type" => "Remote - Fulltime",
                "description" => "Create stunning visual content for our clients... <br><b>Requirements</b> 3+ years of experience, Adobe Photoshop, Illustrator"
            ],
            [
                "title" => "Tailoring Expert",
                "company" => "Fashion Hub",
                "type" => "Lagos - Part-Time",
                "description" => "Sew and design various types of clothing <br><b>Requirements</b> 5+ years of tailoring experience, skilled in pattern making"
            ],
            [
                "title" => "Data Scientist",
                "company" => "Tech Solutions",
                "type" => "Remote - Fulltime",
                "description" => "Analyze and interpret complex data sets... <br><b>Requirements</b> 2+ years of experience, Python, R, SQL"
            ],
            [
                "title" => "Marketing Specialist",
                "company" => "Market Leaders",
                "type" => "New York - Fulltime",
                "description" => "Develop and implement marketing strategies... <br><b>Requirements</b> 4+ years of experience, SEO, SEM, Google Analytics"
            ],
            [
                "title" => "Graphic Designer",
                "company" => "Design Studio",
                "type" => "San Francisco - Part-Time",
                "description" => "Create visual concepts to communicate ideas... <br><b>Requirements</b> 3+ years of experience, Adobe Creative Suite"
            ],
        ];

        foreach($jobs as $job){
            JobApplication::firstOrCreate($job);
        }
    }
}
