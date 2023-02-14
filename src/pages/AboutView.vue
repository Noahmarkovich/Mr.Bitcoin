<template>
  <div class="about">
    <h1>Chart Section</h1>
    <ValueChart/>
    <AvgChart/>
  </div>
</template>

<script>
import ValueChart from "@/cmps/value-chart.vue";
import AvgChart from "@/cmps/avg-chart.vue";





export default {
  
  components: {
    ValueChart,
    AvgChart
    }
}

</script>

<style lang="scss"></style>
