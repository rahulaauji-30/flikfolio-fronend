import { useState } from 'react';
import Nav from './Nav';
import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );

}
