import React from 'react';

function Faq() {
  return (
    <div className='bg-gray-900'>
      <div className="flow-root mx-auto max-w-screen-xl py-20 px-4 sm:px-6">
        {/* Header Section */}
        <div className=" mb-16">
          <p className="text-lg font-semibold text-blue-400 mb-2">GET YOUR QUESTIONS ANSWERED</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl">
            Find everything you need to know about our collections, sizing, shipping, and more. 
            Our comprehensive guide covers all common queries about our fashion products.
          </p>
        </div>

        {/* FAQ Content */}
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          <div className='lg:w-2/5 flex justify-center'>
            <img src="/images/q-mark.png" alt="Question mark icon" className="h-[500] w-[500]" />
          </div>
          
          <div className="lg:w-3/5 -my-4 flex flex-col divide-y divide-blue-200/20">
            {/* Question 1 */}
            <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-1.5 text-white cursor-pointer">
                <h3 className="text-lg font-medium">What materials are used in your clothing?</h3>
                <svg className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-300">
                We use premium sustainable materials including organic cotton, linen, and recycled fabrics. 
                Each product description details the specific materials used. Our fabrics are carefully 
                selected for comfort, durability, and environmental responsibility.
              </p>
            </details>

            {/* Question 2 */}
            <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-1.5 text-white cursor-pointer">
                <h3 className="text-lg font-medium">How do I determine my correct size?</h3>
                <svg className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-300">
                We provide detailed size charts for each product. Measure your bust, waist, and hips, 
                then compare with our measurements. If between sizes, we recommend sizing up. 
                Need help? Our stylists are available via chat to recommend sizes based on your 
                measurements and fit preferences.
              </p>
            </details>

            {/* Question 3 */}
            <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-1.5 text-white cursor-pointer">
                <h3 className="text-lg font-medium">What is your return policy?</h3>
                <svg className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-300">
                We offer a 30-day return policy for unworn items with original tags attached. 
                Return shipping is free for domestic orders. International returns are subject to 
                a restocking fee. Sale items are final sale unless defective. Your refund will be 
                processed within 3-5 business days after we receive your return.
              </p>
            </details>

            {/* Question 4 */}
            <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-1.5 text-white cursor-pointer">
                <h3 className="text-lg font-medium">How long does shipping take?</h3>
                <svg className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-300">
                Standard shipping takes 3-5 business days within the US and 7-14 days internationally. 
                We offer expedited shipping options at checkout. You will receive tracking information 
                as soon as your order ships. During peak seasons or sales, please allow 1-2 additional 
                processing days.
              </p>
            </details>

            {/* Question 5 */}
            <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-1.5 text-white cursor-pointer">
                <h3 className="text-lg font-medium">How should I care for my garments?</h3>
                <svg className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-300">
                Each garment comes with specific care instructions on the label. Generally, we recommend:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Wash similar colors together in cold water</li>
                  <li>Line dry or tumble dry on low heat</li>
                  <li>Iron on appropriate setting if needed</li>
                  <li>Store folded or on padded hangers</li>
                </ul>
                Proper care ensures your pieces maintain their quality and longevity.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq;