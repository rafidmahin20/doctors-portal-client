import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Helmet>
                <title>
                    Home - Doctors Portal
                </title>
            </Helmet>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
        </div>
    );
};

export default Home;