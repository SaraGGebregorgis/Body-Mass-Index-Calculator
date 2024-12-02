<script setup>
import { ref } from 'vue'

//create ref for height and width
const userHeight = ref('')
const userWeight = ref('')

//emit the stats-entered event with user input
const emit = defineEmits(['user-entered-data'])
//todo create a function here to run wha the user
//clicks the button

//this function will emit a message to app.vue
//including the user's height and weight data

const userHasSubmittedData = () => {

  //this function will be called when the user clicks the calculate button
  //this component needs to tell App.vue that the data is available
  //and send App.vue this data so it can do the math
    const height = userHeight.value
  const weight = userWeight.value
  if (height > 0 && weight > 0) {
    emit('user-entered-data', { height, weight })
  } else {
    alert('Please enter valid height and weight values.')
  }
}


</script>

<template>
  <!--html here, things the user sees-->
  <!-- can be updated from the script's state-->
  <!--can tell the code the user has done something-->
  <div class="form-container">
  <h2>Enter your height and width</h2>
  

  <label for="height">Height in meters   </label>
  <input v-model="userHeight" id="height" type="number">
  <br />

  <!-- todo use v-model --> 
   <label for="weight">Weight in Kilograms   </label>
   <input v-model="userWeight" id="weight" type="number">
   <br />

   <!--todo use v-on to tell the script
   when the user click the button-->
   <br />
   <button v-on:click="userHasSubmittedData">Calculate BMI</button>
   <br />
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 15px;

}
div {
  margin-bottom: 40px;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}

.form-container {
  border: 2px solid red;
}

</style>
