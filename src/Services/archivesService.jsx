import axios from "axios";
import { toast } from "react-toastify";

export async function updateArchives(type, payload, dispatch) {
  const encodedToken = localStorage.getItem("token");
  const postHeader = { headers: { authorization: encodedToken } };

  try {
    switch (type) {
      case "ADD_NOTE_TO_ARCHIVES":
        const { data: dataAfterAddition } = await axios.post(
          `/api/notes/archives/${payload._id}`,
          { note: payload },
          postHeader
        );

        dispatch({
          type: "SET_NOTES",
          payload: dataAfterAddition.notes,
        });
        dispatch({
          type: "SET_ARCHIVES",
          payload: dataAfterAddition.archives,
        });
        toast.success("Note added to Archives");
        break;

      case "RESTORE_NOTE_FROM_ARCHIVES":
        const { data: dataAfterRestoration } = await axios.post(
          `/api/archives/restore/${payload._id}`,
          { note: payload },
          postHeader
        );
        dispatch({
          type: "SET_NOTES",
          payload: dataAfterRestoration.notes,
        });
        dispatch({
          type: "SET_ARCHIVES",
          payload: dataAfterRestoration.archives,
        });
        toast.success("Note restored successfully");
        break;
      case "DELETE_NOTE_FROM_ARCHIVES":
        const { data: dataAfterDeletion } = await axios.delete(
          `/api/archives/delete/${payload._id}`,
          postHeader
        );
        dispatch({
          type: "SET_ARCHIVES",
          payload: dataAfterDeletion.archives,
        });
        dispatch({ type: "ADD_TO_TRASH", payload });
        toast.success("Note deleted successfully");
        break;
    }
  } catch (err) {
    toast.error("Server error! Try again later..");
  }
}
