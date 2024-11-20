import React from 'react';

const jobRecommendations = [
  {
    id: 1,
    title: 'Web Designer',
    description: 'Responsible for designing, creating, and maintaining visually appealing and user-friendly websites, ensuring optimal functionality, responsiveness, and performance..',
    image: 'https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?t=st=1732140119~exp=1732143719~hmac=315846bc9f220ce59551dd70cb5e45522207e72bf2e08c1138106191219459e4&w=900', // Replace with actual image URL
    link: '/jobs/web designer',
  },
  {
    id: 2,
    title: 'Professional Stylist',
    description: 'Skilled in fabric selection, garment construction, and creating custom, stylish clothing designs.',
    image: 'https://img.freepik.com/free-photo/clothesshop-worker-fastening-formal-jacket-buttons-mannequin_482257-87895.jpg?t=st=1732140442~exp=1732144042~hmac=61485a2d6308cad351c3428fa07ffc4f52221d4e412ad2aa59f97dfcf16387cd&w=360', // Replace with actual image URL
    link: '/jobs/stylist',
  },
  {
    id: 3,
    title: 'Graphic Designer',
    description: 'Specialized in welding metal parts together for various applications.',
    image: 'https://img.freepik.com/free-photo/professional-heavy-industry-team-engineers-working-computer_482257-19431.jpg?t=st=1732140646~exp=1732144246~hmac=6139cf9dbdc999f96c783556674c1fce96463d1b62f23ec4d35a84394e48d845&w=360', // Replace with actual image URL
    link: '/jobs/Graphic designer',
  },
];

const JobRecommendations = () => {
  return (
    <div className="p-4 bg-white shadow rounded font-inter">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Job Recommendations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobRecommendations.map((job) => (
          <div key={job.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer">
            <img src={job.image} alt={job.title} className="w-full h-36 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">{job.title}</h4>
            
              <a 
                href={job.link} 
                className="inline-block px-4 py-2 text-white bg-[#8cd836] rounded hover:bg-green-900 transition duration-200"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendations;
