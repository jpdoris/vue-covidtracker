<template>
  <div class="md-layout">
    <div><h3 class="d-block">US Statistics</h3></div>
    <div class="md-layout-item md-large-size-33 md-xsmall-size-100 md-size-33">
      <stats-card data-background-color="green">
        <template slot="header">
          <md-icon>place</md-icon>
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
          <md-icon>place</md-icon>
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
          <md-icon>place</md-icon>
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
  </div>
</template>

<script>
import { StatsCard } from "@/components";
import { covidTrackerApi } from "@/api/CovidTrackerApi";

export default {
  name: "CountryStats",
  components: {
    StatsCard
  },
  data() {
    return {
      apiError: false,
      loading: false,
      countryStats: {
        info: [],
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
  computed: {
    updatedStats: function() {
      return this.countryStats;
    }
  },
  created() {
    this.countryStats = this.getCountryStats();
  },
  methods: {
    async getCountryStats() {
      try {
        this.loading = true;
        const getStats = await covidTrackerApi
          .fetchCountryStatistics("US")
          .then(result => {
            this.countryStats = result.countrydata[0];
          });
      } catch (error) {
        console.log(error);
        this.apiError = true;
      } finally {
        this.loading = false;
      }
      return this.countryStats;
    }
  }
};
</script>

<style scoped lang="scss">
/* */
</style>
