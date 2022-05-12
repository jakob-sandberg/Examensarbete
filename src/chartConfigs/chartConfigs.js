export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },

  animation: {
    duration: 2000,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    yAxes: [{
      ticks:{
        fontColor : "white",
        fontSize : 12
      },
      gridLines:{
        color: "#979797",
      }
    }],
    xAxes: [
      {
        type: "time",
        distribution: "linear",
        ticks:{
          fontColor : "white",
          fontSize : 12
        },
        gridLines:{
          color: "#979797",
          lineWidth:1,
        }
      },
      
    ],
  },
};
