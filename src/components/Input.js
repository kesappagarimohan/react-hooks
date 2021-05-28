import { makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useDetails } from "./Chat";
const useStyles = makeStyles((theme) => ({
  input: {
    "& > *": {
      margin: theme.spacing(2),
      width: "100ch",
    },
  },
}));

const Input = () => {
  const classes = useStyles();
  const value = useDetails();
  return (
    <div className={classes.input}>
      <h1>Nested Child Name is {value.userName}</h1>
      <form action="">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={value.userName}
          onChange={(e) => value.setUserName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
