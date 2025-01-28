import { SideBar } from '@/components/client/SideBar';
import React from 'react';
import Image from 'next/image';

export default function page() {
  return (
    <>
      <SideBar></SideBar>
      <section className="py-8 antialiased md:py-36 pt-10 pl-72">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mx-72">
              Payment
            </h2>

            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              {/* Payment Form */}
              <form
                action="#"
                className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
              >
                {/* Form inputs */}
                {/* ... Your form fields remain unchanged ... */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Pay now
                </button>
              </form>

              {/* Summary and Payment Options */}
              <div className="mt-6 grow sm:mt-8 lg:mt-0">
                <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                  {/* Summary Details */}
                  {/* ... Your details remain unchanged ... */}
                </div>

                {/* Payment Logos */}
                <div className="mt-6 flex items-center justify-center gap-8">
                  <Image
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                    alt="Paypal"
                    width={32}
                    height={32}
                  />
                  <Image
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg"
                    alt="Paypal Dark"
                    width={32}
                    height={32}
                  />
                  <Image
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                    alt="Visa"
                    width={32}
                    height={32}
                  />
                  <Image
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                    alt="Visa Dark"
                    width={32}
                    height={32}
                  />
                  <Image
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                    alt="Mastercard"
                    width={32}
                    height={32}
                  />
                  <Image
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
                    alt="Mastercard Dark"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
              Payment processed by{' '}
              <a
                href="#"
                title=""
                className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
              >
                Paddle
              </a>{' '}
              for{' '}
              <a
                href="#"
                title=""
                className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
              >
                Flowbite LLC
              </a>
              - United States Of America
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
