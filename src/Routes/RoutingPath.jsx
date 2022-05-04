import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Notes,
  Archive,
  Trash,
  Labels,
  SingleLabel,
  NotFound,
} from "../Pages";
import { NotesGrid } from "../Components";
import { RequiresAuth } from "./RequiresAuth";

export function RoutingPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/notes"
        element={
          <RequiresAuth>
            <NotesGrid />
          </RequiresAuth>
        }
      >
        <Route index element={<Notes />} />
        <Route path="labels" element={<Labels />} />
        <Route path="labels/:labelName" element={<SingleLabel />} />
        <Route path="archive" element={<Archive />} />
        <Route path="trash" element={<Trash />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
