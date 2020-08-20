<template>
  <div class="md-layout">
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
    >
      <chart-card
        :chart-data="timelineChart.data"
        :chart-options="timelineChart.options"
        :chart-type="'Bar'"
        data-background-color="orange"
      >
        <template slot="content">
          <h4 class="title">US Timeline</h4>
        </template>

        <template slot="footer">
          <div class="stats">
            <md-icon>date_range</md-icon>
            Weekly statistics
          </div>
        </template>
      </chart-card>
    </div>
  </div>
</template>

<script lang="ts">
import { ChartCard } from "@/components";
import { covidTrackerApi } from "@/api/CovidTrackerApi";
import Chartist from "chartist";

export default {
  name: "Timeline",
  components: {
    ChartCard
  },
  data: () => {
    return {
      loading: false,
      apiError: false,
      timelineData: {
        // countrytimelinedata: [
        //   {
        //     info: {
        //       ourid: 167,
        //       title: "USA",
        //       code: "US",
        //       source:
        //         "https://thevirustracker.com/usa-coronavirus-information-us"
        //     }
        //   }
        // ],
        // timelineitems: [
        //   {
        //     "1/22/20": {
        //       new_daily_cases: 1,
        //       new_daily_deaths: 0,
        //       total_cases: 1,
        //       total_recoveries: 0,
        //       total_deaths: 0
        //     }
        //   }
        // ]
      },
      timelineChart: {
        data: {
          labels: [],
          series: []
        },
        options: {
          lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 75000,
          chartPadding: {
            top: 0,
            right: 10,
            bottom: 0,
            left: 10
          }
        }
      }
    };
  },
  mounted() {
    this.timelineData = this.getCountryTimeline();
  },
  methods: {
    async getCountryTimeline() {
      try {
        this.loading = true;
        const getStats = await covidTrackerApi
          .fetchCountryTimeline("US")
          .then(result => {
            this.timelineData = result;
            this.timelineChart.data.labels = this.getTimelineLabels();
            this.timelineChart.data.series = this.getTimelineSeries();
          });
      } catch (error) {
        console.log(error);
        this.apiError = true;
      } finally {
        this.loading = false;
      }
      return this.timelineData;
    },
    getTimelineLabels() {
      const data = this.timelineData.timelineitems[0];
      return this.reduceData(Object.keys(data));
    },
    getTimelineSeries() {
      const data = this.timelineData.timelineitems[0];
      return [this.pluck(data, "new_daily_cases")];
    },
    pluck(object, property) {
      const myKeys = Object.keys(object);
      const myValues = myKeys.map(key => {
        return this.timelineData.timelineitems[0][key][property];
      });
      return this.reduceData(myValues);
    },
    reduceData(data) {
      const result = data.filter(function(value, index, ar) {
        return index % 7 === 0;
      });
      return result;
    }
  }
};
</script>

<style scoped lang="scss">
.ct-chart {
  svg.ct-chart-bar,
  svg.ct-chart-line {
    overflow: visible;
    g.ct-labels {
      foreignObject {
        span.ct-label.ct-horizontal.ct-end {
          position: relative;
          justify-content: flex-end;
          text-align: right;
          transform-origin: 100% 0;
          transform: translate(-100%) rotate(-50deg);
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
