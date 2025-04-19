import React from 'react'

const Map = () => {
    return (
        <div className='w-full h-screen py-10 xl:py-30 lg:py-20 px-5 sm:px-10 overflow-hidden bg-[url(https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249)] bg-center bg-no-repeat bg-cover '>
            <div className='relative w-full h-full bg-[url(https://wanderland.qodeinteractive.com/wp-content/plugins/wanderland-core/assets/css/img/timeline.svg)] bg-center bg-no-repeat bg-contain '>
                {/* sweden */}
                <div className='absolute top-48 w-50 h-25'>
                    <a target='_blank' href="https://www.google.com/maps/place/Sweden/@62.0329767,17.3787426,2089931m/data=!3m2!1e3!4b1!4m6!3m5!1s0x465cb2396d35f0f1:0x22b8eba28dad6f62!8m2!3d60.128161!4d18.643501!16zL20vMGQwdnFu?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D">
                        <div className="flex gap-3 items-center">
                            <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-25.png" alt="" />
                            <p>
                                <div className="text-xl font-medium text-[#59815B]">Sweden</div>
                                <p className='text-sm font-normal'>47.852963</p>
                                <p className='text-sm font-normal'>72.741852</p>
                            </p>
                        </div>
                        <div className='h-5 w-5 mx-auto bg-[#59815B] text-transparent rounded-full'> dot</div>
                    </a>
                </div>
                {/* USA */}
                <div className='absolute top-17 left-134 w-50 h-25'>
                    <a target='_blank' href="https://www.google.com/maps/place/United+States/@36.0427897,-161.4619342,14413679m/data=!3m2!1e3!4b1!4m6!3m5!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d38.7945952!4d-106.5348379!16zL20vMDljN3cw?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D">
                        <div className="flex gap-3 items-center">
                            <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-03.png" alt="" />
                            <p>
                                <div className="text-xl font-medium text-[#59815B]">USA</div>
                                <p className='text-sm font-normal'>85.852963</p>
                                <p className='text-sm font-normal'>96.741852</p>
                            </p>
                        </div>
                        <div className='h-5 w-5 mx-auto bg-[#59815B] text-transparent rounded-full'> dot</div>
                    </a>
                </div>
                {/* Spain */}
                <div className='absolute top-65 left-[60%] w-50 h-25'>
                    <a target='_blank' href="https://www.google.com/maps/place/Spain/@35.3265439,-17.5675764,3635916m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc42e3783261bc8b:0xa6ec2c940768a3ec!8m2!3d40.463667!4d-3.74922!16zL20vMDZta2o?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D">
                        <div className="flex gap-3 items-center">
                            <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-04.png" alt="" />
                            <p>
                                <div className="text-xl font-medium text-[#59815B]">Spain</div>
                                <p className='text-sm font-normal'>73.852963</p>
                                <p className='text-sm font-normal'>147.1852</p>
                            </p>
                        </div>
                        <div className='h-5 w-5 mx-auto bg-[#59815B] text-transparent rounded-full'> dot</div>
                    </a>
                </div>
                {/* USA */}
                <div className='absolute top-35 left-[85%] w-50 h-25'>
                    <a target='_blank' href="https://www.google.com/maps/place/Brazil/@-13.4199179,-73.0915668,8669615m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9c59c7ebcc28cf:0x295a1506f2293e63!8m2!3d-14.235004!4d-51.92528!16zL20vMDE1ZnI?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D">
                        <div className="flex gap-3 items-center">
                            <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-05.png" alt="" />
                            <p>
                                <div className="text-xl font-medium text-[#59815B]">Brazil</div>
                                <p className='text-sm font-normal'>85.852963</p>
                                <p className='text-sm font-normal'>96.741852</p>
                            </p>
                        </div>
                        <div className='h-5 w-5 mx-auto bg-[#59815B] text-transparent rounded-full'> dot</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Map
