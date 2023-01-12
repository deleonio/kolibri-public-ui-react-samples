import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { NavBasic } from "./basic";
import { NavHorizontal } from "./horizontal";

export const Nav: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<NavBasic />} />
    <Route path="/horizontal" element={<NavHorizontal />} />
  </Routes>
);
