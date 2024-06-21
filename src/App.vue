<template>
  <div class="dark:bg-gray-900">
    <MainNav />
    <router-view/>
    <hr>
    <MainFooter />
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