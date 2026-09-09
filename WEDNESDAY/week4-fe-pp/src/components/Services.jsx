import { services } from '../data'
import Title from './Title'
import Service from './Service'
import { useState } from 'react';

const Services = () => {
  function Services() {


    const [servicesData, setServicesData] = useState(services);
    const handleRemoveService = (serviceId) => {
      setServicesData(servicesData.filter(service => service.id !== serviceId));
    };

    return (
      <section className='section services' id='services'>
        <Title title='our' subTitle='services' />
        <div className='section-center services-center'>
          {servicesData.map((service) => {
            return (
              <Service
                {...service}
                key={service.id}
                onRemove={handleRemoveService}
              />
            )
          })}
        </div>
      </section>
    )
  }
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}



export default Services