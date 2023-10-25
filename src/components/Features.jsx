import React from 'react'

const Features = () => {
  return (
    <div className='h-full pb-20'>
        <svg className='relative -top-2 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,112C672,85,768,75,864,85.3C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className="w-4/5 mx-auto block md:flex gap-4">
            <div className='w-full md:w-1/4 bg-[#0099ff] py-10 px-4 rounded-md shadow-lg text-white'>
                <h3 className='text-2xl font-bold pb-4'>Search</h3>
                <p className='text-sm'>Wtih our app you get chance to search all kinds of Jobs available on the internet. Advanced search features are available as well. You can search for Full-time, Part-time and Contract Jobs as well.</p>
            </div>
            <div className='w-full md:w-1/4 mt-10 bg-[#0099ff] py-10 px-4 rounded-md shadow-lg text-white'>
                <h3 className='text-2xl font-bold pb-4'>Job Details</h3>
                <p className='text-sm'>Detiled information about a chosen Job can be easily access and you can apply for the job with a link to the direct job post on Google.</p>
            </div>
            <div className='w-full md:w-1/4 mt-10 bg-[#0099ff] py-10 px-4 rounded-md shadow-lg text-white'>
                <h3 className='text-2xl font-bold pb-4'>Popular Jobs</h3>
                <p className='text-sm'>With our app, on your dashboard you have listed the most popular job in your chosen field.</p>
            </div>
            <div className='w-full md:w-1/4 mt-10 bg-[#0099ff] py-10 px-4 rounded-md shadow-lg text-white'>
                <h3 className='text-2xl font-bold pb-4'>Nearby Jobs</h3>
                <p className='text-sm'>You get the chance to view job that are near to your location and apply for them to get on-site employment.</p>
            </div>
        </div>
    </div>
  )
}

export default Features