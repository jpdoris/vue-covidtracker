<template>
  <div class="timeline">
    <h1>Timeline</h1>
    <div class="stats-container">
      <h2>Global Statistics</h2>
      <div class="stats-loader" v-if="loading === true"></div>
      <div class="stats-data" v-else="">
        <div class="stats-cell">Total Cases: {{ updatedStats.total_cases }}</div>
        <div class="stats-cell">Total Recovered: {{ updatedStats.total_recovered }}</div>
        <div class="stats-cell">Total Unresolved: {{ updatedStats.total_unresolved }}</div>
        <div class="stats-cell">Total Deaths: {{ updatedStats.total_deaths }}</div>
        <div class="stats-cell">Total New Cases Today: {{ updatedStats.total_new_cases_today }}</div>
        <div class="stats-cell">Total New Deaths Today: {{ updatedStats.total_new_deaths_today }}</div>
        <div class="stats-cell">Total Active Cases: {{ updatedStats.total_active_cases }}</div>
        <div class="stats-cell">Total Serious Cases: {{ updatedStats.total_serious_cases }}</div>
        <div class="stats-cell">Total Affected Countries: {{ updatedStats.total_affected_countries }}</div>
        <div class="stats-cell">Source: {{ updatedStats.source.url }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import Axios from 'axios';
import { covidTrackerApi } from '../api/CovidTrackerApi';

export default {
  name: 'Timeline',
  data: () => {
    return {
      globalStats: {
        total_cases: 0,
        total_recovered: 0,
        total_unresolved: 0,
        total_deaths: 0,
        total_new_cases_today: 0,
        total_new_deaths_today: 0,
        total_active_cases: 0,
        total_serious_cases: 0,
        total_affected_countries: 0,
        source: {
          url: 'string'
        }
      },
      loading: true,
      apiError: false
    };
  },
  computed: {
    updatedStats: function () {
      return this.globalStats;
    }
  },
  mounted: function () {
    this.globalStats = this.getGlobalStats();
  },
  methods: {
    getGlobalStats: function () {
      try {
        const getStats = covidTrackerApi.fetchGlobalStatistics();
        Promise.resolve(getStats).then((result) => {
          this.globalStats = result.results[0];
        });
      } catch (error) {
        console.log(error);
        this.apiError = true;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .stats-container {
    .stats-loader {
      width: 64px;
      height: 64px;
      background: #fff url('../assets/cv-loader.gif') no-repeat;
    }
  }
</style>
