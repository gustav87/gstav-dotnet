  const labels = [
    'Jun 14 2022',
    'Jun 15 2022',
    'Jun 16 2022',
    'Jun 17 2022',
    'Jun 18 2022',
    'Jun 19 2022',
    'Jun 20 2022',
    'Jun 21 2022',
    'Jun 22 2022',
    'Jun 23 2022',
    'Jun 24 2022',
    'Jun 25 2022',
    'Jun 26 2022',
    'Jun 27 2022',
    'Jun 28 2022',
    'Jun 29 2022',
    'Jun 30 2022',
    'Jul 01 2022',
    'Jul 02 2022',
    'Jul 03 2022',
    'Jul 04 2022',
    'Jul 05 2022',
    'Jul 06 2022',
    'Jul 07 2022',
    'Jul 08 2022',
    'Jul 09 2022',
    'Jul 10 2022',
    'Jul 11 2022',
    'Jul 12 2022',
    'Jul 13 2022',
    'Jul 14 2022',
    'Jul 15 2022',
    'Jul 16 2022',
    'Jul 17 2022',
    'Jul 18 2022',
    'Jul 19 2022',
    'Jul 20 2022',
    'Jul 21 2022',
    'Jul 22 2022',
    'Jul 23 2022',
    'Jul 24 2022',
    'Jul 25 2022',
    'Jul 26 2022',
    'Jul 27 2022',
    'Jul 28 2022',
    'Jul 29 2022',
    'Jul 30 2022',
    'Jul 31 2022',
    'Aug 01 2022',
    'Aug 02 2022',
    'Aug 03 2022',
    'Aug 04 2022',
    'Aug 05 2022',
    'Aug 06 2022',
    'Aug 07 2022',
    'Aug 08 2022',
    'Aug 09 2022',
    'Aug 10 2022',
    'Aug 11 2022',
    'Aug 12 2022',
    'Aug 13 2022',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
//      data: [0, 10, 5, 2, 20, 30, 45],
      data: [{x: 'Jul 01 2022', y: 0}, {x: 'Jul 02 2022', y: 10}, {x: 'Jul 03 2022', y: 5}, {x: 'Jul 04 2022', y: 2}, {x: 'Jul 05 2022', y: 20}, {x: 'Jul 06 2022', y: 30}, {x: 'Jul 07 2022', y: 45}],
      labels: [
        'Jun 21 2022',
        'Jun 22 2022',
        'Jun 23 2022',
        'Jun 24 2022',
        'Jun 25 2022',
        'Jun 26 2022',
        'Jun 27 2022'
      ],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(255, 206, 86)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 206, 86, 1)'
        ],
      borderWidth: 4
    }]
  }

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgb(255, 99, 132)'
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            console.log(context);
            return `${context.label} - ${context.formattedValue}`;
          },
          title: () => ""
        },
      },
    }
  }

  const config = {
    type: 'line',
    data: data,
    options: options
  };


  const optionsBackup = {
    legend: {
      display: true
    },
    tooltips: {
      custom: function(tooltip) {
        console.log(tooltip);
        if (!tooltip) return;
        tooltip.displayColors = false;
      },
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.xLabel} - ${tooltipItem.yLabel}`;
        },
        title: function () {
          return "asd";
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

const One_One = {
            "gameMode": 1,
            "gameDays": [
                {
                    "date": "2022-06-14T00:00:00+00:00",
                    "gamesPlayed": 3637,
                    "id": "Undefined_GM_1v1_2022-06-14",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-15T00:00:00+00:00",
                    "gamesPlayed": 3711,
                    "id": "Undefined_GM_1v1_2022-06-15",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-16T00:00:00+00:00",
                    "gamesPlayed": 4000,
                    "id": "Undefined_GM_1v1_2022-06-16",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-17T00:00:00+00:00",
                    "gamesPlayed": 3992,
                    "id": "Undefined_GM_1v1_2022-06-17",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-18T00:00:00+00:00",
                    "gamesPlayed": 4390,
                    "id": "Undefined_GM_1v1_2022-06-18",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-19T00:00:00+00:00",
                    "gamesPlayed": 4345,
                    "id": "Undefined_GM_1v1_2022-06-19",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-20T00:00:00+00:00",
                    "gamesPlayed": 3758,
                    "id": "Undefined_GM_1v1_2022-06-20",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-21T00:00:00+00:00",
                    "gamesPlayed": 3808,
                    "id": "Undefined_GM_1v1_2022-06-21",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-22T00:00:00+00:00",
                    "gamesPlayed": 3551,
                    "id": "Undefined_GM_1v1_2022-06-22",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-23T00:00:00+00:00",
                    "gamesPlayed": 3645,
                    "id": "Undefined_GM_1v1_2022-06-23",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-24T00:00:00+00:00",
                    "gamesPlayed": 3794,
                    "id": "Undefined_GM_1v1_2022-06-24",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-25T00:00:00+00:00",
                    "gamesPlayed": 4245,
                    "id": "Undefined_GM_1v1_2022-06-25",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-26T00:00:00+00:00",
                    "gamesPlayed": 4290,
                    "id": "Undefined_GM_1v1_2022-06-26",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-27T00:00:00+00:00",
                    "gamesPlayed": 3652,
                    "id": "Undefined_GM_1v1_2022-06-27",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-28T00:00:00+00:00",
                    "gamesPlayed": 3840,
                    "id": "Undefined_GM_1v1_2022-06-28",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-29T00:00:00+00:00",
                    "gamesPlayed": 3808,
                    "id": "Undefined_GM_1v1_2022-06-29",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-06-30T00:00:00+00:00",
                    "gamesPlayed": 3461,
                    "id": "Undefined_GM_1v1_2022-06-30",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-01T00:00:00+00:00",
                    "gamesPlayed": 3907,
                    "id": "Undefined_GM_1v1_2022-07-01",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-02T00:00:00+00:00",
                    "gamesPlayed": 3821,
                    "id": "Undefined_GM_1v1_2022-07-02",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-03T00:00:00+00:00",
                    "gamesPlayed": 3660,
                    "id": "Undefined_GM_1v1_2022-07-03",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-04T00:00:00+00:00",
                    "gamesPlayed": 3599,
                    "id": "Undefined_GM_1v1_2022-07-04",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-05T00:00:00+00:00",
                    "gamesPlayed": 3627,
                    "id": "Undefined_GM_1v1_2022-07-05",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-06T00:00:00+00:00",
                    "gamesPlayed": 3555,
                    "id": "Undefined_GM_1v1_2022-07-06",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-07T00:00:00+00:00",
                    "gamesPlayed": 3479,
                    "id": "Undefined_GM_1v1_2022-07-07",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-08T00:00:00+00:00",
                    "gamesPlayed": 3478,
                    "id": "Undefined_GM_1v1_2022-07-08",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-09T00:00:00+00:00",
                    "gamesPlayed": 4050,
                    "id": "Undefined_GM_1v1_2022-07-09",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-10T00:00:00+00:00",
                    "gamesPlayed": 4030,
                    "id": "Undefined_GM_1v1_2022-07-10",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-11T00:00:00+00:00",
                    "gamesPlayed": 3538,
                    "id": "Undefined_GM_1v1_2022-07-11",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-12T00:00:00+00:00",
                    "gamesPlayed": 3522,
                    "id": "Undefined_GM_1v1_2022-07-12",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-13T00:00:00+00:00",
                    "gamesPlayed": 4239,
                    "id": "Undefined_GM_1v1_2022-07-13",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-14T00:00:00+00:00",
                    "gamesPlayed": 4430,
                    "id": "Undefined_GM_1v1_2022-07-14",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-15T00:00:00+00:00",
                    "gamesPlayed": 4485,
                    "id": "Undefined_GM_1v1_2022-07-15",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-16T00:00:00+00:00",
                    "gamesPlayed": 4610,
                    "id": "Undefined_GM_1v1_2022-07-16",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-17T00:00:00+00:00",
                    "gamesPlayed": 4520,
                    "id": "Undefined_GM_1v1_2022-07-17",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-18T00:00:00+00:00",
                    "gamesPlayed": 4255,
                    "id": "Undefined_GM_1v1_2022-07-18",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-19T00:00:00+00:00",
                    "gamesPlayed": 3886,
                    "id": "Undefined_GM_1v1_2022-07-19",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-20T00:00:00+00:00",
                    "gamesPlayed": 4165,
                    "id": "Undefined_GM_1v1_2022-07-20",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-21T00:00:00+00:00",
                    "gamesPlayed": 4224,
                    "id": "Undefined_GM_1v1_2022-07-21",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-22T00:00:00+00:00",
                    "gamesPlayed": 4151,
                    "id": "Undefined_GM_1v1_2022-07-22",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-23T00:00:00+00:00",
                    "gamesPlayed": 4319,
                    "id": "Undefined_GM_1v1_2022-07-23",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-24T00:00:00+00:00",
                    "gamesPlayed": 4257,
                    "id": "Undefined_GM_1v1_2022-07-24",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-25T00:00:00+00:00",
                    "gamesPlayed": 3915,
                    "id": "Undefined_GM_1v1_2022-07-25",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-26T00:00:00+00:00",
                    "gamesPlayed": 4329,
                    "id": "Undefined_GM_1v1_2022-07-26",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-27T00:00:00+00:00",
                    "gamesPlayed": 4339,
                    "id": "Undefined_GM_1v1_2022-07-27",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-28T00:00:00+00:00",
                    "gamesPlayed": 4258,
                    "id": "Undefined_GM_1v1_2022-07-28",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-29T00:00:00+00:00",
                    "gamesPlayed": 4345,
                    "id": "Undefined_GM_1v1_2022-07-29",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-30T00:00:00+00:00",
                    "gamesPlayed": 4759,
                    "id": "Undefined_GM_1v1_2022-07-30",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-31T00:00:00+00:00",
                    "gamesPlayed": 4909,
                    "id": "Undefined_GM_1v1_2022-07-31",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-01T00:00:00+00:00",
                    "gamesPlayed": 4418,
                    "id": "Undefined_GM_1v1_2022-08-01",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-02T00:00:00+00:00",
                    "gamesPlayed": 4128,
                    "id": "Undefined_GM_1v1_2022-08-02",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-03T00:00:00+00:00",
                    "gamesPlayed": 4181,
                    "id": "Undefined_GM_1v1_2022-08-03",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-04T00:00:00+00:00",
                    "gamesPlayed": 4266,
                    "id": "Undefined_GM_1v1_2022-08-04",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-05T00:00:00+00:00",
                    "gamesPlayed": 4110,
                    "id": "Undefined_GM_1v1_2022-08-05",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-06T00:00:00+00:00",
                    "gamesPlayed": 4529,
                    "id": "Undefined_GM_1v1_2022-08-06",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-07T00:00:00+00:00",
                    "gamesPlayed": 4593,
                    "id": "Undefined_GM_1v1_2022-08-07",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-08T00:00:00+00:00",
                    "gamesPlayed": 4105,
                    "id": "Undefined_GM_1v1_2022-08-08",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-09T00:00:00+00:00",
                    "gamesPlayed": 4021,
                    "id": "Undefined_GM_1v1_2022-08-09",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-10T00:00:00+00:00",
                    "gamesPlayed": 3991,
                    "id": "Undefined_GM_1v1_2022-08-10",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-11T00:00:00+00:00",
                    "gamesPlayed": 4063,
                    "id": "Undefined_GM_1v1_2022-08-11",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-12T00:00:00+00:00",
                    "gamesPlayed": 3853,
                    "id": "Undefined_GM_1v1_2022-08-12",
                    "gameMode": 1,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-13T00:00:00+00:00",
                    "gamesPlayed": 1419,
                    "id": "Undefined_GM_1v1_2022-08-13",
                    "gameMode": 1,
                    "gateWay": 0
                }
            ]
        }

const LTD = {
            "gameMode": 205,
            "gameDays": [
                {
                    "date": "2022-07-22T00:00:00+00:00",
                    "gamesPlayed": 25,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-07-22",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-23T00:00:00+00:00",
                    "gamesPlayed": 188,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-07-23",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-24T00:00:00+00:00",
                    "gamesPlayed": 268,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-07-24",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-25T00:00:00+00:00",
                    "gamesPlayed": 226,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-07-25",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-26T00:00:00+00:00",
                    "gamesPlayed": 169,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-07-26",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-27T00:00:00+00:00",
                    "gamesPlayed": 149,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-07-27",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-28T00:00:00+00:00",
                    "gamesPlayed": 129,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-07-28",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-29T00:00:00+00:00",
                    "gamesPlayed": 133,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-07-29",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-30T00:00:00+00:00",
                    "gamesPlayed": 132,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-07-30",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-07-31T00:00:00+00:00",
                    "gamesPlayed": 202,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-07-31",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-01T00:00:00+00:00",
                    "gamesPlayed": 140,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-01",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-02T00:00:00+00:00",
                    "gamesPlayed": 131,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-02",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-03T00:00:00+00:00",
                    "gamesPlayed": 143,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-03",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-04T00:00:00+00:00",
                    "gamesPlayed": 83,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-04",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-05T00:00:00+00:00",
                    "gamesPlayed": 126,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-05",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-06T00:00:00+00:00",
                    "gamesPlayed": 103,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-06",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-07T00:00:00+00:00",
                    "gamesPlayed": 131,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-07",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-08T00:00:00+00:00",
                    "gamesPlayed": 124,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-08",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-09T00:00:00+00:00",
                    "gamesPlayed": 125,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-09",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-10T00:00:00+00:00",
                    "gamesPlayed": 104,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-10",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-11T00:00:00+00:00",
                    "gamesPlayed": 92,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-11",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-12T00:00:00+00:00",
                    "gamesPlayed": 88,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-12",
                    "gameMode": 205,
                    "gateWay": 0
                },
                {
                    "date": "2022-08-13T00:00:00+00:00",
                    "gamesPlayed": 14,
                    "id": "Undefined_GM_LEGION_2v2_x20_2022-08-13",
                    "gameMode": 205,
                    "gateWay": 0
                }
            ]
        }

 

export default config;
