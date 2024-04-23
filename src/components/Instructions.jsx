import { FaPlus, FaMinus } from "react-icons/fa";
import { Disclosure, Transition } from "@headlessui/react";

function Instructions() {
  const faqs = [
    {
      question: "Full paper submission and payment details",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Full paper submission and payment details",
      answer: `As creators of the work, authors have a number of responsibilities when submitting their paper or manuscript to ICITR. They must warrant:
        That the papers they submit are their own original work.
        That no portion of their paper (including, but not limited to, graphics and figures) has been previously published unless written consent from the previous publisher has been obtained prior to submission.
        That the paper is not currently under consideration for publication elsewhere.
        That the authors listed on the paper accurately reflect those who actually did the work and contributed to the paper in a meaningful way.
        That they have identified and acknowledged all sources used in the creation of their paper or manuscript, including any graphics, images, tables, and figures, and also including any persons who do not meet the criteria for authorship.`,
    },
    {
      question: "Full paper submission and payment details",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Full paper submission and payment details",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ];

  return (
    <div className="w-full pt-16 pb-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="flex-col justify-center">
          <h2 className="flex justify-center text-3xl font-bold tracking-tight text-center text-blue-primary sm:text-4xl">
            Instructions on Submissions
          </h2>
          <p className="flex justify-center mt-2 text-lg leading-8 text-center text-gray-primary">
            Make your papers much more stronger with these tips
          </p>
        </div>
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
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
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
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
