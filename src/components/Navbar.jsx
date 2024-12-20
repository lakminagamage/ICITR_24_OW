import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "AGENDA", href: "/agenda" },
  { name: "FOR AUTHORS", href: "/paperSubmission" },
  { name: "SPEAKERS", href: "/speakers" },
  { name: "WORKSHOPS", href: "/workshops" },
  {
    name: "COMMITTEE",
    href: "",
    subMenu: [
      { name: "ORGANIZING COMMITTEE", href: "/organizingCommittee" },
      { name: "TECHNICAL PROGRAM COMMITTEE", href: "/technicalCommittee" },
    ],
  },
  { name: "PROCEEDINGS", href: "/pastAbstracts" },
  { name: "CONTACT US", href: "/contacts" },
];

function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight;
      setIsScrolled(isScrolled);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-white ${
        isScrolled ? "bg-opacity-100" : "bg-opacity-50"
      } backdrop-blur-md`}
    >
      <nav
        className="flex items-center justify-between px-6 py-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <p href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">EC-UOM</span>
            <Image
              className=""
              src="/img/logo.png"
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
          </p>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <a
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 400);
                  router.push(item.href);
                }}
                className="text-sm font-semibold leading-6 text-blue-dark hover:text-blue-primary transition-colors duration-300 ease-in-out cursor-pointer"
              >
                {item.name}
              </a>
              {item.subMenu && (
                <div className="absolute left-0 hidden py-2 w-48 bg-white shadow-lg group-hover:block">
                  {item.subMenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                          setLoading(false);
                        }, 400);
                        router.push(subItem.href);
                      }}
                      className="block px-4 py-2 text-xs font-semibold leading-6 text-blue-dark hover:text-blue-primary transition-colors duration-300 ease-in-out cursor-pointer"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-40" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className=""
                src="/img/logo.png"
                width={200}
                height={100}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FaWindowClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                          setLoading(false);
                        }, 400);
                        router.push(item.href);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                    {item.subMenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subMenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                              }, 400);
                              router.push(subItem.href);
                            }}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <Spinner isVisible={loading} />
    </header>
  );
}

export default Navbar;
