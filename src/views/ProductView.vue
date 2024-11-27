<script setup lang="ts">
import { ref } from 'vue';
import { useProductStore } from '../stores/productStore';
import { useRouter } from 'vue-router';

const productStore = useProductStore()
const globalProductName = productStore.productName
const productInput = ref(globalProductName) // local state
const router = useRouter()

function onSave() {
    let productName = productInput.value

    productStore.changeProductName(productName)

    router.push("/about")
}

</script>

<template>
    <h1>Product Page</h1>
    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 10px;">
        <label>Product Name:</label>
        <input v-model="productInput" type="text" placeholder="Please enter your product name">
        <button @click="onSave">Save</button>
    </div>
</template>