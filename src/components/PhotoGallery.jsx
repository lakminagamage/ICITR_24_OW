import React, { useState } from 'react';

function ImageFrame({ src, onClick }) {
  return (
    <img src={src} className='object-cover aspect-square rounded-lg mt-4' onClick={onClick} />
  )
}

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  }

  const handleCloseClick = () => {
    setSelectedImage(null);
  }

  return (
    <div>
      <div class="flex mx-20">
        <div className='basis-2/3 columns-4 gap-4' style={{ columnFill: 'balance' }}>
          <div className='h-1 break-inside-avoid'></div>
          <ImageFrame src="/img/photoGallery/01.jpg" onClick={() => handleImageClick("/img/photoGallery/01.jpg")} />
          <ImageFrame src="/img/photoGallery/02.jpg" onClick={() => handleImageClick("/img/photoGallery/02.jpg")} />
          <ImageFrame src="/img/photoGallery/03.jpg" onClick={() => handleImageClick("/img/photoGallery/03.jpg")} />
          <div className='bg-blue-500 h-10 rounded-t-lg mt-4 break-inside-avoid'></div>

          <div className='bg-blue-500 h-10 rounded-b-lg mb-4 break-inside-avoid'></div>
          <ImageFrame src="/img/photoGallery/04.jpg" onClick={() => handleImageClick("/img/photoGallery/04.jpg")} />
          <ImageFrame src="/img/photoGallery/05.jpg" onClick={() => handleImageClick("/img/photoGallery/05.jpg")} />
          <ImageFrame src="/img/photoGallery/06.jpg" onClick={() => handleImageClick("/img/photoGallery/06.jpg")} />
          <div className='h-1 mt-4 break-inside-avoid'></div>

          <div className='h-1 mb-4 break-inside-avoid'></div>
          <ImageFrame src="/img/photoGallery/07.jpg" onClick={() => handleImageClick("/img/photoGallery/07.jpg")} />
          <ImageFrame src="/img/photoGallery/08.jpg" onClick={() => handleImageClick("/img/photoGallery/08.jpg")} />
          <ImageFrame src="/img/photoGallery/09.jpg" onClick={() => handleImageClick("/img/photoGallery/09.jpg")} />
          <div className='bg-blue-500 h-10 rounded-t-lg mt-4 break-inside-avoid'></div>

          <div className='bg-blue-500 h-10 rounded-b-lg mb-4 break-inside-avoid'></div>
          <ImageFrame src="/img/photoGallery/10.jpg" onClick={() => handleImageClick("/img/photoGallery/10.jpg")} />
          <ImageFrame src="/img/photoGallery/11.jpg" onClick={() => handleImageClick("/img/photoGallery/11.jpg")} />
          <ImageFrame src="/img/photoGallery/12.jpg" onClick={() => handleImageClick("/img/photoGallery/12.jpg")} />
          <div className='h-1 mt-4 break-inside-avoid'></div>
        </div>
        <div className='basis-1/3 px-5 flex items-center'>
          <div className='flex flex-col items-center'>
            <div className='font-bold text-4xl text-blue-500 mb-10'>Past Conference</div>
            <div className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu suscipit felis, sit amet rutrum ligula. Etiam nibh nulla, commodo vel ligula non, euismod tristique ante. Praesent malesuada felis tempor viverra efficitur.
              <br />
              <br />
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse id vulputate diam. Suspendisse aliquam sed metus ac vestibulum. Integer sed porttitor turpis, sed dignissim libero. Vivamus mattis erat a dictum varius. Ut eget faucibus nisl. Donec mauris nisl.
            </div>
          </div>
        </div>
      </div>
    
      {selectedImage && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex items-center justify-center" onClick={handleCloseClick}>
          <img src={selectedImage} className="h-3/4"/>
          <button className="absolute top-4 right-4 text-white" onClick={handleCloseClick}>Close</button>
        </div>
      )}
    </div>
  );
}

