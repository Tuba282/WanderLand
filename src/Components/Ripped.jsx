import React from 'react'

const Ripped = ({className}) => {
    return (
        <div className={`relative w-full -mt-20  h-20 ${className}`}>
            <div className='absolute top-0 left-0 w-full h-full bg-[url(https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-bottom.png)] bg-center bg-cover bg-no-repeat'></div>
        </div>
    )
}

export default Ripped
