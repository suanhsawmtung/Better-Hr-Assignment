<template>
    <div 
        class="w-full flex relative overflow-x-auto shadow-md sm:rounded-lg scroll-box"
    >
        <table 
            class="text-sm text-left text-gray-500 dark:text-gray-400 "
        >
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr class="border-y">
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Location</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Email</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Phone</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Department</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Employee Code</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Custom tags</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Positions</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">NRC</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Manager</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Manager Position</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Joinned Date</span>
                    </th>
                    <th  scope="col" class="px-6 py-3">
                        <span class="w-40 inline-block">Terminate Date</span>
                    </th>    
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(employee, index) in employees" :key="index"
                    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                    <td class="px-6 py-4 ">
                        {{ employee.location }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.email }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.phone }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.department }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.code }}
                    </td>
                    <td class="px-6 py-4 ">
                        {{ employee.tag }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.position }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.nrc }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.manager }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.managerPosition }}
                    </td>
                    <td class="px-6 py-4 ">
                        {{ employee.date }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.terminatedDate }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
defineProps({
    employees: {
        required: true,
        type: Object
    }
});

</script>

<style scoped>

</style>
