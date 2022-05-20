import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Info from './Info';

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
        </div>
    );
};

export default Home;