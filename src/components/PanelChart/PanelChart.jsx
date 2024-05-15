import React, { useContext, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { panelChartData } from './../../data/data';
import './PanelChart.css';
import { AuthContext } from '../../Context/AuthContext';

export default function PanelChart() {
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (+userInfo.pocket.walletBalance) {
      panelChartData[2].میانگین = 2;
    } else {
      panelChartData[2].میانگین = 1;
    }
  }, [userInfo.pocket.walletBalance]);
  return (
    <div className='panel-chart'>
      <ResponsiveContainer width='100%' height={160}>
        <AreaChart
          data={panelChartData}
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
          <YAxis style={{ display: 'none' }} domain={[0, 1.5]} />
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
  );
}
