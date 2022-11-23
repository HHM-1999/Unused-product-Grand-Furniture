import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h1 className='mt-9 text-black font-bold text-7xl text-center p-9'>What To We Do</h1>

            <div className="card lg:card-side bg-base-100 drop-shadow-2xl p-5  mx-56 mt-8">
                <figure><img src="https://img.freepik.com/free-photo/room-interior-design_23-2148899463.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225" alt="design" /></figure>
                <div className="card-body">
                    <h2 className="card-title">This is Our Grand Furniture Store.</h2>
                    <p>Here We buy different types of used Furniture and than we sell within a vey low price in market .Also We give a huge discount or offers to buy this reused Products.Hope you all like this all Furniture. So choose your desire item and make a interior design in your home. </p>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;