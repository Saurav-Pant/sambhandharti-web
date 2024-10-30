"use client";
import { useState } from "react";
import Image from "next/image";

const ProjectsPage = () => {
  const [upcomingProjects, setUpcomingProjects] = useState([
    { name: "Project Alpha", description: "Sustainable community building." },
    { name: "Project Beta", description: "Renewable energy initiative." },
  ]);

  const [projects, setProjects] = useState([
    {
    //   id: "project1",
    //   name: "Project A",
    //   description: "Empowering local artisans through skill development.",
    //   details:
    //     "This project aims to empower local artisans by providing them with essential skills and resources that enable them to thrive in a competitive market. Through a combination of workshops, mentorship, and access to tools, we will help artisans enhance their craft and produce high-quality goods that resonate with modern consumers. The initiative will also include training on marketing strategies and e-commerce platforms, allowing artisans to reach a broader audience. By fostering creativity and encouraging innovation, we seek to create a sustainable ecosystem where artisans can support themselves and their families. Furthermore, this project promotes cultural heritage by ensuring that traditional crafts are preserved and celebrated. We believe that every artisan has a unique story, and through our efforts, we aim to amplify their voices and showcase their talents on both local and global stages. This project not only enhances the economic stability of artisans but also contributes to community development, as successful artisans often invest back into their communities, creating jobs and supporting local initiatives. We envision a future where artisans are not just surviving but thriving, and we are committed to making that vision a reality. Our comprehensive approach includes collaboration with local governments and organizations to provide the necessary support for artisans to flourish. By focusing on holistic development, we will ensure that artisans have the skills, resources, and opportunities they need to succeed in today’s market. In addition to skill development, we will facilitate networking opportunities for artisans, allowing them to connect with industry experts and potential buyers. This will foster a sense of community and collaboration among artisans, encouraging them to share best practices and learn from one another. Ultimately, Project A is about more than just individual success; it is about building a supportive community that empowers its members to pursue their dreams and achieve their goals.",
    //   imageUrl: "https://plus.unsplash.com/premium_photo-1664301420258-06811f6c1b4a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Random craft image
    // },
    // {
    //   id: "project2",
    //   name: "Project B",
    //   description: "Eco-friendly housing for low-income families.",
    //   details:
    //     "Project B is an innovative initiative focused on providing eco-friendly housing solutions for low-income families. The aim is to create affordable homes that do not compromise on quality or environmental sustainability. We will utilize renewable resources, such as recycled materials and sustainable building practices, to ensure that each home is both cost-effective and environmentally responsible. In addition to constructing new homes, the project will also involve retrofitting existing houses to improve energy efficiency and reduce utility costs for families. Our approach emphasizes community engagement, ensuring that families have a say in the design and features of their new homes. This project not only addresses the pressing need for affordable housing but also incorporates elements of community development, encouraging residents to participate in workshops and training sessions on home maintenance and energy efficiency practices. By fostering a sense of ownership and community pride, we aim to create neighborhoods that are vibrant, resilient, and self-sustaining. The housing units will be designed to provide maximum comfort and functionality while minimizing environmental impact. Each unit will feature energy-efficient appliances, solar panels, and rainwater harvesting systems, reducing dependence on external resources and lowering utility costs. Our team will work closely with local governments and non-profit organizations to secure funding and support for this initiative, ensuring that we can reach as many families as possible. Furthermore, Project B aims to raise awareness about the importance of sustainable living and environmental conservation. Through community workshops and educational programs, we will equip families with the knowledge and skills they need to live sustainably and responsibly. Our vision is to create a model for eco-friendly housing that can be replicated in other communities, demonstrating that it is possible to build affordable homes without sacrificing quality or environmental stewardship. We believe that everyone deserves a safe, comfortable place to live, and through Project B, we are committed to making that belief a reality for low-income families.",
    //   imageUrl: "https://media.istockphoto.com/id/2038989495/photo/cute-girl-holds-hands-with-mother-while-walking-through-a-park.jpg?s=1024x1024&w=is&k=20&c=WnliTRYCluC34eSNwS7hz3iG7vw1N2apKwwdjqRBWIc="
    //     },    {
    //   id: "project3",
    //   name: "Project C",
    //   description: "Tech initiative for small businesses in underserved areas.",
    //   details:
    //     "Project C aims to bridge the technology gap faced by small businesses in underserved areas. Many small business owners lack access to essential technology and training, limiting their ability to compete in today’s digital economy. Our initiative will provide comprehensive support, including access to hardware, software, and training on digital marketing and e-commerce strategies. By empowering small business owners with the skills and resources they need to succeed online, we aim to foster economic growth and job creation in these communities. Our team will conduct workshops that cover a range of topics, from social media marketing to website development, ensuring that participants gain practical knowledge that they can apply immediately to their businesses. Additionally, we will offer one-on-one mentoring and support, helping entrepreneurs to develop personalized strategies for growth and success. This project will also create a network of small businesses, encouraging collaboration and knowledge-sharing among participants. By fostering a supportive community, we believe that small business owners can learn from one another and find innovative solutions to common challenges. We will work closely with local organizations and community leaders to identify businesses that would benefit from this program and to tailor our offerings to meet their specific needs. Project C is about more than just technology; it’s about empowerment and opportunity. We believe that by equipping small businesses with the right tools and knowledge, we can help them thrive and contribute to the overall economic development of their communities. Our vision is to create a sustainable ecosystem where small businesses can flourish, creating jobs, supporting local economies, and enhancing community well-being. As we roll out this initiative, we will continuously gather feedback from participants to refine and improve our programs. Our goal is to ensure that we are effectively addressing the needs of small business owners and providing them with the best possible support. Ultimately, Project C is an investment in the future of underserved communities, and we are committed to making a lasting impact through our efforts.",
    //   imageUrl: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGRyZW4lMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D", // Random tech image
    },
  ]);

  return (
    <div className="container mx-auto p-4 min-h-screen">

      <div className={`flex flex-col md:flex-row items-start justify-between h-auto px-4 space-y-10 md:space-y-0 md:space-x-10`}>

        <div className="w-full md:w-1/2">
          <Image
            src="https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/about/about%20main%20photo.jpg"
            alt="Helping Hands"
            width={1000}
            height={1000}
            className="rounded-lg shadow-lg w-full h-auto object-cover mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold to-black">Upcoming <span className="text-red-500">Projects</span></h2>
            <div className="grid grid-cols-1 gap-2">
              {upcomingProjects.map((project, index) => (
                <div key={index} className="p-2 bg-gray-100 rounded-lg">
                  <h3 className="text-md font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-red-500 mb-4">Projects</h2>
            {projects.length>1 ?<div className="grid grid-cols-1 gap-2">
              {projects.map((project:any) => (
                <a
                  key={project.id}
                  href={`#${project.id}`}
                  className="block p-4 bg-gradient-to-r from-red-500 to-orange-300 text-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm">{project.description}</p>
                </a>
              ))}
            </div>
            : <p className="block p-4 bg-gradient-to-r from-red-500 to-orange-300 text-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">No projects available at the moment.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
