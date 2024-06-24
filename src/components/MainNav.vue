<template>
    <nav class="bg-white dark:bg-gray-800 antialiased border-b mb-8 dark:border-gray-700">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div class="flex items-center justify-between">
    
          <div class="flex items-center space-x-8">
            <div class="shrink-0">
              <a href="#" title="" class="">
                <img class="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="">
                <img class="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="">
              </a>
            </div>
    
            <ul class="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              <li>
                <router-link :to="{name: 'home'}" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Home
                </router-link>
              </li>
              <li class="shrink-0">
                <router-link :to="{name: 'shoes'}" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Shoes
                </router-link>
              </li>
              <li class="shrink-0">
                <a href="#" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Gift Ideas
                </a>
              </li>
              <li class="shrink-0">
                <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Today's Deals
                </a>
              </li>
              <li class="shrink-0">
                <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Sell
                </a>
              </li>
            </ul>
          </div>
    
          <div class="flex items-center lg:space-x-2">
    

            <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 text-sm p-1.5 rounded-full">
              <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </button>
            

            <button type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
              <span class="sr-only">
                Favorites
              </span>
              <div class="relative me-2.5">
                <svg class="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"></path>
                </svg>                  
                <div v-if="favoriteItems.length" class="rounded-full h-4 w-4 content-center justify-center font-md  absolute max-sm:left-3 max-sm:-top-1.5 -top-2 left-3  me-2.5 text-xs bg-red-700 text-white">
                  {{ favoriteItems.length }}
                </div>
              </div>
              <span class="hidden sm:flex">Favorites</span>
            </button>


            <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
              <span class="sr-only">
                Cart
              </span>
              <svg class="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
              </svg> 
              <span class="hidden sm:flex">My Cart</span>

              <div class="relative me-2.5 sm:me-2.5">
                <svg class="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                </svg> 
                <div v-if="cartItems.length" class="rounded-full h-4 w-4 content-center justify-center font-md  absolute max-sm:-left-2 max-sm:-top-4 -top-2.5 -left-16  me-2.5 text-xs bg-red-700 text-white">
                  {{ cartItems.length }}
                </div>             
              </div>

            </button>
    
            <div id="myCartDropdown1" class="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800">
              <div class="grid grid-cols-2">
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iPhone 15</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$599</p>
                </div>
          
                <div class="flex items-center justify-end gap-6">
                  <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
          
                  <button data-tooltip-target="tooltipRemoveItem1a" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                    <span class="sr-only"> Remove </span>
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div id="tooltipRemoveItem1a" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Remove item
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
          
              <div class="grid grid-cols-2">
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iPad Air</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$499</p>
                </div>
          
                <div class="flex items-center justify-end gap-6">
                  <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
          
                  <button data-tooltip-target="tooltipRemoveItem2a" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                    <span class="sr-only"> Remove </span>
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div id="tooltipRemoveItem2a" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Remove item
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
          
              <div class="grid grid-cols-2">
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple Watch SE</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$598</p>
                </div>
          
                <div class="flex items-center justify-end gap-6">
                  <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 2</p>
          
                  <button data-tooltip-target="tooltipRemoveItem3b" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                    <span class="sr-only"> Remove </span>
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div id="tooltipRemoveItem3b" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Remove item
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
          
              <div class="grid grid-cols-2">
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Sony Playstation 5</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$799</p>
                </div>
          
                <div class="flex items-center justify-end gap-6">
                  <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
          
                  <button data-tooltip-target="tooltipRemoveItem4b" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                    <span class="sr-only"> Remove </span>
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div id="tooltipRemoveItem4b" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Remove item
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
          
              <div class="grid grid-cols-2">
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iMac 20"</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$8,997</p>
                </div>
          
                <div class="flex items-center justify-end gap-6">
                  <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 3</p>
          
                  <button data-tooltip-target="tooltipRemoveItem5b" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                    <span class="sr-only"> Remove </span>
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div id="tooltipRemoveItem5b" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Remove item
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
          
              <a href="#" title="" class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> Proceed to Checkout </a>
            </div>
    
            <button id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
              <img class="h-6 w-6 rounded-full me-1.5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Rounded avatar">
              <span class="hidden sm:flex">Account</span>
              <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
              </svg> 
            </button>
    
            <div id="userDropdown1" class="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
              <ul class="p-2 text-start text-sm font-medium content-start text-gray-900 dark:text-white">
                <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600flex py-3 px-2 gap-2 content-center">
                  <svg class="w-4 h-4 block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                  </svg>
                  My Account
                </a></li>
                <li>
                  <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600flex py-3 px-2 gap-2 content-center">
                    <svg class="w-4 h-4 block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.8-3H7.4M11 7H6.3M17 4v6m-3-3h6"></path>
                    </svg>
                    My Orders
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg class="w-4 h-4 block align-middleeVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph K1PPCJwslha8GUIvV_Cr yHlultZNYA9toOP4bD_k eCx_6PNzncAD5yo7Qcic _Fwzcmilfk0R9LVuMadQw-4 h-4 block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0"></path>
                    </svg>
                    My Lists
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600__CB1NVTb04MHxDxK6Hw ay0ziTPUL4Ag5d1DkSY7 jCISvWkW5oStPH6Wrb_H neyUwteEn7DOg9pBSJJE Arr09YuldMaIsodz_BpF jePiShCVli4AXI2UmtvL MQMN74ivNmI6x68DZajA zhRMeqbg7JsftloqW_W6 MxG1ClE4KPrIvlL5_Q5x DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg class="w-4 h-4 block align-middleeVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph K1PPCJwslha8GUIvV_Cr yHlultZNYA9toOP4bD_k eCx_6PNzncAD5yo7Qcic _Fwzcmilfk0R9LVuMadQw-4 h-4 block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z"></path>
                    </svg>
                    My Wallet
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600__CB1NVTb04MHxDxK6Hw ay0ziTPUL4Ag5d1DkSY7 jCISvWkW5oStPH6Wrb_H neyUwteEn7DOg9pBSJJE Arr09YuldMaIsodz_BpF jePiShCVli4AXI2UmtvL MQMN74ivNmI6x68DZajA zhRMeqbg7JsftloqW_W6 MxG1ClE4KPrIvlL5_Q5x DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg class="w-4 h-4 block align-middleeVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph K1PPCJwslha8GUIvV_Cr yHlultZNYA9toOP4bD_k eCx_6PNzncAD5yo7Qcic _Fwzcmilfk0R9LVuMadQw-4 h-4 block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                    </svg>
                    Favourites Items
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600__CB1NVTb04MHxDxK6Hw ay0ziTPUL4Ag5d1DkSY7 jCISvWkW5oStPH6Wrb_H neyUwteEn7DOg9pBSJJE Arr09YuldMaIsodz_BpF jePiShCVli4AXI2UmtvL MQMN74ivNmI6x68DZajA zhRMeqbg7JsftloqW_W6 MxG1ClE4KPrIvlL5_Q5x DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg class="w-4 h-4 block align-middleeVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph K1PPCJwslha8GUIvV_Cr yHlultZNYA9toOP4bD_k eCx_6PNzncAD5yo7Qcic _Fwzcmilfk0R9LVuMadQw-4 h-4 block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.9 1.3 3.9 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.2-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"></path>
                    </svg>
                    Vouchers and gift cards
                  </a>
                </li>
                



                <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Account </a></li>
                <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Orders </a></li>
                <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Settings </a></li>
                <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Favourites </a></li>
                <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Delivery Addresses </a></li>
                <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Billing Data </a></li>
              </ul>
          
              <div class="p-2 text-sm font-medium  text-gray-900 dark:text-white">
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"></path>
                  </svg>
                   Sign Out 
                </a>
              </div>
            </div>
    
            <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" class="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">
              <span class="sr-only">
                Open Menu
              </span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
              </svg>                
            </button>
          </div>
        </div>
    
        <div id="ecommerce-navbar-menu-1" class="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4">
          <ul class="text-gray-900 dark:text-white text-sm font-medium dark:text-white space-y-3">
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Home</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Best Sellers</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Gift Ideas</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Games</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Electronics</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Home & Garden</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const favoriteItems = ref([
  {
    id: 1,
    itemId: 2
  },
  {
    id: 2,
    itemId: 17
  },
  {
    id: 3,
    itemId: 9
  }
])

const cartItems = ref([
  {
    id: 1,
    itemId: 2
  },
  {
    id: 2,
    itemId: 17
  }
])

</script>