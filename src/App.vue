<script setup>

import { useBmiStore } from './store/BmiStore'
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

import {ref} from 'vue' 

const bmi = ref(0)

const calculateBMI = ({ height, weight }) => {
   //todo include weight argurment
if (height > 0 && weight > 0) {
    bmi.value = (weight / (height * height)).toFixed(2)
}
}
</script>

<template>
  <div class="app-container">
  <h1>Body Mass Index Calculator</h1>

<!--TODO set this up to expect a message
from bodymassindex and call a function here-->
<!--listens for the user entered data-->

  <BodyMassIndexForm @user-entered-data="calculateBMI" />

    <!--Display the bmi-->
    <div v-if="bmi > 0" class="bmi-result">
    Your BMI is {{ bmi }}</div>
</div> 
</template>

<style scoped>
.app-container {
  border: 5px solid blue;
  padding: 70px;
  width: 700px;
  margin: auto;
  text-align: center;
}
.bmi-result {
  margin-top: 20px;
}
h1 {
  color: blueviolet;
}
</style>
