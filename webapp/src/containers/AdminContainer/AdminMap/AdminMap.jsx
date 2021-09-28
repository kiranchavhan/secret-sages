import { Grid, Paper } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Charts from "../../../components/Charts";

import useStyles from "./style";

const AdminMap = () => {
  const classes = useStyles();
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/getfavdep")
      .then((result) => setLocation(result.data.result));
  });
  return (
    <Paper elevation={1} className={classes.paper}>
      <Grid container spacing={3} wrap="wrap">
        <Grid item xs={12} sm={6}>
          <Charts dataKey="count" data={location} />
        </Grid>
        <Grid item xs={12} sm={6}>.
          <Charts dataKey="count" data={location} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Charts dataKey="count" data={location} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Charts dataKey="count" data={location} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AdminMap;
