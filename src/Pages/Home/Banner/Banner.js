import React from 'react';


const Banner = () => {
    return (
        <div className='mt-9 flex flex-wrap gap-4'>
            <div className="flex flex-wrap">
                <div className='text-center p-12 mt-6 mx-9'>
                    <h1 className="text-5xl font-bold">Welcome to our</h1>
                    <h1 className="text-5xl font-bold"> Grand Furniture Store</h1>
                    <h5 className="py-6">Get 20% off any purchase items through the end of month</h5>
                    <h5 className='text-primary'><strong>Don't be late Guys 🕒!!!!!</strong></h5>

                </div>
                <div>
                    <img className="mx-9 mt-4" src="https://img.freepik.com/premium-photo/tropical-interior-design-living-room_269031-60.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225" alt="404 error" />
                </div>
            </div>
            {/* <div className=" flex-col lg:flex-row-reverse w-auto mx-9">
                <img src="https://img.freepik.com/premium-photo/tropical-interior-design-living-room_269031-60.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225" className="rounded-lg lg:w-1/2 shadow-2xl" alt='background' />
                <div className='mt-3'>
                    <h1 className="text-5xl font-bold">Welcome to our Grand Furniture Store</h1>
                    <h5 className="py-6">Get 20% off any purchase items through the end of month</h5>
                    <h5 className='text-primary'><strong>Don't be late Guys!!!!!</strong></h5>

                </div>
            </div> */}

        </div>
    );
};

export default Banner;