import React, { forwardRef, useImperativeHandle, useRef } from "react";

export default function Comp() {
  const buttonRef = useRef();
  const click = () => {
    console.log(Object.keys(buttonRef.current));
    buttonRef.current.someExposedProperty();
    console.log(buttonRef.current.userName);
  };

  return <Butto onClick={click} ref={buttonRef} />;
}

const Butto = forwardRef((props, ref) => {
  const buttonRef = useRef();
  useImperativeHandle(ref, () => ({
    someExposedProperty: () => {
      console.log("we are inside it");
    },
    userName: "mohan",
  }));
  return (
    <button ref={buttonRef} {...props}>
      Button
    </button>
  );
});
