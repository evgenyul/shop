<template>
      <div class="lg:w-4/5 mx-auto w-11/12">
        <section class="bg-white-50 dark:bg-gray-900 flex items-center">
          <div class=" mx-auto w-full">
            <!-- Start coding here -->
            <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
              <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                <div class="w-full md:w-1/2">
                  <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <input v-model="filter.search" type="text" id="simple-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="">
                    </div>
                  </form>
                </div>
                <div class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                  <div class="flex items-center w-full space-x-3 md:w-auto">
                    <select v-model="filter.price" name="" id="" class="border border-gray-200 rounded-lg ring-none font-medium  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      <option value="normal">По цене</option>
                      <option value="asc">По возрастанию</option>
                      <option value="rev">По уменьшению</option>
                    </select>
                    <select v-model="filter.brand" name="" id="" class="ring-1 hover:ring-slate-200 border border-gray-200 rounded-lg ring-none font-medium  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      <option value="all">Все бренды</option>
                      <option value="adidas">Adidas</option>
                      <option value="puma">Puma</option>
                      <option value="nike">Nike</option>
                      <option value="reebok">Reebok</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h1 class="text-gray-600 mt-3 text-xs">Total product found: {{ items.length }}</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 place-content-stretch">
          <Product v-for="prod in items" :prod="prod" :key="prod.id"/>
        </div>
      </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import MainNav from '@/components/MainNav.vue'
  import MainFooter from '@/components/MainFooter.vue'
  import Product from '@/components/Product.vue'
  import shoes from '@/data/shoes.json'
  
  const filter = ref({search: '', price: 'normal', brand: 'all'})
  
  watch(filter, (n, o) => {
    items.value = shoes
    .filter((v) => {
      if (n.search) {
        return v.model.toLowerCase().includes(n.search.toLowerCase())
      }
      if (n.brand === "all") {
        return shoes
      }else{
        return (v.brand === n.brand)
      }
    })
    .sort((a,b) => {
      if (n.price === 'asc') {
        return a.price-b.price
      }else if(n.price === 'rev'){
        return b.price - a.price
      }
      return 0
    })
  }, {    
    deep: true
  })
  
  const items = ref(shoes)
  
  </script>