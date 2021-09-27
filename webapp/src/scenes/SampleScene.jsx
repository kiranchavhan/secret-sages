import React, { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";

import {
  Modal,
  TextField,
  Select,
  Loader,
  Snackbar,
  ToggleSwitch,
  FormError,
  Tab,
  TabPanel,
  Avatar,
  Button,
} from "@components";

const selectData = [
  { label: "Ten", value: 10 },
  { label: "Twenty", value: 20 },
  { label: "Thirty", value: 30 },
];

const tabs = [
  { key: "1", label: "Item one" },
  { key: "2", label: "Item two" },
  { key: "3", label: "Item three" },
];

const SampleScene = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      Sample Scence
      <Modal open={false}>
        <p>Modal</p>
      </Modal>
      <Grid container direction="column" xs={4}>
        <TextField
          size="small"
          startAdornmentIcon={faUser}
          label="Enter Username"
        />
        <TextField error label="Enter Username" />
        <Select label="Age" data={selectData} />
        <Loader />
        <Snackbar message="I am snackbar" />
        <ToggleSwitch />
        <FormError>Error Message</FormError>
        <Tab onChange={handleChange} value={value} tabs={tabs} />
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <Avatar name="Srijan Singh" />
        <Button>Click</Button>
      </Grid>
    </>
  );
};

export default SampleScene;
