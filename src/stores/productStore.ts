import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
    const productName = ref("Laptop")

    function changeProductName(name: string) {
        productName.value = name
    }

    return {
        productName,
        changeProductName
    }
})