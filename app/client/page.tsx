'use client';
import { useEffect } from "react";

export default function Client() {
    console.log('Client')
    useEffect(() => {
        console.log('Client Useeffect')
    }, [])
    return (
      <>
        <h1>Client</h1>
      </>
    );
  }