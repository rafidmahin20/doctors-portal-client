import React from 'react';

const Service = ({service}) => {
    return (
        
    <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg mt-10 p-5 ">
    <img class="object-cover w-full h-56" src={service.img} alt="avatar"/>
    
    <div class="py-5 text-center">
        <h3 href="#" class="block text-2xl font-bold text-gray-800 dark:text-black">{service.name}</h3>
    </div>
</div>
    );
};

export default Service;