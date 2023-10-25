import mobile from '../assets/mobile.png'
import tab from '../assets/mobile (1).png'
import desktop from '../assets/mobile (2).png'

const Showcase = () => {
  return (
    <div className='h-screen bg-[#0099ff]'>
        <h3 className='text-2xl font-bold text-white pt-36 text-center'>Available on all platforms:</h3>
    <div className='w-[60%] h-screen mx-auto mt-20 flex gap-4 justify-center'>
        <div>
            <img src={mobile} />
        </div>
        <div>
            <img src={desktop} />
        </div>
        <div>
            <img src={tab} />
        </div>
    </div>
    </div>
  )
}

export default Showcase