import Image from 'next/image';


function Partners() {
  return (
    <div className="px-10 md:px-20 mx-auto mt-8 mb-16">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">Technical Sponsors</h2>
        <p className="mt-6 text-lg leading-8 text-center text-gray-primary">
          Meet the stronghold behind this great journey.
        </p>
      </div>
      <div className='w-9/12 mx-auto py-8 flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-around'>
        <div>
          <img unoptimized="true" src="/img/partners/uom_logo.png" alt="partner" className="w-auto h-40" />
        </div>
        <div>
          <img unoptimized="true" src="/img/partners/ITRU_Logo.png" alt="partner" className="w-auto h-40" />
        </div>
        <div>
          <img unoptimized="true" src="/img/eventDescription/IEEElogo.png" alt="partner" className="w-auto h-20" />
        </div>
      </div>
      {/* <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between my-10 md:my-20">

          <div className="flex md:basis-2/5 flex-col items-center space-y-2 px-3 mb-10 md:mb-0">
            <div className="flex flex-row justify-center items-center space-x-3">
              <div className='basis-1/3'><img unoptimized src="/img/partners/ms.jpg" alt="partner" className=" w-40 h-auto" /></div>
              <div className='basis-1/3'><img unoptimized src="/img/partners/nvidia.jpeg" alt="partner" className="w-40 h-auto" /></div>
              <div className='basis-1/3'><img unoptimized src="/img/partners/ms.jpg" alt="partner" className="w-40 h-auto" /></div>
            </div>
            
            <div className='text-lg font-semibold text-black text-center'>Platinum Partners</div>
          </div>

          <div className="flex md:basis-2/5 flex-col items-center space-y-2 px-3">
            <div className="flex flex-row justify-center items-center space-x-3">
              <div className='basis-1/3'><img unoptimized src="/img/partners/ms.jpg" alt="partner" className=" w-40 h-auto" /></div>
              <div className='basis-1/3'><img unoptimized src="/img/partners/nvidia.jpeg" alt="partner" className="w-40 h-auto" /></div>
              <div className='basis-1/3'><img unoptimized src="/img/partners/ms.jpg" alt="partner" className="w-40 h-auto" /></div>
            </div>

            <div className='text-lg font-semibold text-black text-center'>Gold Partners</div>
          </div>
        </div>

        <div className='flex flex-col items-center space-y-2 mb-10 md:mb-20'>
          <div className="grid grid-cols-3 md:grid-cols-6 items-center gap-3">
            <img unoptimized src="/img/partners/nvidia.jpeg" alt="partner" className="w-40 h-auto" />
            <img unoptimized src="/img/partners/ms.jpg" alt="partner" className="w-40 h-auto" />
            <img unoptimized src="/img/partners/nvidia.jpeg" alt="partner" className="w-40 h-auto" />
            <img unoptimized src="/img/partners/nvidia.jpeg" alt="partner" className="w-40 h-auto" />
            <img unoptimized src="/img/partners/ms.jpg" alt="partner" className="w-40 h-auto" />
            <img unoptimized src="/img/partners/nvidia.jpeg" alt="partner" className="w-40 h-auto" />
          </div>
          <div className='text-lg font-semibold text-black text-center'>Silver Partners</div>
        </div>
      </div> */}
    </div>



  );
}

export default Partners;