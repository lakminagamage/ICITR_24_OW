import Image from "next/image";

function Partners() {
  return (
    <div className="px-10 md:px-20 mx-auto mt-8 mb-16">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
          Technical Sponsors
        </h2>
        {/* <p className="mt-6 text-lg leading-8 text-center text-gray-primary">
          Meet the stronghold behind this great journey.
        </p> */}
      </div>
      <div className="w-9/12 mx-auto py-8 flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:flex-wrap md:justify-around">
        <div className="w-full md:w-auto flex justify-center">
          <img
            unoptimized="true"
            src="/img/partners/uom_logo.png"
            alt="partner"
            className="w-full max-w-xs h-auto md:w-auto md:h-40"
          />
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <img
            unoptimized="true"
            src="/img/partners/ITRU_Logo.png"
            alt="partner"
            className="w-full max-w-xs h-auto md:w-auto md:h-40"
          />
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <img
            unoptimized="true"
            src="/img/eventDescription/IEEElogo.png"
            alt="partner"
            className="w-full max-w-xs h-auto md:w-auto md:h-20"
          />
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <img
            unoptimized="true"
            src="/img/partners/ieeesl.png"
            alt="new partner"
            className="w-full max-w-xs h-auto md:w-auto md:h-20"
          />
        </div>
      </div>

      <div className="mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
          Financial Sponsors
        </h2>
      </div>
      <div className="w-9/12 mx-auto py-8 flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-around">
        <div className="w-full md:w-auto flex flex-col items-center">
          <img
            unoptimized="true"
            src="/img/partners/ncinga.png"
            alt="Platinum Sponsor"
            className="w-full max-w-xs h-auto md:w-auto md:h-20"
          />
          <div className='text-lg mt-2 font-semibold text-black text-center'>Platinum Sponsor</div>
        </div>
        <div className="w-full md:w-auto flex flex-col items-center">
          <img
            unoptimized="true"
            src="/img/partners/wso2.png"
            alt="Gold Sponsor"
            className="w-full max-w-xs h-auto md:w-auto md:h-20"
          />
          <div className='text-lg mt-2 font-semibold text-black text-center'>Gold Sponsor</div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
