import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [displayText1, setDisplayText1] = useState("");

  const originalText = "Building Good";
  const originalText1 = " Software."; // Note the space at the beginning

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayText(originalText.slice(0, currentIndex + 1));
      currentIndex += 1;

      if (currentIndex === originalText.length) {
        clearInterval(intervalId);
        startSecondInterval();
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs once on mount

  const startSecondInterval = () => {
    let currentIndex1 = 0;

    const intervalId1 = setInterval(() => {
      setDisplayText1(originalText1.slice(0, currentIndex1 + 1));
      currentIndex1 += 1;

      if (currentIndex1 === originalText1.length) {
        clearInterval(intervalId1);
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId1);
  };
  return (
    <>
      <section className="  dark:bg-gray-800 min-h-screenw-full h-full">
        <div className="absolute inset-0 bg-cover bg-center "></div>
        <Navbar />
        <div>
          <section>
            <section className="sticky">
              <div className="max-w-lg px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center">
                <div className="text-center py-4 hidden sm:block"></div>

                <h1 className="font-extrabold leading-10 tracking-tight  text-[#201515] text-center sm:leading-none text-5xl sm:text-9xl">
                  <span className="inline md:block">{displayText} </span>
                  <span className="relative mt-2 bg-clip-text text-[#201515] md:inline-block">
                    {displayText1}
                  </span>
                </h1>
              </div>

              <div className="max-w-lg px-4 pb-24 mx-auto text-left md:max-w-none md:text-center">
                <div className="text-center py-4 space-x-4">
                  <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-[#FF4F01] border border-[#E2E8F0] translate-y-1 text-white hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                    <a href="/"> Build Your Custom App</a>
                  </button>

                  <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                    <a href="./Blogs"> Explore Apps</a>
                  </button>
                </div>
              </div>
            </section>
          </section>

          <div className="text-left">
            <div className="sm:px-28">
              <section className="relative flex items-center w-full">
                <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div className="relative flex-col items-start m-auto align-middle">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                      <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                        <div className="max-w-xl text-center lg:text-left">
                          <div>
                            <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                              Space Management Software
                            </p>
                            <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                              Use this paragraph to share information about your
                              company or products. Make it engaging and
                              interesting, and showcase your brand's
                              personality. Thanks for visiting our website!
                            </p>
                          </div>
                          <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                            <a
                              className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                              href="/"
                            >
                              <span> Read more &nbsp; → </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img
                          className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                          alt="hero"
                          src="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* <div className="mt-32" /> */}
          </div>
        </div>

        <section className="bg-white  pb-24 px-4 lg:px-16">
          <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
            <h1 className="text-center text-5xl pb-24 font-extrabold sm:text-6xl">
              Industries we serve
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Automotive.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Automotive"
                        title="Automotive"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Automotive
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Toys-and-Baby-Products.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Toys and Baby Products"
                        title="Toys and Baby Products"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Toys and Baby Products
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/MEDICAL.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Medical"
                        title="Medical"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Medical
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Glass.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Glass"
                        title="Glass"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Glass
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Jewelry-coins-and-medallions.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Jewelry Coins and Medallions"
                        title="Jewelry Coins and Medallions"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Jewelry Coins and Medallions
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Electric.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Electric"
                        title="Electric"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Electric
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Packaging-FMCG.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Packaging / FMCG"
                        title="Packaging / FMCG"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Packaging / FMCG
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Footwear.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Footwear"
                        title="Footwear"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Footwear
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Backpacks-and-umbrella.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Backpacks and Umbrella"
                        title="Backpacks and Umbrella"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Backpacks and Umbrella
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Caps-and-Closures.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Caps and Closures"
                        title="Caps and Closures"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Caps and Closures
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="@" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Confectionery.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Confectionery"
                        title="Confectionery"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Confectionery
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Cosmetics.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Cosmetics"
                        title="Cosmetics"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Cosmetics
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Electronics.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Electronics"
                        title="Electronics"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Electronics
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Mobile.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Consumer Electronics"
                        title="Consumer Electronics"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Consumer Electronics
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Promotional.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Promotional"
                        title="Promotional"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Promotional
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Sports.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Sports"
                        title="Sports"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Sports
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Stationery.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Stationery"
                        title="Stationery"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Stationery
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="/" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Tools.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Tools"
                        title="Tools"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Tools
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href=" " className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Utensils.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Utensils"
                        title="Utensils"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Utensils
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="flex justify-center ">
        <div className="mix-blend-multiply bg-blue-400 ..."></div>
        <div className="mix-blend-multiply bg-pink-400 ..."></div>
      </div>
      <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
        <div className="lg:w-72 px-6 lg:px-0">
          <div className="p-2 bg-indigo-600 rounded-lg shadow-lg sm:p-3">
            <div className="flex flex-wrap items-center justify-between">
              <a
                target="_blank"
                href="./Profile"
                className="flex items-center flex-1 w-0"
              >
                <span className="flex p-2 bg-indigo-800 rounded-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.12954 3.00772C5.48563 2.38457 6.14831 2 6.86603 2H17.134C17.8517 2 18.5144 2.38457 18.8704 3.00772L20.0133 5.00772C20.6612 6.14163 20.0618 7.51107 18.9235 7.89532C18.9276 7.97661 18.9269 8.0591 18.9209 8.14249L18.0638 20.1425C17.989 21.1891 17.1181 22 16.0689 22H7.9311C6.88182 22 6.01094 21.1891 5.93618 20.1425L5.07904 8.14249C5.07308 8.0591 5.07231 7.97661 5.07645 7.89531C3.93813 7.51105 3.33874 6.14162 3.98668 5.00772L5.12954 3.00772ZM7.07396 8L7.28824 11H16.7117L16.926 8H7.07396ZM7.71681 17L7.9311 20H16.0689L16.2831 17H7.71681ZM18.2768 6L17.134 4L6.86603 4L5.72317 6H18.2768Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>

                <p className="ml-3 font-medium tracking-wide text-white truncate">
                  By me a coffee
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
