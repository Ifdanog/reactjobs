import mobile from '../assets/mobile-half.png'

const Hero = () => {
  return (
    <>
    <div className='w-3/4 h-screen mx-auto py-28 block md:flex'>
        <div className="w-1/2 mx-auto py-20 justify-center items-center">
            <h1 className='text-4xl md:text-7xl font-bold'>Find Your Perfect Job.</h1>
            <button className='py-2 px-6 md:py-4 md:px-10 mt-4 rounded-md bg-[#0099ff]'>Download Now!</button>
        </div>
        <div className="w-1/2 mx-auto">
            <img src={mobile} className='' />
        </div>
    </div>
    <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,112C672,85,768,75,864,85.3C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </>
  )
}

export default Hero