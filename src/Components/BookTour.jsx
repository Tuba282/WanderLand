import React from 'react'
import StyledButton from './StyledButton'

const BookTour = () => {
    return (
        <div id='Booking' className='w-full py-0 lg:py-20 min-h-screen bg-[url(https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249)] bg-center bg-no-repeat bg-cover'>
            <div className="container grid lg:flex justify-center lg:justify-between items-center p-10 lg:p-20  body-font">
                <div className=" w-[100%] lg:w-[50%]  flex flex-wrap text-gray-600 overflow-hidden">
                    <div className="grid gap-4 p-10">
                        <span className="leading-relaxed">Tour Booking</span>
                        <h2 className=' text-3xl md:text-5xl font-bold text-wrap uppercase  text-[#665044] font-[Fjalla]'>Finding trails to hike is easy with <span
                            className="text-[#59815B] px-5 bg-[#FFFFFF]"
                        >newsletter</span>
                        </h2>

                        <div className="leading-relaxed my-3">Whether you're basking in the golden sunsets of a tropical paradise, trekking through lush green forests teeming with life, or standing in awe of majestic historical landmarks that tell tales of a bygone era.</div>
                        <div className="flex items-center gap-5 w-full">
                            <div className='w-[150px] bg-white p-3'>
                                <input type="text" placeholder='Name' className='border-none outline-none' />
                            </div>
                            <div className='w-[150px] bg-white p-3'>
                                <input type="email" placeholder='E-mail' className='border-none outline-none' />
                            </div>

                            <StyledButton text1={'Subscribe'} text2={'Now'} className={""} href="/about" />
                        </div>
                    </div>

                </div>
                <div className="w-[100%] lg:w-[50%]  overflow-hidden">
                    <img className="object-cover object-center w-full h-full" src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-01.png" alt="stats" />
                </div>
            </div>
        </div>
    )
}

export default BookTour
