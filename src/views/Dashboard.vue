<template>
  <div class="dashboard-container">
    <Timeline msg="Timeline"/>
  </div>
</template>

<script lang="ts">
// import { Component, Vue, Watch } from 'vue-property-decorator';

// @ is an alias to /src
import Timeline from '../components/Timeline.vue';

export default {
  name: 'Dashboard',
  components: {
    Timeline
  }
};
</script>

<style lang="scss" scoped>
  .dashboard-container {

  }
</style>
