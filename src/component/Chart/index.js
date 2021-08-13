import React from 'react'

import { Line } from 'react-chartjs-2'

const Chart = () => {

    const data = {
        labels: ['1','3','5','7','9','11','13','15','17','19','21','23','25','27','29','31'],
        datasets: [
          {
            label: 'Numero de Vendas',
            data: [3,5,4,2,4,5,3,5,4,5,2,3,2,3,4,3],
            borderWidth: 3,
            borderColor: '#C94A21',
            backgroundColor: 'transparent',
          },
          {
            label: 'valor de Vendas',
            data: [3,4,3,2,4,3,2,5,2,3,1.5,2,3,4,2,4],
            borderWidth: 3,
            borderColor: '#2980B9',
            backgroundColor: 'transparent'
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return(
        <div style={{padding: '10px 10px'}}>
            <Line
                data={data}
                options={options}
                style={{width: '100%'}}
            />
        </div>
    )
}

export default Chart