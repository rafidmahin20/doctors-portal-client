import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    return (
        <div>
            <Helmet>
                <title>Appointment - Doctors Portal</title>
            </Helmet>
          <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Appointment;