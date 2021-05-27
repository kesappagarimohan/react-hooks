import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";

const Message = () => {
  const [userName, setUsername] = useState("mohan");

  return (
    <div>
      <Typography variant="h1">{userName}</Typography>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setUsername("krishna")}
      >
        Change Name
      </Button>
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
