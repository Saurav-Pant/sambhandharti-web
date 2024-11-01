import React from 'react'
import { CardDemo } from '@/components/ui/missionCard'
import Footer from '@/components/Footer'
const page = () => {
  const missionData = [{
    id:1,
    title: "Taking Responsibility",
    description: "To enable people to take responsibility for the situation of the deprived Indian child and so motivate them to",
    img: "",
    gif: "",
  },
  {
    id:2,
    title: "Mobilising People",
    description: "To make people discover their potential for action and change",
    img: "",
    gif: "",
  },
  {
    id:3,
    title: "Inspiring Collective Action",
    description: "To enable peoples’ collectives and movements encompassing diverse segments, to pledge their",
    img: "",
    gif: "",
  }


  ]
  return (
//     <div className='container mx-auto px-4 my-16  md:px-8 lg:px-16  '>



// <div className='max-w-[1320px]  flex flex-col flex-grow md:flex-row mx-auto '>
//   <div className='basis-[45%] px-5'>
//     <p className='text-justify pt-14 text-lg text-gray-600 dark:text-gray-300'>
//       <span className="text-violet-500 font-bold px-2">Sambharndaharti</span>Foundation, a non-government organization established in 2018, is dedicated to improving the well-being of all living beings. Our holistic approach encompasses humans, animals, and the environment, reflected in our innovative programs for the underprivileged, animal welfare, and environmental conservation.
//       We provide comprehensive support to the homeless, including medical care and educational opportunities, while also bringing joy to orphanages through essential supplies and recreational activities. Our commitment extends to rescuing and feeding stray dogs and engaging in tree planting initiatives for environmental sustainability.

//     </p>
//   </div>
//   <div className='basis-[45%] px-5 flex flex-col '>
//     <h1 className='ml-4 sm:ml-10 mt-10 lg:mt-0 font-bold text-xl sm:text-4xl text-center text-violet-500'>About Us</h1>
//     <div className='w-full'>
//       <img
//         src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg="
//         alt=""
//         width={600}
//           height={600}

//         className=' rounded-lg shadow-lgw-[80%] h-auto mx-auto py-6' // Adjust width and maintain aspect ratio
//       />
//     </div>
//   </div>
// </div>




// <div className='py-16 flex flex-col items-center'>
//   <h2 className='ml-4 sm:ml-10 mt-10 lg:mt-0 font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl mb-4 text-center text-violet-500'>
//     Concern About Our Mission
//   </h2>
//   <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-12 gap-6 py-6">
//     {missionData.map((mission, index) => (
//       <CardDemo key={index} title={mission.title} description={mission.description} />
//     ))}
//   </div>
// </div>

//     </div>
<>

<div className='container  px-4 mx-auto  md:px-8 lg:px-16 my-8 '>

<div className='grid  gap-4 sm:ml-10 sm:grid-cols-2 '>
<div className=' '>
<h1 className='ml-0 sm:ml-10 lg:ml-0 mt-0 font-bold text-xl sm:text-4xl text-left text-orange-600 dark:text-orange-400'>
About Us
</h1>

<p className='text-justify pt-4 text-lg text-gray-600 dark:text-gray-300 ml-0 sm:ml-10 lg:ml-0'>
<span className="text-orange-600 dark:text-orange-400 font-bold">Sambharndaharti</span> Foundation, a non-government organization established in 2018, is dedicated to improving the well-being of all living beings. Our holistic approach encompasses humans, animals, and the environment, reflected in our innovative programs for the underprivileged, animal welfare, and environmental conservation. We provide comprehensive support to the homeless, including medical care and educational opportunities, while also bringing joy to orphanages through essential supplies and recreational activities. Our commitment extends to rescuing and feeding stray dogs and engaging in tree planting initiatives for environmental sustainability.
</p>
</div>

  <div>
    <img
      src="https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/about/about%20main%20photo.jpg"
      alt="About us"

      // now i am making changes
      className='rounded-lg shadow-lg w-[80%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] sm:w-[100%]  mx-auto' // Adjust width and maintain aspect ratio
    />
  </div>
</div>

<div className='grid  gap-4 sm:ml-10 sm:grid-cols-2 mt-8 items-center'>
  <div>
    <img
      src="https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/about/about%20main%20photo.jpg"
      alt="Founder"

      className=' rounded-lg shadow-lg w-[80%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] mx-auto '
    />
  </div>
  <div className=' '>
    <h1 className='lg:mt-0 font-bold text-xl sm:text-4xl  text-orange-600 dark:text-orange-400'>Meet our Founder</h1>

    <p className=' text-justify pt-12 text-lg text-gray-600 dark:text-gray-300'>
    The founder of the NGO,  <span className="text-orange-600 dark:text-orange-400 font-bold px-2">Rajesh Kumar, </span>is a compassionate leader with a vision to create a better world. With a background in social work, Rajesh established the organization in 2018 to uplift marginalized communities, protect animal welfare, and promote environmental sustainability.<br></br> His dedication and hands-on approach have transformed countless lives, making the foundation a beacon of hope for many. Through innovative programs and partnerships, he continues to inspire positive change, driven by a passion for service and a commitment to a more inclusive and sustainable future.
    </p>
  </div>

</div>
<div className='grid sm:ml-10 gap-4  sm:grid-cols-2 mt-8'>
  <div className=' '>
    <h1 className='   lg:mt-0 font-bold text-xl sm:text-4xl  text-orange-600 dark:text-orange-400'>Know about Co-founder and trustee</h1>

    <p className=' text-justify pt-12 text-lg text-gray-600 dark:text-gray-300'>
    The co-founder and trustee, <span className="text-orange-600 dark:text-orange-400 font-bold px-2">Anjali Sharma, </span>plays a vital role in shaping the direction of the NGO. With a deep commitment to social causes and a background in education, Anjali has been instrumental in designing impactful programs that address the needs of underprivileged communities.<br></br> As a trustee, she ensures the organization's transparency and ethical operations, while her compassionate leadership continues to inspire both the team and beneficiaries. Her collaborative efforts with the founder have helped the NGO grow, making a lasting difference in the areas of animal welfare, education, and environmental conservation.

    </p>
  </div>
  <div  className=''>
  <img
src="https://pub-6287779f39b34278a82b57e687c0976f.r2.dev/website%20photos/about/about%20main%20photo.jpg"
alt="Co-founder"
className='rounded-lg shadow-lg w-[80%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] mx-auto' // Adjust width and maintain aspect ratio
/>

  </div>
</div>
<div className='py-12 flex flex-col items-center'>
  <h2 className='ml-4 sm:ml-10 mt-8 lg:mt-0 font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl mb-6 text-center text-orange-600 dark:text-orange-400'>
    Concern About Our Mission
  </h2>

  <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-center px-6 md:px-12 gap-8 py-4">
    {missionData.map((mission, index) => (
      <CardDemo key={index} title={mission.title} description={mission.description} />
    ))}
  </div>
</div>

</div>
<Footer />
</>
  )
}

export default page
