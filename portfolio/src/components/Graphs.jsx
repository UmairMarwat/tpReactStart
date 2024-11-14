
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'January',
      Spent: 4000,
      Savings: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      Spent: 3000,
      Savings: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      Spent: 2000,
      Savings: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      Spent: 2780,
      Savings: 3908,
      amt: 2000,
    },
    {
      name: 'may',
      Spent: 1890,
      Savings: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      Spent: 2390,
      Savings: 3800,
      amt: 2500,
    },
    {
      name: 'December',
      Spent: 3490,
      Savings: 4300,
      amt: 2100,
    },
  ];

export default function Graphs() {
  return (
    <ResponsiveContainer width={800} height={400}>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Savings" stackId="a" fill="red" />
      {/* <Bar dataKey="amt" stackId="a" fill="#82ca9d" /> */}
      {/* <Bar dataKey="Spent" fill="#ffc658" /> */}
    </BarChart>
  </ResponsiveContainer>
  );
}
