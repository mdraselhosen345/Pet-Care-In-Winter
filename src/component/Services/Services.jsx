import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";

const Services = () => {
  
  // useEffect দিয়ে কম্পোনেন্ট লোড হওয়ার পর JSON ফেচ করব
  useEffect(() => {
    const fetchPublic = async () => {
      try {
        const res = await fetch("/Public.json");
        if (!res.ok) throw new Error("Failed to load JSON file");
        const data = await res.json(); 
        console.log(data); // 👉 এখানে Console-এ JSON দেখা যাবে
      } catch (err) {
        console.error("Error fetching JSON:", err);
      }
    };

    fetchPublic(); // ⚡ এখানে ফাংশন কল করলাম
  }, []);

  return (
    <div className='mx-auto w-[1150px] border-2 border-red-500'>
      <div className="card bg-base-100 w-76 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
