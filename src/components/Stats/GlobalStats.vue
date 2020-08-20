<template>
  <div class="md-layout">
    <h3>Global Statistics</h3>
    <div class="md-layout-item md-large-size-33 md-xsmall-size-100 md-size-33">
      <stats-card data-background-color="green">
        <template slot="header">
          <md-icon>public</md-icon>
        </template>

        <template slot="content">
          <p class="category">Total Cases</p>
          <h3 class="title stats-loader" v-if="loading"></h3>
          <h3 class="title" v-else>
            {{ updatedStats.total_cases | numberOut }}
          </h3>
        </template>
      </stats-card>
    </div>

    <div class="md-layout-item md-large-size-33 md-xsmall-size-100 md-size-33">
      <stats-card data-background-color="green">
        <template slot="header">
          <md-icon>public</md-icon>
        </template>

        <template slot="content">
          <p class="category">Total Recovered</p>
          <h3 class="title stats-loader" v-if="loading"></h3>
          <h3 class="title" v-else>
            {{ updatedStats.total_recovered | numberOut }}
          </h3>
        </template>
      </stats-card>
    </div>

    <div class="md-layout-item md-large-size-33 md-xsmall-size-100 md-size-33">
      <stats-card data-background-color="green">
        <template slot="header">
          <md-icon>public</md-icon>
        </template>

        <template slot="content">
          <p class="category">Total Unresolved</p>
          <h3 class="title stats-loader" v-if="loading"></h3>
          <h3 class="title" v-else>
            {{ updatedStats.total_unresolved | numberOut }}
          </h3>
        </template>
      </stats-card>
    </div>

    <!-- <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
    >
      <<h1>Stats</h1>
      <div class="stats-container">
        <h2>Global Statistics</h2>
        <div class="stats-loader" v-if="loading === true"></div>
        <div class="stats-data" v-else>
          <div class="stats-cell">
            Total Cases: {{ updatedStats.total_cases }}
          </div>
          <div class="stats-cell">
            Total Recovered: {{ updatedStats.total_recovered }}
          </div>
          <div class="stats-cell">
            Total Unresolved: {{ updatedStats.total_unresolved }}
          </div>
          <div class="stats-cell">
            Total Deaths: {{ updatedStats.total_deaths }}
          </div>
          <div class="stats-cell">
            Total New Cases Today: {{ updatedStats.total_new_cases_today }}
          </div>
          <div class="stats-cell">
            Total New Deaths Today: {{ updatedStats.total_new_deaths_today }}
          </div>
          <div class="stats-cell">
            Total Active Cases: {{ updatedStats.total_active_cases }}
          </div>
          <div class="stats-cell">
            Total Serious Cases: {{ updatedStats.total_serious_cases }}
          </div>
          <div class="stats-cell">
            Total Affected Countries:
            {{ updatedStats.total_affected_countries }}
          </div>
          <div class="stats-cell">Source: {{ updatedStats.source.url }}</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { StatsCard } from "@/components";
import { covidTrackerApi } from "@/api/CovidTrackerApi";

export default {
  name: "GlobalStats",
  components: {
    StatsCard
  },
  data() {
    return {
      apiError: false,
      loading: false,
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
          url: "string"
        }
      }
    };
  },
  created() {
    this.globalStats = this.getGlobalStats();
  },
  computed: {
    updatedStats: function() {
      return this.globalStats;
    }
  },
  methods: {
    async getGlobalStats() {
      try {
        this.loading = true;
        const getStats = await covidTrackerApi
          .fetchGlobalStatistics()
          .then(result => {
            this.globalStats = result.results[0];
          });
      } catch (error) {
        console.log(error);
        this.apiError = true;
      } finally {
        this.loading = false;
      }
      return this.globalStats;
    }
  }
};
</script>

<style scoped lang="scss">
// .stats-loader {
//   width: 64px;
//   height: 64px;
//   background: #fff url("../../assets/img/cv-loader.gif") no-repeat;
//   float: right;
// }
</style>
