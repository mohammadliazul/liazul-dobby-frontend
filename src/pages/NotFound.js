import React from 'react';

const NotFound = () => {
    return (
        <section className='flex items-center justify-center h-screen'>
                    <h2 className='text-6xl md:text-8xl text-violet-500 border-r-2 pr-1'>404</h2>
                    <div className='pl-1'>
                        <h6 className='text-xl md:text-3xl font-bold'>Page Not Found</h6>
                        <p className='text-base md:text-xl leading-none '>Please check the URL in the address bar and try again.</p>
                    </div>
        </section>
    );
};

export default NotFound;