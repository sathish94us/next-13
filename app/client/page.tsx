'use client';
import useStore from "../store";
import { useEffect } from "react";

export default function Client() {
  const counter = useStore((state: any) => state.counter);
  const increment = useStore((state: any) => state.increment);
  const decrement = useStore((state: any) => state.decrement);
  console.log('Client')
  useEffect(() => {
    console.log('Client Useeffect')
  }, [])
  return (
    <>
      <h1>Client: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}