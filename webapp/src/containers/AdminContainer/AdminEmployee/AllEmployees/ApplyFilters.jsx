import { Box, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { Select, Button } from "@components";
import axios from "axios";

const ApplyFilters = (props) => {
  const { setFilterData, filterData, onClick } = props;
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [dept, setDept] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/api/fetchUniquestates")
      .then((result) =>
        result.data.result.map((res) =>
          setState((prev) => [...prev, { label: res, value: res }])
        )
      );
    axios
      .get("http://localhost:8001/api/fetchUniqueCity")
      .then((result) =>
        result.data.result.map((res) =>
          setCity((prev) => [...prev, { label: res, value: res }])
        )
      );
    axios
      .get("http://localhost:8001/api/fetchUniqueDepartment")
      .then((result) =>
        result.data.result.map((res) =>
          setDept((prev) => [...prev, { label: res, value: res }])
        )
      );
  }, []);

  return (
    <Box mt={3} px={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Select
            size="small"
            fullWidth
            data={state}
            label="Select State"
            onChange={(e) =>
              setFilterData({ ...filterData, state: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select
            size="small"
            fullWidth
            data={city}
            label="Select City"
            onChange={(e) =>
              setFilterData({ ...filterData, city: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select
            size="small"
            fullWidth
            data={dept}
            label="Select Department"
            onChange={(e) =>
              setFilterData({ ...filterData, dept: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button fullWidth type="button" onClick={onClick}>
            Apply Filter
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApplyFilters;
