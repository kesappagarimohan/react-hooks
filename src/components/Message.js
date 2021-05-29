import { Button, IconButton, TextField, Typography } from "@material-ui/core";
import React, { useCallback, useLayoutEffect, useRef } from "react";
import { useState, useMemo } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import useFetch from "./useFetch";
import { MessagesContext, useDetails } from "./Chat";
import Input from "./Input";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(20),
      height: theme.spacing(30),
    },
  },
  input: {
    width: theme.spacing(100),
  },
}));

const Message = () => {
  //const { loading = false } = props;
  const value = useDetails();
  const [userName, setUsername] = useState(value.userName);
  const [count, setCount] = useState(0);
  // const [data, setData] = useState([]);
  // const [todo, setTodos] = useState([]);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [dark, setDark] = useState(false);
  const sumOfTwo = (a, b) => {
    for (var i = 0; i < 10; i++) {}
    return Number(a) + Number(b);
  };
  const sum = useMemo(() => {
    return sumOfTwo(a, b);
  }, [a, b]);
  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  const getSum = useCallback(
    (number) => {
      return [parseInt(a) + parseInt(b) + parseInt(number)];
    },
    [a, b]
  );
  const classes = useStyles();
  const data = useFetch("https://jsonplaceholder.typicode.com/users");
  const todo = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
  useEffect(() => {
    console.log("Theme updated");
  }, [theme]);
  useLayoutEffect(() => {
    console.log("Theme updated by layout");
  }, [theme]);

  const input1 = useRef();
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  //   return () => {
  //     console.log("will un mount");
  //   };
  // }, [count]);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos`)
  //     .then((res) => res.json())
  //     .then((todo) => {
  //       setTodos(todo);
  //     });
  //   return () => {
  //     console.log("will un mount");
  //   };
  // }, [count]);
  return (
    <div>
      <h1>useMemo</h1>
      <TextField
        label="A"
        variant="outlined"
        ref={input1}
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <TextField
        label="B"
        variant="outlined"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <input type="text" ref={input1} />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => input1.current.focus()}
      >
        Focus input1
      </Button>
      <h1 style={theme}>{sum}</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setDark(!dark)}
      >
        Change Name
      </Button>
      <h1>HI</h1>
      <Input />
      <h1>Context</h1>
      <h3>{value.userName}</h3>
      {/* <MessagesContext.Consumer>
        {(value) => <h3>{value.userName}</h3>}
      </MessagesContext.Consumer> */}
      <Typography variant="h1">{userName}</Typography>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setUsername("krishna")}
      >
        Change Name
      </Button>
      <div className="">
        <IconButton onClick={() => setCount(count + 1)} color="secondary">
          <AddIcon />
        </IconButton>
        <Typography variant="h3">{count}</Typography>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setCount(getSum(5))}
        >
          Get sum
        </Button>
        <IconButton onClick={() => setCount(count - 1)} color="secondary">
          <RemoveIcon />
        </IconButton>
      </div>
      <h1>Users</h1>
      <div className={classes.root}>
        {data.map((user) => (
          <Paper key={user.name} elevation={3}>
            <h3>{user.name}</h3>
          </Paper>
        ))}
      </div>
      <h1>Todos</h1>
      <div className={classes.root}>
        {todo.map((todo) => (
          <Paper key={todo.title} elevation={3}>
            <h3>{todo.title}</h3>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Message;

//mergining in class components

// import React, { Component } from "react";
// import Button from "@material-ui/core/Button";

// class Message extends Component {
//   state = {
//     userName: "Mohan",
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.userName}</h1>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => {
//             this.setState({
//               userName: "krishna",
//             });
//           }}
//         >
//           Change Name
//         </Button>
//       </div>
//     );
//   }
// }

// export default Message;
