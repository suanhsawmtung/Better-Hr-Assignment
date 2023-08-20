<script setup>
import { ref, computed } from 'vue';
import SideBar from './components/SideBar.vue';
import Table from './components/Table.vue';
import TinyTable from './components/TinyTable.vue';

const paginator = ref(1);

const employees = ref([
    { id: "1", name: "Ye Min Htun", location: "Yangon Office", email: "yeminhtun@better.hr", phone: "+959483482381", department: "Product dpt", code: "004-342", tag: "Intern", position: "UX Designer", nrc: "12/PaBaTa(N)00700", manager: "Myo Zaw Hein", managerPosition: "CEO", date: "12/2/2021", terminatedDate: "-", image: "hr-test-one.jpg"},
    { id: "2", name: "Kyi Sin Hsu Thar", location: "Yangon Office", email: "kyisinhsuthar@better.hr", phone: "+959483482381", department: "Product dpt", code: "004-342", tag: "Trainee", position: "UX Designer", nrc: "12/PaBaTa(N)00700", manager: "Myo Zaw Hein", managerPosition: "CEO", date: "12/2/2021", terminatedDate: "-", image: "hr-test-two.jpeg"},
    { id: "3", name: "Mya Thae Chit", location: "Yangon Office Sue Lay", email: "myatthechit@better.hr", phone: "+94123456789", department: "Development", code: "004-342", tag: "Spanish-spoken", position: "UX Designer", nrc: "12/PaBaTa(N)00700", manager: "Myo Zaw Hein", managerPosition: "CEO", date: "12/2/2021", terminatedDate: "-", image: "hr-test-three.jpeg"},
    { id: "4", name: "Walter", location: "Mandalay Office", email: "zayerlinhtun@better.hr", phone: "+959483482381", department: "Tech & Development", code: "004-342", tag: "Intern", position: "UX Designer", nrc: "12/PaBaTa(N)00700", manager: "Zayer Zay", managerPosition: "COO", date: "12/2/2021", terminatedDate: "-", image: "hr-test-four.jpeg"},
    { id: "5", name: "Johnathan", location: "Yangon Office", email: "yeminhtun@better.hr", phone: "+959483482381", department: "Product dpt", code: "004-342", tag: "Intern", position: "UX Designer", nrc: "12/PaBaTa(N)00700", manager: "Myo Zaw Hein", managerPosition: "CEO", date: "12/2/2021", terminatedDate: "-", image: "hr-test-five.jpeg"},
    { id: "6", name: "Devi", location: "Yangon Office", email: "kyisinhsuthar@better.hr", phone: "+959483482381", department: "Customer success", code: "004-342", tag: "Trainee", position: "UX Designer", nrc: "12/PaBaTa(N)00700", manager: "Myo Zaw Hein", managerPosition: "CEO", date: "12/2/2021", terminatedDate: "-", image: "hr-test-six.jpeg"},
    { id: "7", name: "Mike", location: "Yangon Office Sue Lay", email: "myatthechit@better.hr", phone: "+94123456789", department: "Customer success", code: "004-342", tag: "Spanish-spoken", position: "UX Designer", nrc: "12/PaBaTa(N)00700", manager: "Myo Zaw Hein", managerPosition: "CEO", date: "12/2/2021", terminatedDate: "-", image: "hr-test-seven.jpeg"},
    { id: "8", name: "Biden", location: "Mandalay Office", email: "zayerlinhtun@better.hr", phone: "+959483482381", department: "Tech & Development", code: "004-342", tag: "Intern", position: "UX Designer", nrc: "12/PaBaTa(N)00700", manager: "Zayer Zay", managerPosition: "COO", date: "12/2/2021", terminatedDate: "-", image: "hr-test-eight.jpeg"},
]);

const mappedEmployees = computed(() => {
  return employees.value.map(employee => {
    return { id: employee.id, name: employee.name, image: employee.image }
  });
});

const changePaginator = (num) => {
  paginator.value = num;
}

</script>

<template>
    <div class="w-screen h-screen overflow-x-hidden relative">
        <div class="w-60 h-full absolute top-0 left-0">
          <SideBar />
        </div>
        <div class="w-full h-full ps-60 bg-gray-100 rounded-lg">
          <div class="w-full h-full bg-white shadow-table-box rounded-lg">
            <div class="w-full px-6 py-2">
              <div class="flex justify-between items-center w-full">
                <div class="flex jistify-between items-center text-side gap-12">
                  <span class="flex gap-4 text-md text-header font-bold cursor-pointer">
                    <i class="material-icons font-semibold text-hr">keyboard_backspace</i>
                    Employee Directory
                  </span>
                  <span class="material-icons cursor-pointer">filter_alt</span>
                  <span class="material-icons cursor-pointer">search</span>
                  <span class="material-icons cursor-pointer">edit</span>
                </div>
                <div class="flex justify-between items-center">
                  <button class="px-4 py-2 bg-hr text-sm text-white rounded-md">
                    Create Employee
                  </button>
                  <span class="material-icons cursor-pointer">more_vert</span>
                </div>
              </div>
            </div>
            <div class="w-full mt-5 ps-6 flex relative">
              <TinyTable :employees="mappedEmployees" />
              <div class="w-80 h-full ms-2 bg-white"></div>
              <Table :employees="employees" />
            </div>
            <div class="w-full px-6 py-4 flex justify-end items-center gap-12">
              <button class="px-4 py-2 border text-header bg-white rounded-sm flex items-center gap-2">
                50/page <span class="material-icons">keyboard_arrow_down</span>
              </button>
              <nav aria-label="Page navigation example">
                <ul class="flex items-center -space-x-px h-10 text-header">
                  <li>
                    <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span class="sr-only">Previous</span>
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                      </svg>
                    </a>
                  </li>
                  <li :class="{ 'bg-hr text-white': paginator === 1 }" @click="changePaginator(1)">
                    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                  </li>
                  <li :class="{ 'bg-hr text-white': paginator === 2 }" @click="changePaginator(2)">
                    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                  </li>
                  <li :class="{ 'bg-hr text-white': paginator === 3 }" @click="changePaginator(3)">
                    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span class="sr-only">Next</span>
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="flex items-center gap-1 text-header">
                Go to 
                <button class="px-4 py-2 border bg-white rounded-sm flex justify-center items-center">
                  1
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>

</style>
