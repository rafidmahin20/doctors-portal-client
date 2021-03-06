import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../icons/clock.svg'
import marker from '../../icons/marker.svg'
import phone from '../../icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10'>
            <InfoCard cardTitle='Opening Hours' bgClass='bg-gradient-to-r from secondary to-primary' img={clock}></InfoCard>
            <InfoCard cardTitle='Our Location' bgClass='bg-accent' img={marker}></InfoCard>
            <InfoCard cardTitle='Contact Us Now' bgClass='bg-gradient-to-r from secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;