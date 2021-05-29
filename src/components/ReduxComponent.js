import { Paper } from "@material-ui/core";
import React, { useEffect, useReducer } from "react";
const initialState = {
  userName: "",
  loading: false,
  users: [],
  error: "",
};

function userReducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
  }
}
const ReduxComponent = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    dispatch({ type: "FETCH_REQUEST" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_FAIL",
          error: "something wrong" + error.toString(),
        });
      });
  });

  return (
    <div>
      {state.users.map((user) => (
        <Paper key={user.name} elevation={3}>
          <h3>{user.name}</h3>
        </Paper>
      ))}
    </div>
  );
};

export default ReduxComponent;
