InitChart();

function InitChart() {

  var barData = [
  {
    "x": "12:00 AM",
    "y": 13.5
  },
  {
    "x": "12:05 AM",
    "y": 13.45
  },
  {
    "x": "12:10 AM",
    "y": 13.5
  },
  {
    "x": "12:15 AM",
    "y": 13.5
  },
  {
    "x": "12:20 AM",
    "y": 13.5
  },
  {
    "x": "12:25 AM",
    "y": 13.5
  },
  {
    "x": "12:30 AM",
    "y": 13.4
  },
  {
    "x": "12:35 AM",
    "y": 13.3
  },
  {
    "x": "12:40 AM",
    "y": 13.3
  },
  {
    "x": "12:45 AM",
    "y": 13.3
  },
  {
    "x": "12:50 AM",
    "y": 13.2
  },
  {
    "x": "12:55 AM",
    "y": 13.4
  },
  {
    "x": "1:00 AM",
    "y": 13.6
  },
  {
    "x": "1:05 AM",
    "y": 13.8
  },
  {
    "x": "1:10 AM",
    "y": 13.9
  },
  {
    "x": "1:15 AM",
    "y": 14
  },
  {
    "x": "1:20 AM",
    "y": 14.3
  },
  {
    "x": "1:25 AM",
    "y": 14.85
  },
  {
    "x": "1:30 AM",
    "y": 15.05
  },
  {
    "x": "1:35 AM",
    "y": 15.15
  },
  {
    "x": "1:40 AM",
    "y": 15.2
  },
  {
    "x": "1:45 AM",
    "y": 15.25
  },
  {
    "x": "1:50 AM",
    "y": 15.35
  },
  {
    "x": "1:55 AM",
    "y": 15.35
  },
  {
    "x": "2:00 AM",
    "y": 15.3
  },
  {
    "x": "2:05 AM",
    "y": 15.4
  },
  {
    "x": "2:10 AM",
    "y": 15.4
  },
  {
    "x": "2:15 AM",
    "y": 15.5
  },
  {
    "x": "2:20 AM",
    "y": 15.45
  },
  {
    "x": "2:25 AM",
    "y": 15.4
  },
  {
    "x": "2:30 AM",
    "y": 15.45
  },
  {
    "x": "2:35 AM",
    "y": 15.55
  },
  {
    "x": "2:40 AM",
    "y": 15.6
  },
  {
    "x": "2:45 AM",
    "y": 15.7
  },
  {
    "x": "2:50 AM",
    "y": 15.8
  },
  {
    "x": "2:55 AM",
    "y": 15.9
  },
  {
    "x": "3:00 AM",
    "y": 16
  },
  {
    "x": "3:05 AM",
    "y": 16.1
  },
  {
    "x": "3:10 AM",
    "y": 16.05
  },
  {
    "x": "3:15 AM",
    "y": 16.1
  },
  {
    "x": "3:20 AM",
    "y": 16.3
  },
  {
    "x": "3:25 AM",
    "y": 16.45
  },
  {
    "x": "3:30 AM",
    "y": 16.5
  },
  {
    "x": "3:35 AM",
    "y": 16.6
  },
  {
    "x": "3:40 AM",
    "y": 16.6
  },
  {
    "x": "3:45 AM",
    "y": 16.8
  },
  {
    "x": "3:50 AM",
    "y": 16.94
  },
  {
    "x": "3:55 AM",
    "y": 17
  },
  {
    "x": "4:00 AM",
    "y": 17.06
  },
  {
    "x": "4:05 AM",
    "y": 17.14
  },
  {
    "x": "4:10 AM",
    "y": 17.3
  },
  {
    "x": "4:15 AM",
    "y": 17.4
  },
  {
    "x": "4:20 AM",
    "y": 17.46
  },
  {
    "x": "4:25 AM",
    "y": 17.44
  },
  {
    "x": "4:30 AM",
    "y": 17.7
  },
  {
    "x": "4:35 AM",
    "y": 17.8
  },
  {
    "x": "4:40 AM",
    "y": 17.9
  },
  {
    "x": "4:45 AM",
    "y": 18
  },
  {
    "x": "4:50 AM",
    "y": 18.1
  },
  {
    "x": "4:55 AM",
    "y": 18
  },
  {
    "x": "5:00 AM",
    "y": 18
  },
  {
    "x": "5:05 AM",
    "y": 18.1
  },
  {
    "x": "5:10 AM",
    "y": 18.06
  },
  {
    "x": "5:15 AM",
    "y": 18.1
  },
  {
    "x": "5:20 AM",
    "y": 18.1
  },
  {
    "x": "5:25 AM",
    "y": 18.2
  },
  {
    "x": "5:30 AM",
    "y": 18.24
  },
  {
    "x": "5:35 AM",
    "y": 18.2
  },
  {
    "x": "5:40 AM",
    "y": 18.3
  },
  {
    "x": "5:45 AM",
    "y": 18.3
  },
  {
    "x": "5:50 AM",
    "y": 18.3
  },
  {
    "x": "5:55 AM",
    "y": 18.3
  },
  {
    "x": "6:00 AM",
    "y": 18.4
  },
  {
    "x": "6:05 AM",
    "y": 18.4
  },
  {
    "x": "6:10 AM",
    "y": 18.4
  },
  {
    "x": "6:15 AM",
    "y": 18.36
  },
  {
    "x": "6:20 AM",
    "y": 18.4
  },
  {
    "x": "6:25 AM",
    "y": 18.3
  },
  {
    "x": "6:30 AM",
    "y": 18.3
  },
  {
    "x": "6:35 AM",
    "y": 18.4
  },
  {
    "x": "6:40 AM",
    "y": 18.4
  },
  {
    "x": "6:45 AM",
    "y": 18.4
  },
  {
    "x": "6:50 AM",
    "y": 18.4
  },
  {
    "x": "6:55 AM",
    "y": 18.5
  },
  {
    "x": "7:00 AM",
    "y": 18.6
  },
  {
    "x": "7:05 AM",
    "y": 18.6
  },
  {
    "x": "7:10 AM",
    "y": 18.5
  },
  {
    "x": "7:15 AM",
    "y": 18.53
  },
  {
    "x": "7:20 AM",
    "y": 18.7
  },
  {
    "x": "7:25 AM",
    "y": 18.6
  },
  {
    "x": "7:30 AM",
    "y": 18.5
  },
  {
    "x": "7:35 AM",
    "y": 18.5
  },
  {
    "x": "7:40 AM",
    "y": 18.6
  },
  {
    "x": "7:45 AM",
    "y": 18.6
  },
  {
    "x": "7:50 AM",
    "y": 18.5
  },
  {
    "x": "7:55 AM",
    "y": 18.53
  },
  {
    "x": "8:00 AM",
    "y": 18.7
  },
  {
    "x": "8:05 AM",
    "y": 18.47
  },
  {
    "x": "8:10 AM",
    "y": 18.2
  },
  {
    "x": "8:15 AM",
    "y": 18
  },
  {
    "x": "8:20 AM",
    "y": 17.9
  },
  {
    "x": "8:25 AM",
    "y": 17.93
  },
  {
    "x": "8:30 AM",
    "y": 18.13
  },
  {
    "x": "8:35 AM",
    "y": 18.4
  },
  {
    "x": "8:40 AM",
    "y": 18.53
  },
  {
    "x": "8:45 AM",
    "y": 18.63
  },
  {
    "x": "8:50 AM",
    "y": 19.03
  },
  {
    "x": "8:55 AM",
    "y": 19.5
  },
  {
    "x": "9:00 AM",
    "y": 19.5
  },
  {
    "x": "9:05 AM",
    "y": 19.53
  },
  {
    "x": "9:10 AM",
    "y": 19.7
  },
  {
    "x": "9:15 AM",
    "y": 19.8
  },
  {
    "x": "9:20 AM",
    "y": 19.8
  },
  {
    "x": "9:25 AM",
    "y": 19.8
  },
  {
    "x": "9:30 AM",
    "y": 19.83
  },
  {
    "x": "9:35 AM",
    "y": 20
  },
  {
    "x": "9:40 AM",
    "y": 20.1
  },
  {
    "x": "9:45 AM",
    "y": 20.07
  },
  {
    "x": "9:50 AM",
    "y": 19.87
  },
  {
    "x": "9:55 AM",
    "y": 19.57
  },
  {
    "x": "10:00 AM",
    "y": 19.2
  },
  {
    "x": "10:05 AM",
    "y": 19.33
  },
  {
    "x": "10:10 AM",
    "y": 19.6
  },
  {
    "x": "10:15 AM",
    "y": 19.7
  },
  {
    "x": "10:20 AM",
    "y": 19.73
  },
  {
    "x": "10:25 AM",
    "y": 20
  },
  {
    "x": "10:30 AM",
    "y": 20
  },
  {
    "x": "10:35 AM",
    "y": 20.43
  },
  {
    "x": "10:40 AM",
    "y": 20.7
  },
  {
    "x": "10:45 AM",
    "y": 20.83
  },
  {
    "x": "10:50 AM",
    "y": 21.12
  },
  {
    "x": "10:55 AM",
    "y": 21.4
  },
  {
    "x": "11:00 AM",
    "y": 21.95
  },
  {
    "x": "11:05 AM",
    "y": 22.62
  },
  {
    "x": "11:10 AM",
    "y": 22.82
  },
  {
    "x": "11:15 AM",
    "y": 23.25
  },
  {
    "x": "11:20 AM",
    "y": 23.5
  },
  {
    "x": "11:25 AM",
    "y": 22.88
  },
  {
    "x": "11:30 AM",
    "y": 22.38
  },
  {
    "x": "11:35 AM",
    "y": 22.1
  },
  {
    "x": "11:40 AM",
    "y": 21.98
  },
  {
    "x": "11:45 AM",
    "y": 21.8
  },
  {
    "x": "11:50 AM",
    "y": 21.7
  },
  {
    "x": "11:55 AM",
    "y": 21.5
  },
  {
    "x": "12:00 PM",
    "y": 21.5
  },
  {
    "x": "12:05 PM",
    "y": 21.52
  },
  {
    "x": "12:10 PM",
    "y": 21.92
  },
  {
    "x": "12:15 PM",
    "y": 22.52
  },
  {
    "x": "12:20 PM",
    "y": 22.82
  },
  {
    "x": "12:25 PM",
    "y": 23.32
  },
  {
    "x": "12:30 PM",
    "y": 23.84
  },
  {
    "x": "12:35 PM",
    "y": 24.6
  },
  {
    "x": "12:40 PM",
    "y": 24.6
  },
  {
    "x": "12:45 PM",
    "y": 24.4
  },
  {
    "x": "12:50 PM",
    "y": 24.82
  },
  {
    "x": "12:55 PM",
    "y": 25.08
  },
  {
    "x": "1:00 PM",
    "y": 25
  },
  {
    "x": "1:05 PM",
    "y": 25.2
  },
  {
    "x": "1:10 PM",
    "y": 25.3
  },
  {
    "x": "1:15 PM",
    "y": 25.1
  },
  {
    "x": "1:20 PM",
    "y": 25
  },
  {
    "x": "1:25 PM",
    "y": 24.78
  },
  {
    "x": "1:30 PM",
    "y": 24.92
  },
  {
    "x": "1:35 PM",
    "y": 25.22
  },
  {
    "x": "1:40 PM",
    "y": 25.2
  },
  {
    "x": "1:45 PM",
    "y": 24.88
  },
  {
    "x": "1:50 PM",
    "y": 24.48
  },
  {
    "x": "1:55 PM",
    "y": 23.98
  },
  {
    "x": "2:00 PM",
    "y": 23.72
  },
  {
    "x": "2:05 PM",
    "y": 24.32
  },
  {
    "x": "2:10 PM",
    "y": 25.02
  },
  {
    "x": "2:15 PM",
    "y": 25.32
  },
  {
    "x": "2:20 PM",
    "y": 25.81
  },
  {
    "x": "2:25 PM",
    "y": 25.8
  },
  {
    "x": "2:30 PM",
    "y": 25.59
  },
  {
    "x": "2:35 PM",
    "y": 25.3
  },
  {
    "x": "2:40 PM",
    "y": 24.99
  },
  {
    "x": "2:45 PM",
    "y": 24.9
  },
  {
    "x": "2:50 PM",
    "y": 25
  },
  {
    "x": "2:55 PM",
    "y": 24.8
  },
  {
    "x": "3:00 PM",
    "y": 24.7
  },
  {
    "x": "3:05 PM",
    "y": 24.5
  },
  {
    "x": "3:10 PM",
    "y": 24.4
  },
  {
    "x": "3:15 PM",
    "y": 24.3
  },
  {
    "x": "3:20 PM",
    "y": 24.31
  },
  {
    "x": "3:25 PM",
    "y": 24.41
  },
  {
    "x": "3:30 PM",
    "y": 24.5
  },
  {
    "x": "3:35 PM",
    "y": 24.6
  },
  {
    "x": "3:40 PM",
    "y": 24.5
  },
  {
    "x": "3:45 PM",
    "y": 24.4
  },
  {
    "x": "3:50 PM",
    "y": 24.2
  },
  {
    "x": "3:55 PM",
    "y": 24.1
  },
  {
    "x": "4:00 PM",
    "y": 23.9
  },
  {
    "x": "4:05 PM",
    "y": 23.8
  },
  {
    "x": "4:10 PM",
    "y": 23.49
  },
  {
    "x": "4:15 PM",
    "y": 23.09
  },
  {
    "x": "4:20 PM",
    "y": 22.69
  },
  {
    "x": "4:25 PM",
    "y": 22.4
  },
  {
    "x": "4:30 PM",
    "y": 22.5
  },
  {
    "x": "4:35 PM",
    "y": 22.5
  },
  {
    "x": "4:40 PM",
    "y": 22.5
  },
  {
    "x": "4:45 PM",
    "y": 22.5
  },
  {
    "x": "4:50 PM",
    "y": 22.4
  },
  {
    "x": "4:55 PM",
    "y": 22.3
  },
  {
    "x": "5:00 PM",
    "y": 22.2
  },
  {
    "x": "5:05 PM",
    "y": 22.2
  },
  {
    "x": "5:10 PM",
    "y": 22.19
  },
  {
    "x": "5:15 PM",
    "y": 22.1
  },
  {
    "x": "5:20 PM",
    "y": 22
  },
  {
    "x": "5:25 PM",
    "y": 21.89
  },
  {
    "x": "5:30 PM",
    "y": 21.7
  },
  {
    "x": "5:35 PM",
    "y": 21.7
  },
  {
    "x": "5:40 PM",
    "y": 21.7
  },
  {
    "x": "5:45 PM",
    "y": 21.61
  },
  {
    "x": "5:50 PM",
    "y": 21.59
  },
  {
    "x": "5:55 PM",
    "y": 21.5
  },
  {
    "x": "6:00 PM",
    "y": 21.4
  },
  {
    "x": "6:05 PM",
    "y": 21.2
  },
  {
    "x": "6:10 PM",
    "y": 21.1
  },
  {
    "x": "6:15 PM",
    "y": 21
  },
  {
    "x": "6:20 PM",
    "y": 20.9
  },
  {
    "x": "6:25 PM",
    "y": 20.6
  },
  {
    "x": "6:30 PM",
    "y": 20.4
  },
  {
    "x": "6:35 PM",
    "y": 20.2
  },
  {
    "x": "6:40 PM",
    "y": 20
  },
  {
    "x": "6:45 PM",
    "y": 19.7
  },
  {
    "x": "6:50 PM",
    "y": 19.4
  },
  {
    "x": "6:55 PM",
    "y": 19.2
  },
  {
    "x": "7:00 PM",
    "y": 18.9
  },
  {
    "x": "7:05 PM",
    "y": 18.8
  },
  {
    "x": "7:10 PM",
    "y": 18.7
  },
  {
    "x": "7:15 PM",
    "y": 18.5
  },
  {
    "x": "7:20 PM",
    "y": 18.3
  },
  {
    "x": "7:25 PM",
    "y": 18.1
  },
  {
    "x": "7:30 PM",
    "y": 17.9
  },
  {
    "x": "7:35 PM",
    "y": 17.7
  },
  {
    "x": "7:40 PM",
    "y": 17.6
  },
  {
    "x": "7:45 PM",
    "y": 17.4
  },
  {
    "x": "7:50 PM",
    "y": 17.3
  },
  {
    "x": "7:55 PM",
    "y": 17.2
  },
  {
    "x": "8:00 PM",
    "y": 17.1
  },
  {
    "x": "8:05 PM",
    "y": 16.9
  },
  {
    "x": "8:10 PM",
    "y": 16.8
  },
  {
    "x": "8:15 PM",
    "y": 16.6
  },
  {
    "x": "8:20 PM",
    "y": 16.5
  },
  {
    "x": "8:25 PM",
    "y": 16.4
  },
  {
    "x": "8:30 PM",
    "y": 16.3
  },
  {
    "x": "8:35 PM",
    "y": 16.2
  },
  {
    "x": "8:40 PM",
    "y": 16.1
  },
  {
    "x": "8:45 PM",
    "y": 16
  },
  {
    "x": "8:50 PM",
    "y": 15.9
  },
  {
    "x": "8:55 PM",
    "y": 15.7
  },
  {
    "x": "9:00 PM",
    "y": 15.6
  },
  {
    "x": "9:05 PM",
    "y": 15.4
  },
  {
    "x": "9:10 PM",
    "y": 15.2
  },
  {
    "x": "9:15 PM",
    "y": 15
  },
  {
    "x": "9:20 PM",
    "y": 14.8
  },
  {
    "x": "9:25 PM",
    "y": 14.6
  },
  {
    "x": "9:30 PM",
    "y": 14.5
  },
  {
    "x": "9:35 PM",
    "y": 14.4
  },
  {
    "x": "9:40 PM",
    "y": 14.3
  },
  {
    "x": "9:45 PM",
    "y": 14.2
  },
  {
    "x": "9:50 PM",
    "y": 14.1
  },
  {
    "x": "9:55 PM",
    "y": 13.91
  },
  {
    "x": "10:00 PM",
    "y": 13.9
  },
  {
    "x": "10:05 PM",
    "y": 13.71
  },
  {
    "x": "10:10 PM",
    "y": 13.6
  },
  {
    "x": "10:15 PM",
    "y": 13.5
  },
  {
    "x": "10:20 PM",
    "y": 13.4
  },
  {
    "x": "10:25 PM",
    "y": 13.3
  },
  {
    "x": "10:30 PM",
    "y": 13.2
  },
  {
    "x": "10:35 PM",
    "y": 13.2
  },
  {
    "x": "10:40 PM",
    "y": 13.1
  },
  {
    "x": "10:45 PM",
    "y": 13
  },
  {
    "x": "10:50 PM",
    "y": 13
  },
  {
    "x": "10:55 PM",
    "y": 13.1
  },
  {
    "x": "11:00 PM",
    "y": 13.1
  },
  {
    "x": "11:05 PM",
    "y": 13.1
  },
  {
    "x": "11:10 PM",
    "y": 13.1
  },
  {
    "x": "11:15 PM",
    "y": 13.2
  },
  {
    "x": "11:20 PM",
    "y": 13.1
  },
  {
    "x": "11:25 PM",
    "y": 13.01
  },
  {
    "x": "11:30 PM",
    "y": 12.91
  },
  {
    "x": "11:35 PM",
    "y": 12.81
  },
  {
    "x": "11:40 PM",
    "y": 12.71
  },
  {
    "x": "11:45 PM",
    "y": 12.6
  },
  {
    "x": "11:50 PM",
    "y": 12.6
  },
  {
    "x": "11:55 PM",
    "y": 12.7
  }
];


  var time = "";

  var vis = d3.select('#visualisation'),
    WIDTH = 10000,
    HEIGHT = 400,
    MARGINS = {
      top: 10,
      right: 0,
      bottom: 0,
      left: 50
    },

    X = d3.time.scale().range([130, WIDTH - 140]),

    xRange = d3.scale.ordinal().rangeRoundBands([-16, WIDTH], 0.2).domain(barData.map(function (d) {
      return d.x;
    })),


    yRange = d3.scale.linear().range([HEIGHT, 200]).domain([0,
      d3.max(barData, function (d) {
        return d.y;
      })
    ]),

    xAxis = d3.svg.axis()
      .orient("bottom")
      .tickSubdivide(true)
      .scale(xRange)
      .tickSize(5),

    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient("left")
      .tickSubdivide(true),

    tooltip = d3.select("body")
      .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .text("March 22, 2016");


  vis.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    .call(xAxis)
     .selectAll("text")  
     .style("text-anchor", "end")
     .attr("dx", "-.8em")
     .attr("dy", ".15em")
     .attr("transform", "rotate(-65)");


  vis.append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 10)
      .attr('x', -100)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Temperature (C)');

  vis.append("text")
    .text("Bar Chart")
    .attr("class","title");

  vis.selectAll('rect')
    .data(barData)
    .enter()
    .append('rect')
    .attr('x', function (d) {
      return xRange(d.x);
    })
    .attr('y', function (d) {
      return yRange(d.y);
    })
    .attr('width', xRange.rangeBand())
    .attr('height', function (d) {
      return ((HEIGHT - MARGINS.bottom) - yRange(d.y));
    })
    .attr('fill', 'grey')
    .on('mouseover',function(d){
      d3.select(this)
        .attr('fill','green')
          .append("title")
            .text(function(d) {
            return "This value is " + d.y;
          })
    })

    .on('mouseout',function(d){
      d3.select(this)
        .attr('fill','grey')
    });



}