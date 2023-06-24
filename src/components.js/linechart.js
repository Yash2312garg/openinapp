import React from "react";
import { ResponsiveLine } from '@nivo/line'
const data=[
  {
    "id": "user",
    "color": "hsl(142, 70%, 50%)",
    "data": [
      {
        "x": "week1",
        "y": 297
      },
      {
        "x": "week2",
        "y": 213
      },
      {
        "x": "week3",
        "y": 180
      },
      {
        "x": "week4",
        "y": 400
      }
    ]
  },
  {
    "id": "guest",
    "color": "hsl(185, 70%, 50%)",
    "data": [
      {
        "x": "week1",
        "y": 113
      },
      {
        "x": "week2",
        "y": 300
      },
      {
        "x": "week3",
        "y": 200
      },
      {
        "x": "week4",
        "y": 250
      }
    ]
  }
]

const LineChart = () => {
 
  return (
 
       <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 100,
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  );
};

export default LineChart;
