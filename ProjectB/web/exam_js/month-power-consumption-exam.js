function month_power_consumption(containerId) {
    let dataAxis = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日',
        '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日',
        '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日'];

    let data = [521459, 500500, 550800, 500934, 500290, 500330, 550320, 520820, 550932, 490901,
        521459, 500500, 550800, 500934, 500290, 500330, 550320, 520820, 550932, 520901, 521459,
        500500, 550800, 500934, 500290, 500330, 550320, 520820, 550932, 490901];

    let option = {
        // 提示框：背景色为#010101，文字为白色，
        // 微软雅黑15号字体。
        tooltip: {
            show: true,
            trigger: 'axis',
            backgroundColor: '#010101',
            borderColor: '#010101',
            textStyle: {
                color: 'white',
                fontFamily: '微软雅黑',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 'normal'
            }
        },

        // 使用grid，使面积图显示饱满。
        grid: {
            top: '5%',
            left: '15px',
            right: '15px',
            bottom: '3%',
            containLabel: false
        },

        // X轴仅仅显示轴线，Y轴仅仅显示分割线。
        xAxis: {
            type: 'category',
            boundaryGap: false,
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
            type: 'value',
            show: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: true,
                internal: 'auto',
                lineStyle: {
                    color: '#384355',
                    width: 1,
                    type: 'solid'
                }

            }
        },

        // 显示面积图，每日耗电量折线上的点不用任何符号显示。
        series: [
            {
                data: data,
                type: 'line',
                symbol: 'none',
                lineStyle: {
                    color: '#D4237A'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 1, color: '#14132B'},
                        {offset: 0, color: '#5F0F4B'}
                    ])
                }
            }
        ]
    };


    var myChart = echarts.init(document.getElementById(containerId));
    myChart.setOption(option, true);
    return myChart
}

export { month_power_consumption }