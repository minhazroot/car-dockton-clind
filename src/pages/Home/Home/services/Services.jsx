
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from '../../servicesCard/servicesCard';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(rec => rec.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className=' text-6xl font-bold text-orange-500'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised  <br></br> words which don't look even slightly believable. </p>
                <p>services {services.length}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServicesCard key={service._id} services={service}></ServicesCard>)

                }
            </div>

        </div>
    );
};

export default Services;