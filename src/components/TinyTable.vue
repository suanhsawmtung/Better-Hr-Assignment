<template>
    <div class="w-56 h-full ms-2 absolute top-0 left-0 z-10 " >
        <table 
            class="text-sm text-left text-gray-500 dark:text-gray-400 shadow-tiny border-b-4 border-hr"
        >
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr class="border-y">
                    <th scope="col" class="px-4 py-2">
                        <span class="w-6 inline-block">
                            <input type="checkbox" class="accent-hr" 
                                @change="checkInput(0)" :checked="ids.length !== 0"
                            >
                        </span>
                    </th>
                    <th  scope="col" class="px-6 py-3 ">
                        <span class="w-40 inline-block">Employee</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(employee, index) in employees" :key="index"
                    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >   
                    <td class="px-4 py-2">
                        <input type="checkbox" :checked="ids.includes(employee.id) || ids.includes(0)"
                            class="accent-hr" @change="checkInput(employee.id)"
                        >
                    </td>
                    <td class="px-6 py-3.5 flex items-center gap-4">
                        <span class="w-6 h-6 inline-block overflow-hidden rounded-full">
                            <img 
                                :src="'/images/' + employee.image"
                                alt="" class="w-full h-full object-cover"
                            >
                        </span>
                        {{ employee.name }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

defineProps({
    employees: {
        required: true,
        type: Array
    }
});

const ids = ref([]);

const checkInput = id => {
    if(ids.value.includes(id)) ids.value = ids.value.filter(ID => ID !== id);
    else {
        if(id === 0 && ids.value.length !== 0) ids.value = [];
        else ids.value.push(id);
    };
};

const imgSrc = src => "src/assets/images/" + src;

</script>

<style scoped>

</style>