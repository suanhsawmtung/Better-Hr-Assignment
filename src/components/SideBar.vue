<template>
    <nav class="w-full h-full relative top-0 left-0 ">
        <div class="w-full h-full flex">
            <div class="w-3/12 h-full bg-side-one flex flex-col justify-between items-center">
                <ul class="w-full text-center text-side">
                    <li class="flex justify-center items-center">
                        <img src="../assets/better-hr.png" alt="">
                    </li>
                    <li 
                        class="flex justify-center items-center py-2 cursor-pointer" 
                        @click="navBtnClick(1)" :class="{ 'bg-white text-hr': navBtn === 1}"
                    >
                        <span class="material-icons text-md">desktop_windows</span>
                    </li>
                    <li 
                        class="flex justify-center items-center py-2 cursor-pointer" 
                        @click="navBtnClick(2)" :class="{ 'bg-white text-hr': navBtn === 2}"
                    >
                        <span class="material-icons text-md">schedule</span>
                    </li>
                    <li 
                        class="flex justify-center items-center py-2 cursor-pointer" 
                        @click="navBtnClick(3)" :class="{ 'bg-white text-hr': navBtn === 3}"
                    >
                        <span class="material-icons text-md">work_outline</span>
                    </li>
                    <li 
                        class="flex justify-center items-center py-2 cursor-pointer" 
                        @click="navBtnClick(4)" :class="{ 'bg-white text-hr': navBtn === 4}"
                    >
                        <span class="material-icons text-md">person</span>
                    </li>
                    <li 
                        class="flex justify-center items-center py-2 cursor-pointer" 
                        @click="navBtnClick(5)" :class="{ 'bg-white text-hr': navBtn === 5}"
                    >
                        <span class="material-icons text-md">autorenew</span>
                    </li>
                    <li 
                        class="flex justify-center items-center py-2 cursor-pointer" 
                        @click="navBtnClick(6)" :class="{ 'bg-white text-hr': navBtn === 6}"
                    >
                        <span class="material-icons text-md">notifications_none</span>
                    </li>
                    <li class="flex flex-col items-center py-1">
                        <span class="material-icons text-md text-hr">more_horiz</span>
                        <small>More</small>
                    </li>
                </ul>
                <ul class="w-full text-center text-bot">
                    <li class="flex justify-center items-center py-2">
                        <span class="material-icons text-md">upload_file</span>
                    </li>
                    <li class="flex justify-center items-center py-2">
                        <span class="material-icons text-md">check_box_outline_blank</span>
                    </li>
                    <li class="flex justify-center items-center py-2">
                        <div class="w-12 h-12 overflow-hidden rounded-full">
                            <img src="../assets/hr-profile.jpeg" class="object-cover w-full h-full" alt="">
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="bg-side-two text-side">
                <li 
                    class="flex justify-start items-center py-4 text-header"
                >
                    <span class="ml-3 font-semibold text-lg">Employees</span>
                </li>
                <li 
                    class="flex justify-start items-center py-2.5 cursor-pointer"
                    @click="sideItemClick(1)" :class="{ 'text-hr': sideItem === 1}"
                >
                    <span class="ml-3 text-sm">Directory</span>
                </li>
                <li 
                    class="flex justify-start items-center py-2.5 cursor-pointer"
                    @click="sideItemClick(2)" :class="{ 'text-hr': sideItem === 2}"
                >
                    <span class="ml-3 text-sm">Update Request</span>
                </li>
                <li 
                    class="flex justify-start items-center py-2.5 cursor-pointer"
                    @click="sideItemClick(3)" :class="{ 'text-hr': sideItem === 3}"
                >
                    <span class="ml-3 text-sm">Reporting Lines</span>
                </li>
                <li 
                    class="flex justify-start items-center py-2.5 cursor-pointer"
                    @click="sideItemClick(4)" :class="{ 'text-hr': sideItem === 4}"
                >
                    <span class="ml-3 text-sm">Department Structures</span>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const navBtn = ref(4);
const sideItem = ref(1);

const navBtnClick = (btn) => {
    navBtn.value = btn;
}

const sideItemClick = (item) => {
    sideItem.value = item;
}

</script>