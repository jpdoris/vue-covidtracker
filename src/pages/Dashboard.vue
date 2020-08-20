<template>
  <div class="content">
    <GlobalStats />
    <CountryStats />
    <Timeline />
  </div>
</template>

<script>
import GlobalStats from "@/components/Stats/GlobalStats.vue";
import CountryStats from "@/components/Stats/CountryStats.vue";
import Timeline from "@/components/Timeline/Timeline.vue";

export default {
  components: {
    GlobalStats,
    CountryStats,
    Timeline
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.stats-loader {
  width: 64px;
  height: 64px;
  background: #fff url("../assets/img/cv-red-loader.png") no-repeat;
  float: right;
}
</style>
