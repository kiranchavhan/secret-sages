import { Typography } from "@material-ui/core";
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import useStyles from "./style";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];
const COLORS = "#8884d";

const Charts = (props) => {
  const { data, dataKey } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={50}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={0}
          dataKey={dataKey}
          nameKey="_id"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`${COLORS}${index}`} />
          ))}
        </Pie>
      </PieChart>
      <div>
        <Typography>State Employees</Typography>
      </div>
    </div>
  );
};

export default Charts;
