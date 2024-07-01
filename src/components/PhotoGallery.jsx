import React, { useState } from 'react';

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  function ImageFrame({ src }) {
    return (
      <img src={src} className='object-cover aspect-square rounded md:rounded-lg mt-2 md:mt-4' onClick={() => handleImageClick(src)} />
    )
  }

  function OddColumn({ children }) {
    return (
      <>
        <div className='h-1 break-inside-avoid' />
        {children}
        <div className='bg-blue-500 h-5 md:h-10 rounded-t md:rounded-t-lg mt-2 md:mt-4 break-inside-avoid' />
      </>
    )
  }

  function EvenColumn({ children }) {
    return (
      <>
        <div className='bg-blue-500 h-5 md:h-10 rounded-b md:rounded-b-lg mb-2 md:mb-4 break-inside-avoid' />
        {children}
        <div className='h-1 mt-2 md:mt-4 break-inside-avoid' />
      </>
    )
  }

  const handleImageClick = (src) => {
    setSelectedImage(src);
  }

  const handleCloseClick = () => {
    setSelectedImage(null);
  }

  return (
    <div className='bg-gray-100'>
      <div className="flex flex-col-reverse md:flex-row mx-5 md:mx-20">
        <div className='basis-2/3 columns-4 gap-2 md:gap-4'>
          <OddColumn>
            <ImageFrame src="/img/photoGallery/01.jpg" />
            <ImageFrame src="/img/photoGallery/02.jpg" />
            <ImageFrame src="/img/photoGallery/03.jpg" />
          </OddColumn>

          <EvenColumn>
            <ImageFrame src="/img/photoGallery/04.jpg" />
            <ImageFrame src="/img/photoGallery/05.jpg" />
            <ImageFrame src="/img/photoGallery/06.jpg" />
          </EvenColumn>

          <OddColumn>
            <ImageFrame src="/img/photoGallery/07.jpg" />
            <ImageFrame src="/img/photoGallery/08.jpg" />
            <ImageFrame src="/img/photoGallery/09.jpg" />
          </OddColumn>

          <EvenColumn>
            <ImageFrame src="/img/photoGallery/10.jpg" />
            <ImageFrame src="/img/photoGallery/11.jpg" />
            <ImageFrame src="/img/photoGallery/12.jpg" />
          </EvenColumn>
        </div>
        <div className='basis-1/3 md:ml-8 flex items-center my-8'>
          <div className='flex flex-col items-center'>
            <div className='font-bold text-4xl text-blue-primary mb-5'>Photo Gallery</div>
            <div className='text-gray-500 text-justify'>
              Explore our photo gallery to relive the vibrant moments from previous ICITR conferences. Witness the engaging keynote sessions, dynamic technical presentations, and collaborative workshops that have defined our past events. Each photo captures the spirit of innovation, academic excellence, and networking that ICITR is renowned for. From insightful discussions to memorable social interactions, our gallery showcases the essence of the ICITR experience, inspiring anticipation for the upcoming ICITR 2024.
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex items-center justify-center" onClick={handleCloseClick}>
          <img src={selectedImage} className="w-full md:h-3/4 md:w-auto" />
          <button className="absolute top-4 right-4 text-white" onClick={handleCloseClick}>Close</button>
        </div>
      )}
    </div>
  );
}

