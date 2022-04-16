import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Notes,
  Archieve,
  Trash,
  NotFound,
} from "../Pages";
import { NotesGrid } from "../Components";

export function RoutingPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/notes" element={<NotesGrid />}>
        <Route index element={<Notes />} />
        <Route path="archieve" element={<Archieve />} />
        <Route path="trash" element={<Trash />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
