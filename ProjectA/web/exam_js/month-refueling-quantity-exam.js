function month_refueling_quantity(containerId) {
    let dataAxis = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日',
        '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日',
        '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日'];

    let data = [340486,351486,362486,373486,312000,320000,334486,343486,351486,363486,
        340486,351486,362486,373486,312000,320000,334486,343486,351486,363486,
        340486,351486,362486,373486,312000,320000,334486,343486,351486,363486];

    let option = {
        // 提示框：背景色为黑色（‘black‘），文字为白色，微软雅黑15号字体。
        tooltip: {
            show: true,
            trigger: 'axis',
            backgroundColor: 'black',
            borderColor: 'black',
            textStyle: {
                color: 'white',
                fontFamily: '微软雅黑',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 'normal'
            }
        },

        // 使用grid，使柱状图显示饱满。
        grid: {
            top: '5%',
            left: '15px',
            right: '15px',
            bottom: '3%',
            containLabel: false
        },

        // Y轴不显示，X轴仅仅显示轴线。
        xAxis: {
            data: dataAxis,
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            }
        },
        yAxis: {
            show: false
        },

        // 定义series组件，显示柱状图，每日加油量用一根柱子展示。
        series: [
            {
                type: 'bar',
                showBackground: true,
                itemStyle: {
                    backgroundColor: '#2B313E',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 1, color: '#7315DB' },
                        { offset: 0, color: '#3585CF' }
                    ])
                },
                emphalsis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#2378f7' },
                            { offset: 0.7, color: '#2378f7' },
                            { offset: 1, color: '#83bff6' }
                        ])
                    }
                },
                data: data
            }
        ]
    };

    // ECharts实例初始化
    var myChart = echarts.init(document.getElementById(containerId));
    myChart.setOption(option,true);
    return myChart;
}

export { month_refueling_quantity }