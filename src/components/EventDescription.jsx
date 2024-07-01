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
        <div className='font-bold text-black text-center text-2xl mb-5 md:text-left md:mb-0 md:basis-5/12'>
          <span className='text-6xl'>9th</span> International Conference on Information Technology Research
        </div>
        <div className='text-gray-500 md:basis-8/12 text-lg text-justify'>
          The 9th International Conference on Information Technology Research (ICITR 2024) will be held from December 5th to 6th, 2024, at the Faculty of Information Technology, University of Moratuwa, Sri Lanka. The main purpose of the ICITR conference is to promote research in ICT and scientific exchange among researchers and scholars. Following the past conference and sessions that were organized by the Information Technology Research Unit (ITRU), ICITR 2024 too provides a platform for original and cutting-edge research in the field of Information Technology. ICITR conferences held from 2018 to 2023 were successfully conducted with a technical co-sponsorship by IEEE Sri Lanka.  ICITR 2024 will have diverse technical tracks, invited  speakers, and workshops. All are selected according to the highest reviewing standards. ICITR 2024 welcomes submissions on diversified areas of the latest communications advancements worldwide. This conference is designed to maximize the feasibility and satisfaction of participants at all levels.
        </div>
      </div>

      {/* Description 02*/}
      <div className='flex flex-col-reverse md:flex-row items-center mb-10'>
        <div className='text-gray-500 text-lg text-justify'>
          The authors are invited to submit their papers to ICITR 2024. Full paper submissions will go through a blind review process to check for originality, scientific quality, fitness/significance, novelty, completeness, consistency, and presentation.
          <br />
          <br />
          All the accepted and presented papers will be submitted to IEEE Xplore digital library which is indexed by SCOPUS.
        </div>
      </div>
    </div>
  );
}