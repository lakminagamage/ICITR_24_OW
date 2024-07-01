import React from 'react';

export default function EventDescription() {
  return (
    <div className='mt-12 mx-5 md:mx-20'>
      {/* Title */}
      <div className='flex items-center mb-12'>
        <div className='font-bold text-blue-primary text-center md:text-left mr-10 text-xl'>
          The Next Evolution In Digital Transformation
        </div>
        <div className='bg-blue-primary hidden md:block h-2 grow'></div>
      </div>

      {/* Description 01*/}
      <div className='flex flex-col md:flex-row md:items-center mb-10'>
        <div className='font-bold text-black md:basis-5/12 text-2xl mb-5 md:mb-0'>
          <span className='text-6xl'>9th</span> International Conference on Information Technology Research
        </div>
        <div className='text-gray-500 md:basis-8/12 text-lg text-justify'>
          The 9th ICITR (2024) is scheduled for December 2024 at the University of Moratuwa's Faculty of Information Technology in Sri Lanka. The conference aims to foster ICT research and academic collaboration. Continuing the tradition established by the Information Technology Research Unit (ITRU), ICITR 2024 offers a forum for groundbreaking IT research.
        </div>
      </div>

      {/* Description 02*/}
      <div className='flex flex-col-reverse md:flex-row items-center mb-10'>
        <div className='text-gray-500 md:basis-8/12 text-lg text-justify'>
          Since 2018, the annual ICITR conferences have been successfully held with IEEE Sri Lanka's technical co-sponsorship. ICITR 2024 will feature a variety of technical sessions, keynote speakers, and workshops, all selected based on stringent review criteria. The conference invites submissions across a wide range of topics in the field of modern communication technology, ensuring an enriching experience for participants at every level.
        </div>

        <div className='md:basis-4/12 flex justify-center mb-5 md:mb-0'>
          <img src="/img/eventDescription/IEEElogo.png" className='w-3/4' />
        </div>
      </div>

      {/* Description 03*/}
      <div className='flex flex-col md:flex-row items-center mb-10'>
        <div className='md:basis-5/12 flex flex-col items-center mb-5 md:mb-0'>
            <img src="/img/eventDescription/IEEExplorelogo.png" className='w-3/5'/>
            <img src="/img/eventDescription/scopuslogo.png" className='w-3/5'/>
        </div>
        <div className='text-gray-500 md:basis-8/12 text-lg text-justify'>
          ICITR 2024 is calling for paper submissions from authors. These full papers will undergo a blind review, assessing them for originality, academic rigour, relevance/significance, innovation, thoroughness, coherence, and clarity of presentation.
          <br />
          <br />
          All papers accepted and presented at the conference will be submitted to the IEEE Xplore digital library, which is indexed by SCOPUS.
        </div>
      </div>
    </div>
  );
}