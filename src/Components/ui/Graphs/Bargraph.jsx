import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const dataWeek = [
  { name: "Day 1", uv: 12 },
  { name: "Day 2", uv: 19 },
  { name: "Day 3", uv: 3 },
  { name: "Day 4", uv: 5 },
  { name: "Day 5", uv: 8 },
  { name: "Day 6", uv: 15 },
  { name: "Day 7", uv: 10 },
];

export const dataMonth = [
  { name: "Week 1", uv: 45 },
  { name: "Week 2", uv: 75 },
  { name: "Week 3", uv: 60 },
  { name: "Week 4", uv: 55 },
  { name: "Week 5", uv: 65 },
  { name: "Week 6", uv: 70 },
  { name: "Week 7", uv: 80 },
];

export const dataYear = [
  { name: "Jan", uv: 200 },
  { name: "Feb", uv: 300 },
  { name: "Mar", uv: 250 },
  { name: "Apr", uv: 400 },
  { name: "May", uv: 350 },
  { name: "Jun", uv: 450 },
  { name: "Jul", uv: 500 },
];

const Bargraph = ({ data }) => {
  return (
    <div className="mr-13" style={{ width: '111%', height: '100%' }}> {/* Ensure container is responsive */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          barCategoryGap="10%"
        >
          <XAxis
            dataKey="name"
            tick={false}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis tick={false} padding={{ top: 20, bottom: 20 }} />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="uv" fill="#12153D" radius={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
      {/* <div className="mt-4 flex flex-col ">
            <button onClick={() => setData(dataWeek)} className="px-4 py-2 bg-orange-500 text-white rounded mr-2">Last Week</button>
            <button onClick={() => setData(dataMonth)} className="px-4 py-2 bg-orange-500 text-white rounded mr-2">Last Month</button>
            <button onClick={() => setData(dataYear)} className="px-4 py-2 bg-orange-500 text-white rounded">Last Year</button>
          </div> */}
    </div>
  );
};
export default Bargraph;