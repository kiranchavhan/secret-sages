import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem",
    borderBottom: "0.1rem solid #d6d6d6",
  },
  table: {
    maxHeight: "60vh",
    marginTop: "1rem",
    padding: "1.5rem",
    overflowY: "scroll",
  },
  modal: {
    minHeight: "40rem",
  },
  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 0",
  },
  tabList: {
    padding: "2rem",
  },
}));

export default useStyles;
