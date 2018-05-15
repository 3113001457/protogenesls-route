var myChart = echarts.init(document.getElementById('main'));

var colors = ['#617687'];
option = {
tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ''
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: 
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return params.value+" "+'浏览量' 
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '')+'  '+
                            
                                '点击量' 
                            + (params.seriesData.length ? '：' + params.seriesData[1].data : '')+'  '
                    }
                }
            },
            data: ["6:00","9:00","12:00","14:00","16:00","18:00","20:00","22:00","00:00","3:00"]
        },
    yAxis: [
        {
            type: 'value'
        }
    ],
    series:[
    //浏览量
        {
            name:'',
            type:'line',
            smooth: false,
            data: [0,1,2,3,5,8,7,9,8,10],
            itemStyle: {
                normal: {
                    color: "#ff4c79",  // 会设置点和线的颜色，所以需要下面定制 line
                    borderColor: "#ff4c79", // 点边线的颜色
                }   
            },

        },
        //点击量
        {
            name:'',
            type:'line',
            smooth: false,
            data: [10,2,3,5,8,7,1,0,8,30],
            itemStyle: {
                normal: {
                    color: "#2cc0e8",  // 会设置点和线的颜色，所以需要下面定制 line
                    borderColor: "#2cc0e8",// 点边线的颜色
                    fontWeight:20
                }
            }
        }
    ]
};
  //参数设置方法     
     myChart.setOption(option); 
     
         window.onresize = function () {
        myChart.resize(); //使第一个图表适应
    }