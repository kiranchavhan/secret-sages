import { Typography } from '@material-ui/core';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import useStyles from './style';

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

const Charts = (props) => {
	const { data, dataKey, color, label } = props;
	const classes = useStyles();

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

	return (
		<div className={classes.root}>
			{data && (
				<PieChart width={400} height={300}>
					<Pie
						data={data}
						cx={150}
						cy={120}
						innerRadius={50}
						outerRadius={90}
						fill={color}
						paddingAngle={0}
						dataKey={dataKey}
						nameKey='_id'
						label
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			)}
			<div style={{ paddingTop: '2rem' }}>
				<Typography variant='h3' style={{ marginBottom: '2rem' }}>
					{label}
				</Typography>
				{data.map((item) => (
					<li>{`${item.count} ${item._id}`}</li>
				))}
			</div>
		</div>
	);
};

export default Charts;
