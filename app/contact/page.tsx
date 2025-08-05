import ContactHero from '@/components/contact/ConractHero'
import ContactForm from '@/components/contact/ContactForm'
import React from 'react'

const page = () => {
  return (

    <div className="mt-28 m-auto p-4">

      <div className="">
        <ContactHero />
      </div>


      <div className="max-w-[1000px] mx-auto">

    
      <p className='leading-10'>Have questions, feedback, or just want to say hello? We'd love to hear from you. Whether you're looking for support, partnership opportunities, or more information about our services, our team is ready to assist. Reach out through the form below, and we'll get back to you as soon as possible. Your message matters to us.</p>

    <div className='text-4xl mt-4  p-4 flex flex-col sm:flex-row gap-6'>
      <div className="basis-1/2">
      <div className="overflow-hidden pb-[129.25%] relative h-0">
            <iframe className='left-0 bottom-0 h-full w-full absolute' src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013983.8098428447!2d78.63224029541017!3d6.90563654471907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2590dd9df6ee7%3A0x5d1ee4ec73bd01cf!2sEric%20Rajapakse%20Opticians%20-%20Kollupitiya!5e0!3m2!1sen!2slk!4v1743668719280!5m2!1sen!2slk " 
            width="600" 
            height="450" 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" title="Responsive Google Map">
            
            </iframe>
          </div>
      </div>

      <div className="basis-1/2">
          <h5 className='underline my-4 font-semibold'>Contact Info</h5>
          <p className='mb-4'>Address: #341, Galle Road, Colombo 03,Sri Lanka.</p>
          <p className='mb-4'>Email: roshan@ericrajapakse.lk</p>
          <p className='mb-4'>Mobile: +94 76 164 7228</p>
          <p className='mb-8'>Web : https://www.ericrajapakse.lk/</p>
          <h5 className='mb-4 font-semibold'>Leave us a message, We will contact you soon</h5>
        <ContactForm />
      </div>
      </div>
    </div>
  </div>
  )
}

export default page