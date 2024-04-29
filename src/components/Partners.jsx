import Image from 'next/image';


function Partners() {
    return (
        <div className="px-10 md:px-20 mx-auto bg-white py-10">
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">Our Partners</h2>
    <p className="mt-6 text-lg leading-8 text-center text-gray-primary">
      Meet the stronghold behind this great journey.
    </p>
  </div>
  <div className="flex flex-col space-y-5 md:space-y-0 md:grid md:grid-rows-2 md:grid-flow-col md:gap-4 md:place-content-center">
    <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:grid-flow-row md:gap-x-20 md:place-content-center px-20">
    
      <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-row justify-center items-center space-x-3">
          <img unoptimized width={40} height={20} src="/img/partners/ms.jpg" alt="partner" className="h-20 w-40"/>
          <img unoptimized width={40} height={20} src="/img/partners/nvidia.jpeg" alt="partner" className="h-20 w-40"/>
          <img unoptimized width={40} height={20} src="/img/partners/ms.jpg" alt="partner" className="h-20 w-40"/>
        </div>
        <div className='text-lg font-semibold text-black text-center'>Platinum Partners</div>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <div className="flex flex-row justify-center items-center space-x-3">
          <img unoptimized width={40} height={20} src="/img/partners/nvidia.jpeg" alt="partner" className="h-20 w-40"/>
          <img unoptimized width={40} height={20} src="/img/partners/ms.jpg" alt="partner" className="h-20 w-40"/>
          <img unoptimized width={40} height={20} src="/img/partners/nvidia.jpeg" alt="partner" className="h-20 w-40"/>
        </div>
        <div className='text-lg font-semibold text-black text-center'>Gold Partners</div>
      </div>
    </div>
   
    <div className='flex flex-col items-center space-y-3'>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 place-content-center">
        <img unoptimized width={40} height={20} src="/img/partners/nvidia.jpeg" alt="partner" className="h-20 w-40"/>
        <img unoptimized width={40} height={20} src="/img/partners/ms.jpg" alt="partner" className="h-20 w-40"/>
        <img unoptimized width={40} height={20} src="/img/partners/nvidia.jpeg" alt="partner" className="h-20 w-40"/>
        <img unoptimized width={40} height={20} src="/img/partners/nvidia.jpeg" alt="partner" className="h-20 w-40"/>
        <img unoptimized width={40} height={20} src="/img/partners/ms.jpg" alt="partner" className="h-20 w-40"/>
        <img unoptimized width={40} height={20} src="/img/partners/nvidia.jpeg" alt="partner" className="h-20 w-40"/>
      </div>
      <div className='text-lg font-semibold text-black text-center'>Silver Partners</div>
    </div>
  </div>
</div>

            
      
    );
}

export default Partners;