import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Urban Drip is your go-to destination for trendy and stylish outfits. We offer a curated collection of the latest fashion pieces to help you stay ahead of the trends. From casual streetwear to statement pieces, Urban Drip has everything you need to elevate your wardrobe. Step up your style game with Urban Drip — where fashion meets attitude!
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>(+91) 7982662422</li>
                <li>contact@urbandrip.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ urbandrip.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
