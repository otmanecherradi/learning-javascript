<script setup>
import { ref } from 'vue'
import axios from 'axios'
import CategoryForm from '../../components/categories/CategoryForm.vue';

const categories = ref([])

const getCategories = async () => {
  const { data } = await axios.get('http://localhost:8080/api/v1/categories/');
  console.log(data);

  categories.value = data;
}
getCategories()

</script>

<template>
  <CategoryForm />

  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="category in categories" :key="category.pk" class="flex justify-between gap-x-6 py-5">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">{{ category.name }}</p>
        <RouterLink :to="'/products/?category=' + category.pk" class="mt-1 truncate text-xs leading-5 text-gray-500">
          Products</RouterLink>
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
