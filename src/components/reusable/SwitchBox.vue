<template>
  <div>
    <div style="background-color: #8c8ca4;" @click="$emit('update:modelValue', $event.target.value = !$event.target.value)" :value="toggle" class="switch-box-container d-flex">
      <div v-bind:class="isActive? 'active':''" class="circle" style="background-color: #4d4488"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isActive'],
  data: ()=>{
    return{
      toggle: false,
    }
  },
}
</script>

