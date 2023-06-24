<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios'

const route = useRoute();

const products = ref([])

const getProducts = async () => {
  let callURL;
  if (route.query.category) {
    callURL = `http://localhost:8080/api/v1/categories/${route.query.category}/products/`;
  } else {
    callURL = 'http://localhost:8080/api/v1/products/';
  }

  const { data } = await axios.get(callURL);
  console.log(data);

  products.value = data;
}
getProducts()

</script>

<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="product in products" :key="product.pk" class="flex justify-between gap-x-6 py-5">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">{{ product.name }}</p>
        <RouterLink :to="'/categories/' + product.category.pk + '/'"
          class="mt-1 truncate text-xs leading-5 text-gray-500">
          {{
            product.category.name }}</RouterLink>
      </div>
      <div class="flex space-x-4">
        <button
          class="inline-flex border justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900">Edit</button>
        <button
          class="inline-flex border justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900">Delete</button>
      </div>
    </li>
  </ul>
</template>
