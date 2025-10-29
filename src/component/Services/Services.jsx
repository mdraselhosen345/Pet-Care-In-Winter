import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchPublic = async () => {
      try {
        const res = await fetch("/Public.json");
        if (!res.ok) throw new Error("Failed to load JSON file");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Error fetching JSON:", err);
      }
    };
    fetchPublic();
  }, []);

  return (
    <div className='mx-auto w-[1150px] border-2 border-red-500 grid grid-cols-3 gap-4 p-4'>
      {services.map(service => (
        <div key={service.serviceId} className="card bg-base-100 w-76 shadow-sm">
          <figure>
            <img
              src={service.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
              alt={service.serviceName}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service.serviceName}</h2>
            <p>{service.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
