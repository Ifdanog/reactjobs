import React from 'react'

const Footer = () => {
  return (
    <div className='w-3/4 mt-10 mx-auto block md:flex'>
        <h2 className='w-1/2 font-bold text-3xl mb-10'>React Jobs</h2>
        <div className='w-1/2 block md:flex'>
            <div className='w-1/2'>
                <h3 className='font-bold text-xl'>Quick Links</h3>
                <ul>
                    <li>Hero</li>
                    <li>Features</li>
                    <li>Showcases</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl'>Company</h3>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer