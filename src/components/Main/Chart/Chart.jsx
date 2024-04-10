import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import dataGold from './../../../data/data';

import './Chart.css';

export default function Chart() {
  return (
    <div className='sec-chart container'>
      <div className='sec-chart-wrap'>
        <div className='chart-wrap'>
          <h2>نمودار نوسانات قیمت هر گرم طلای ۱۸ عیار</h2>
          <ResponsiveContainer width='100%' height={400}>
            <AreaChart
              data={dataGold}
              id='my-chart'
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#f1ab1fba' stopOpacity={0.7} />
                  <stop offset='95%' stopColor='' stopOpacity={0} />
                </linearGradient>
                <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
                  <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey='ماه' />
              <YAxis domain={[3, 4]} />
              <Area
                type='linear'
                dataKey='میانگین'
                stroke='#f1ab1f'
                strokeWidth={3}
                fillOpacity={1}
                fill='url(#colorUv)'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
