import React from 'react';
import BannarImg from '../../assets/bannar1.jpg'
const Bannar = () => {
    return (
          <div className='mx-auto'>     
          <div className='relative'> 
                 <div className='absolute text-center pt-15 pl-110'>
                    <h1 className='text-4xl text-[#008080] font-bold pb-5'>We Help you take care of <br />your pets' nutrition needs.</h1>
                    <h3 className='text-lg text-[#268686] font-semibold'>Essential tips to keep your pets safe, warm, and healthy <br />during the cold winter months.</h3>
                 </div>
                 <img src={BannarImg} className='h-[400px] w-full bg-cover' alt="" />
                
          </div>   
          </div>
    );
};

export default Bannar;