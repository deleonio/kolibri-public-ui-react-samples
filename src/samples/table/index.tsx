import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { TableSortTabel } from "./sort-date";

export const Table: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="sort-date" />} />
    <Route path="/sort-date" element={<TableSortTabel />} />
  </Routes>
);
