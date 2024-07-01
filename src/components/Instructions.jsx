import { FaPlus, FaMinus } from "react-icons/fa";
import { Disclosure, Transition } from "@headlessui/react";
import faqs from "../data/faq";

function Instructions() {
  return (
    <div className="w-full pt-16 pb-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="flex-col justify-center">
          <h2 className="flex justify-center text-3xl font-bold tracking-tight text-center text-blue-primary sm:text-4xl">
            Instructions on Submissions
          </h2>
          <p className="flex justify-center mt-2 text-lg leading-8 text-center text-gray-primary">
            * Please note that literature surveys/review papers will not be
            accepted. All papers submitted will be checked for plagiarism
          </p>
        </div>
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <FaMinus
                              className="h-4 w-4 text-gray-primary"
                              aria-hidden="true"
                            />
                          ) : (
                            <FaPlus
                              className="h-4 w-4 text-gray-primary"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      enter="transition duration-500 ease-out"
                      enterFrom="transform h-0 "
                      enterTo="transform h-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform h-500"
                      leaveTo="transform h-0"
                    >
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <div
                          className="text-base leading-7 text-gray-600"
                          style={{ whiteSpace: "pre-wrap" }}
                        >
                          {faq.answer}
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
