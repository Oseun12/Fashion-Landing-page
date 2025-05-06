import React from 'react';

function Location() {
  return (
    <div className='bg-gray-900 py-2'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        {/* Added heading and description */}
        <div className=' mb-12'>
        <p className="text-lg font-semibold text-blue-400 mb-2">LOCATE US</p>
          <h2 className='text-3xl font-bold text-white sm:text-4xl'>
            Visit Our Store
          </h2>
          <p className='mt-4 text-xl text-gray-300 max-w-2xl'>
            Find us at our Ganmo location. We&apos;re open Monday to Saturday, 9AM to 6PM.
            Come experience our collections in person!
          </p>
        </div>

        <div className='flex justify-center'>
          <div className='w-full max-w-7xl overflow-hidden rounded-lg shadow-xl'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.2586915078177!2d4.6065856756882075!3d8.474207097425124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037b31645e7ca4f%3A0xd8b5fbed8d73f1d9!2sGanmo!5e0!3m2!1sen!2sng!4v1746574255815!5m2!1sen!2sng" 
              className='w-full aspect-video' 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Our location in Ganmo"
              title="Our Store Location"
            />
          </div>
        </div>

        {/* Added contact info section */}
        <div className='mt-12 text-center text-gray-300'>
          <p className='text-lg'>
            <strong>Address:</strong> 123 Fashion Street, Ganmo, Nigeria
          </p>
          <p className='mt-2 text-lg'>
            <strong>Phone:</strong> +234 817 649 8609
          </p>
        </div>
      </div>
    </div>
  )
}

export default Location;