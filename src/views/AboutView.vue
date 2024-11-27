<script setup lang="ts">
import { useProductStore } from '../stores/productStore';


const productStore = useProductStore()

</script>

<template>
    <p>About</p>
    <p>Product Name: {{ productStore.productName }}</p>
    <RouterLink to="/product">Go to product page</RouterLink>
</template>