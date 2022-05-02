import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Notes, Archive, Trash, NotFound } from "../Pages";
import { NotesGrid } from "../Components";

export function RoutingPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/notes" element={<NotesGrid />}>
        <Route index element={<Notes />} />
        <Route path="archive" element={<Archive />} />
        <Route path="trash" element={<Trash />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
