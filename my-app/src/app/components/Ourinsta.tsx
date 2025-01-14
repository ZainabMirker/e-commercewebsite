import Link from 'next/link'
import React from 'react'

const Ourinsta = () => {
  return (
    <main
      className=" relative flex items-center justify-center w-full  md:h-[430px] md:w-full bg-instagram-section bg-cover bg-center justify-center mb-9    "
      style={{ backgroundImage: "url('/insta-bg.png')" }}
    >
      <div className="text-center  ">
        <h1 className="text-2xl md:text-[60px] leading-[40px]  font-bold md:leading-[90px] font-['Poppins'] text-black">Our Instagram</h1>
        <p className="text-[12px] md:text-lg text-black mt-2">Follow our store on Instagram</p>
        <button className=" mt-4 px-12 py-2 text-black font-semibold rounded-full shadow-md bg-gray-100">
          <Link target='blank' href={'https://www.instagram.com/kishor_kumarrrr/?hl=en'}>Follow Us</Link>
        </button>
      </div>
    </main>
  )
}

export default Ourinsta