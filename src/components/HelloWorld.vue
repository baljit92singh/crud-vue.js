<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h1>Vue eCharts Demo</h1>
    <hr />
    <div class="row">
      <div class="col-md-6 chart-wrapper">
        <chart :options="chartOptionsBar"></chart>
      </div>
      <div class="col-md-6 chart-wrapper">
        <chart :options="chartOptionsLine"></chart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    chartOptionsBar: {
      xAxis: {
        data: ["Q1", "Q2", "Q3", "Q4"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          type: "bar",
          data: [63, 75, 24, 92]
        }
      ],
      title: {
        text: "Quarterly Sales Results",
        x: "center",
        textStyle: {
          fontSize: 24
        }
      },
      color: ["#127ac2"]
    },
    // chartOptionsLine: {
    //   xAxis: {
    //     data: ["Q1", "Q2", "Q3", "Q4"]
    //   },
    //   yAxis: {
    //     type: "value"
    //   },
    //   series: [
    //     {
    //       type: "line",
    //       data: [63, 75, 24, 92]
    //     }
    //   ],
    //   title: {
    //     text: "Quarterly Sales Results",
    //     x: "center",
    //     textStyle: {
    //       fontSize: 24
    //     }
    //   },
    //   color: ["#127ac2"]
    // }
    chartOptionsLine: {
      xAxis: {
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          type: "line",
          data: [55, 72, 84, 48, 59, 62, 87, 75, 94, 101, 127, 118]
        }
      ],
      title: {
        text: "Monthly Stock Prices",
        x: "center",
        textStyle: {
          fontSize: 24
        }
      },
      color: ["#127ac2"]
    }
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* .chart-wrapper {
  width: 100%;
  height: 700px;
} */
/* .echarts {
  width: 100%;
  height: 100%;
} */
</style>
