import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');


  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  
  // Example course data
  const courses = [
    {
      image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010138.jpg?t=st=1732137091~exp=1732140691~hmac=1e6970547d414da264184119f6756a84b5006ffc4c98bc1171c12ccfa9650f02&w=900',
      title: 'Web Development',
      category: 'Development',
      enrollments: 200,
      authorImg: 'https://img.freepik.com/free-photo/two-african-dressmaker-woman-sews-clothes-sewing-machine-tailor-office-black-seamstress-girls_627829-4508.jpg?t=st=1729594545~exp=1729598145~hmac=c48e592c0c014c1ed6fcbcdb99a95c1d24b9126f6b50f5a3451aa6556e151bd4&w=740',
      authorName: 'John Doe',
      description: 'Learn the basics of frontend development, including HTML, CSS, and JavaScript. By the end of this course, you will be able to build responsive websites.',
      learningOutcomes: [
        'Understand HTML, CSS, and JavaScript basics',
        'Build responsive websites',
        'Learn how to use frameworks like React',
      ],
    },
    {
      image: 'https://img.freepik.com/free-photo/woman-taking-care-her-afro-hair_23-2149259395.jpg?t=st=1729597861~exp=1729601461~hmac=d650fdaf45853f82bc9fe5ddcdfa92eff2df356f994314014cdfec125bf70d01&w=740',
      title: 'Hairdressing and Makeup',
      category: 'Beauty',
      enrollments: 150,
      authorImg: 'https://img.freepik.com/free-photo/stylist-woman-taking-care-her-client-afro-hair_23-2149259373.jpg?t=st=1729597983~exp=1729601583~hmac=94ef368ac138253aee99c3bcbb78465d4774634484c29ffe91eb380e2c1fbe7e&w=360',
      authorName: 'Emily Watson',
      description: 'Learn the art of hairdressing and makeup application, covering hairstyling techniques, beauty treatments, and makeup artistry for various occasions.',
      learningOutcomes: [
        'Understand different hairstyling techniques',
        'Learn how to apply makeup for different face shapes',
        'Master bridal and special occasion makeup',
        'Develop skills for working in a salon environment'
      ]
    },    
    {
      image: 'https://img.freepik.com/free-photo/close-up-thorough-measuring_482257-90427.jpg?t=st=1729594505~exp=1729598105~hmac=ebb4fd46c1a2fea239c215a1bb2174062f33e39a5d5f304e1819ae76e6634c77&w=740',
      title: 'Tailoring',
      category: 'Craftsmanship',
      enrollments: 120,
      authorImg: '/author3.jpg',
      authorName: 'Michael Brown',
      description: 'Gain practical skills in tailoring, covering fabric selection, cutting, sewing, and finishing techniques to design and create functional, stylish, and customized clothing items.',
      learningOutcomes: [
        'Understand the basics Tailoring',
        'Learn various cutting and assembly techniques',
        'Cut and sew Elegant outfits',
        'Master finishing techniques for high-quality designs'
      ]
    },
    {
      image: 'https://img.freepik.com/free-photo/medium-shot-artisan-doing-woodcutting_23-2150104745.jpg?t=st=1729598273~exp=1729601873~hmac=13c6a69ce5c00f2eaa176748bbab68eea78fa799d777ce9b907cb4844d14d167&w=740',
      title: 'Bag & Shoe Making',
      category: 'Fashion & Accessories',
      enrollments: 180,
      authorImg: '/author1.jpg',
      authorName: 'Anna Stewart',
      description: 'Learn the skills of designing and crafting both bags and shoes, covering materials, sewing techniques, and pattern creation to produce custom-made accessories.',
      learningOutcomes: [
        'Understand the fundamentals of bag and shoe design',
        'Learn different sewing and stitching techniques',
        'Master pattern creation and material selection',
        'Develop skills for making leather and fabric accessories'
      ]
    },
    {
      image: 'https://img.freepik.com/free-photo/ui-ux-representations-with-smart-watch_23-2150201853.jpg?t=st=1732138673~exp=1732142273~hmac=abf3f6e35cc3d3fd82bd4a6d90cc145f99d7eac887086883ff8afc0dd5d1b45a&w=900',
      title: 'UI/UX Design',
      category: 'Design',
      enrollments: 250,
      authorImg: '/author3.jpg',
      authorName: 'David Lee',
      description: 'Discover the fundamentals of UI/UX design, from wireframing to prototyping. This course covers user research, interface design, and usability testing to create engaging and user-friendly digital experiences.',
      learningOutcomes: [
        'Understand the core principles of user interface (UI) and user experience (UX) design, including typography, color theory, and layout to create visually appealing and functional designs.',
        'Gain skills in conducting user research and creating personas to design interfaces that meet the needs and expectations of diverse user groups.',
        'Learn to use industry-standard tools to create wireframes and interactive prototypes, ensuring efficient design iteration and testing.',
        'Learn to use industry-standard tools to create wireframes and interactive prototypes, ensuring efficient design iteration and testing.'
      ]
    },
    {
      image: 'https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg?t=st=1729598354~exp=1729601954~hmac=8c5b2f5d74d8f192b8942e51d71a40fc720d4719b7c23f9362186f6edbe6471e&w=740',
      title: 'Baking',
      category: 'Culinary Arts',
      enrollments: 1250,
      authorImg: '/author4.jpg',
      authorName: 'Julia White',
      description: 'Become a master baker by learning techniques for bread, cakes, pastries, and more. This course teaches you everything from basic baking skills to advanced decorating techniques.',
      learningOutcomes: [
        'Learn the basics of bread, cake, and pastry making',
        'Master dough preparation and baking temperatures',
        'Understand cake decoration and finishing techniques',
        'Develop skills for creating a variety of baked goods'
      ]
    },
    {
      image: 'https://img.freepik.com/free-vector/graphic-design-art-profession-theme_24877-63484.jpg?t=st=1729598438~exp=1729602038~hmac=a867457dd55b6f502148117ad54f808f34c01d0fec69488fbaf451c979df8452&w=740',
      title: 'Graphic Design',
      category: 'Design',
      enrollments: 1450,
      authorImg: '/author5.jpg',
      authorName: 'Mark Green',
      description: 'Learn the fundamentals of graphic design, from typography to logo creation, using modern design tools. This course will help you develop creative skills for print and digital design.',
      learningOutcomes: [
        'Understand design principles and color theory',
        'Learn to create professional logos and branding materials',
        'Master design tools like Adobe Photoshop and Illustrator',
        'Develop skills for both print and digital media design'
      ]
    },      
    // Add more courses here...
  ];

   // Filter logic
   const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex bg-[#f9f9f9] min-h-screen">
      <div className={`fixed h-full bg-[#002266] z-40 lg:w-[200px] lg:block ${isSidebarOpen ? 'block' : 'hidden'} transition-transform lg:transform-none`}>
        <Sidebar />
      </div>
      <div className=" flex-1 lg:ml-[200px] font-inter">
        <Navbar />
        <div className="p-6">
          <h1 className="mb-6 text-2xl font-semibold text-gray-800">Courses</h1>
          
          <SearchBar onSearch={setSearchTerm}  onCategoryChange={setSelectedCategory}  />
          
          <div className="grid grid-cols-1 gap-2 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <CourseCard 
                key={index} 
                image={course.image} 
                title={course.title}
                category={course.category}
                enrollments={course.enrollments}
                authorImg={course.authorImg}
                authorName={course.authorName}
                description={course.description} // Pass description
                learningOutcomes={course.learningOutcomes} // Pass learning outcomes
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
