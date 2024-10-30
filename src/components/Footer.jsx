import { useRouter } from "next/router";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import Image from "next/image";

const navigation = {
  resources: [
    { name: "Home", href: "/" },
    { name: "Past Abstracts", href: "/pastAbstracts" },
    { name: "For Authors", href: "/paperSubmission" },
  ],
  contacts: [{ name: "Contacts", href: "/contacts" }],
  institute: [
    { name: "University", href: "https://uom.lk" },
    { name: "Faculty of IT", href: "https://uom.lk/itfac" },
    {
      name: "IT Research Unit",
      href: "https://uom.lk/itfac/research/research-unit",
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/itru.fit/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/itru-fit/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 12.3h-3v-5.6c0-3.4-4-3.1-4 0v5.6h-3v-11h3v1.5c1.4-2.6 7-2.8 7 2.5v7z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <footer className="bg-white border-t-2" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name} className={"cursor-pointer"}>
                      <p
                        onClick={() => {
                          setLoading(true);
                          setTimeout(() => {
                            setLoading(false);
                          }, 400);

                          router.push(item.href);
                        }}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Get In Touch
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.contacts.map((item) => (
                    <li key={item.name} className={"cursor-pointer"}>
                      <p
                        onClick={() => {
                          router.push(item.href);
                        }}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  About Institute
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.institute.map((item) => (
                    <li key={item.name} className={"cursor-pointer"}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0 flex flex-col justify-center items-center">
            {/* <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Subscribe to our maliling list
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Bring the latest updates to your inbox about ICITR 2024.
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-blue-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe
                </button>
              </div>
            </form> */}
            <Image
              className=""
              src="/img/partners/ITRU_Logo.png"
              width={100}
              height={50}
              alt=""
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 400);

                router.push("/");
              }}
            />

            <p className="mt-4 text-sm leading-6 text-gray-600 text-center font-semibold">
              Information Technology Research Unit
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600 text-center">
              Faculty of Information Technology, University of Moratuwa
            </p>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            © 2024 Information Technology Research Unit. Faculty of Information
            Technology University of Moratuwa.
          </p>
        </div>
      </div>
      <Spinner isVisible={loading} />
    </footer>
  );
}
