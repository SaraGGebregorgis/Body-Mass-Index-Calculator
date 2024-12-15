import { defineStore } from 'pinia'


//define a pinia sotre named bmi
export const useBmiStore = defineStore('bmi', {
  //foundthis holds the initials values for h and w
  state: () => ({
    weight: 0,
    height: 0,
  }),

  // Computed property to calculate BMI
  getters: {
    //bmi calculation computes based on weight and height
    bmi: (state) => {
      if (state.height > 0 && state.weight > 0) {
        const heightInMeters = state.height / 100 // convert cm to meters
        return (state.weight / (heightInMeters * heightInMeters)).toFixed(2)
      }
      //if the height or weight is zerio or negative return null
      return null
    },


    bmiCategory: (state) => {
      const bmiValue = this.bmi //access the bmi value from the getter
      if (bmiValue === null) return null //reutrn null if bmi is not computes

      //check the BMI value nd return a category
      if (bmiValue < 18.5) return 'Underweight';
      if (bmiValue >= 18.5 && bmiValue < 24.9) return 'Normal weight';
      if (bmiValue >= 25 && bmiValue < 29.9) return 'Overweight';
      return 'Obese';
    },
  },

  //to update the state
  actions: {
    setWeight(weight) {
      this.weight = weight;
    },
    setHeight(height) {
      this.height = height;
    },
  },
})
