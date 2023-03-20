<template>
  <div class="about">
    <h1>This is an about page</h1>
    <DataVis/>
  </div>
</template>

<script>
  import DataVis from '../components/DataVis.vue'
  export default {
    components: { DataVis }
  }

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
