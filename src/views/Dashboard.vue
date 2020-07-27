<template>
  <div class="dashboard-container">
    <Timeline msg="Timeline" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Timeline from "@/components/Timeline.vue";

export default {
  name: "Dashboard",
  components: {
    Timeline
  }
};
</script>

<style lang="scss" scoped>
.dashboard-container {
}
</style>
