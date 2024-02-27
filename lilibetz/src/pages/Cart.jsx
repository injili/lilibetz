import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from "react-icons/io";

// export default function Cart(){
//     return (
//         <div>

//             <section>
//                 <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//                     <div className="mx-auto max-w-3xl">
//                     <header className="text-center">
//                         <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
//                     </header>

//                     <div className="mt-8">
//                         <ul className="space-y-4">
//                         <li className="flex items-center gap-4">
//                             <img
//                             src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
//                             alt=""
//                             className="size-16 rounded object-cover"
//                             />

//                             <div>
//                             <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

//                             <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
//                                 <div>
//                                 <dt className="inline">Size:</dt>
//                                 <dd className="inline">XXS</dd>
//                                 </div>

//                                 <div>
//                                 <dt className="inline">Color:</dt>
//                                 <dd className="inline">White</dd>
//                                 </div>
//                             </dl>
//                             </div>

//                             <div className="flex flex-1 items-center justify-end gap-2">
//                             <form>
//                                 <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

//                                 <input
//                                 type="number"
//                                 min="1"
//                                 value="1"
//                                 id="Line1Qty"
//                                 className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
//                                 />
//                             </form>

//                             <button className="text-gray-600 transition hover:text-red-600">
//                                 <span className="sr-only">Remove item</span>

//                                 <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 className="h-4 w-4"
//                                 >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                                 />
//                                 </svg>
//                             </button>
//                             </div>
//                         </li>

//                         <li className="flex items-center gap-4">
//                             <img
//                             src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
//                             alt=""
//                             className="size-16 rounded object-cover"
//                             />

//                             <div>
//                             <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

//                             <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
//                                 <div>
//                                 <dt className="inline">Size:</dt>
//                                 <dd className="inline">XXS</dd>
//                                 </div>

//                                 <div>
//                                 <dt className="inline">Color:</dt>
//                                 <dd className="inline">White</dd>
//                                 </div>
//                             </dl>
//                             </div>

//                             <div className="flex flex-1 items-center justify-end gap-2">
//                             <form>
//                                 <label htmlFor="Line2Qty" className="sr-only"> Quantity </label>

//                                 <input
//                                 type="number"
//                                 min="1"
//                                 value="1"
//                                 id="Line2Qty"
//                                 className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
//                                 />
//                             </form>

//                             <button className="text-gray-600 transition hover:text-red-600">
//                                 <span className="sr-only">Remove item</span>

//                                 <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 className="h-4 w-4"
//                                 >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                                 />
//                                 </svg>
//                             </button>
//                             </div>
//                         </li>

//                         <li className="flex items-center gap-4">
//                             <img
//                             src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
//                             alt=""
//                             className="size-16 rounded object-cover"
//                             />

//                             <div>
//                             <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

//                             <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
//                                 <div>
//                                 <dt className="inline">Size:</dt>
//                                 <dd className="inline">XXS</dd>
//                                 </div>

//                                 <div>
//                                 <dt className="inline">Color:</dt>
//                                 <dd className="inline">White</dd>
//                                 </div>
//                             </dl>
//                             </div>

//                             <div className="flex flex-1 items-center justify-end gap-2">
//                             <form>
//                                 <label htmlFor="Line3Qty" className="sr-only"> Quantity </label>

//                                 <input
//                                 type="number"
//                                 min="1"
//                                 value="1"
//                                 id="Line3Qty"
//                                 className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
//                                 />
//                             </form>

//                             <button className="text-gray-600 transition hover:text-red-600">
//                                 <span className="sr-only">Remove item</span>

//                                 <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 className="h-4 w-4"
//                                 >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                                 />
//                                 </svg>
//                             </button>
//                             </div>
//                         </li>
//                         </ul>

//                         <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
//                         <div className="w-screen max-w-lg space-y-4">
//                             <dl className="space-y-0.5 text-sm text-gray-700">
//                             <div className="flex justify-between">
//                                 <dt>Subtotal</dt>
//                                 <dd>£250</dd>
//                             </div>

//                             <div className="flex justify-between">
//                                 <dt>VAT</dt>
//                                 <dd>£25</dd>
//                             </div>

//                             <div className="flex justify-between">
//                                 <dt>Discount</dt>
//                                 <dd>-£20</dd>
//                             </div>

//                             <div className="flex justify-between !text-base font-medium">
//                                 <dt>Total</dt>
//                                 <dd>£200</dd>
//                             </div>
//                             </dl>

//                             <div className="flex justify-end">
//                             <span
//                                 className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
//                             >
//                                 <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 className="-ms-1 me-1.5 h-4 w-4"
//                                 >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
//                                 />
//                                 </svg>

//                                 <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
//                             </span>
//                             </div>

//                             <div className="flex justify-end">
//                             <a
//                                 href="#"
//                                 className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
//                             >
//                                 Checkout
//                             </a>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
]

export default function Cart() {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <IoMdClose className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}