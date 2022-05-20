import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        
    <div className={`flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ${bgClass} p-5 mb-8`}>
    <div className="w-1/3 bg-cover">
        <img src={img} alt=''/>
    </div>

    <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{cardTitle}</h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>
    </div>
</div>
    );
};

export default InfoCard;