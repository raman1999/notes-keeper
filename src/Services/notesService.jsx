import axios from "axios";
import { toast } from "react-toastify";

export async function updateNotes(type, payload, dispatch) {
  const encodedToken = localStorage.getItem("token");
  const postHeader = { headers: { authorization: encodedToken } };

  try {
    switch (type) {
      case "ADD_NOTE":
        const {
          data: { notes: notesAfterAddition },
        } = await axios.post(`/api/notes`, { note: payload }, postHeader);
        dispatch({
          type: "SET_NOTES",
          payload: notesAfterAddition,
        });
        toast.success("Note added successfully");
        break;

      case "UPDATE_NOTE":
      case "ADD_TO_PINNED_NOTES":
      case "REMOVE_FROM_PINNED_NOTES":
      case "CHANGE_NOTE_COLOR":
        const {
          data: { notes: notesAfterUpdation },
        } = await axios.post(
          `/api/notes/${payload._id}`,
          { note: payload },
          postHeader
        );
        dispatch({
          type: "SET_NOTES",
          payload: notesAfterUpdation,
        });
        const getToastMsg = {
          UPDATE_NOTE: "Note Updated Successfully",
          ADD_TO_PINNED_NOTES: "Note Pinned Successfully",
          REMOVE_FROM_PINNED_NOTES: "Note Unpinned Successfully",
        };
        const toastMsg = getToastMsg[type];
        toastMsg && toast.success(toastMsg);

        break;

      case "DELETE_NOTE":
        const {
          data: { notes: notesAfterDeletion },
        } = await axios.delete(`/api/notes/${payload._id}`, postHeader);
        dispatch({
          type: "SET_NOTES",
          payload: notesAfterDeletion,
        });
        dispatch({ type: "ADD_TO_TRASH", payload });
        toast.success("Note deleted successfully");
        break;
    }
  } catch (err) {
    toast.error("Server error! Try again later..");
  }
}
