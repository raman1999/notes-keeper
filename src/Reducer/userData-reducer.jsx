export function userReducer(state, { type, payload }) {
  switch (type) {
    case "SET_NOTES":
      return {
        ...state,
        notes: payload.filter((note) => !note.isPinned),
        pinnedNotes: payload.filter((note) => note.isPinned),
      };
    case "SET_ARCHIVES":
      return { ...state, archivedNotes: payload };
    case "SET_TRASH":
      return { ...state, trashedNotes: payload };

    case "ADD_NEW_LABEL":
      return state.labels.some(
        (label) => label.toLowerCase() === payload.toLowerCase()
      )
        ? state
        : { ...state, labels: state.labels.concat(payload) };

    case "ADD_TO_TRASH":
      return { ...state, trashedNotes: [...state.trashedNotes, payload] };
    case "REMOVE_FROM_TRASH":
      return {
        ...state,
        trashedNotes: state.trashedNotes.filter(
          (note) => note._id !== payload._id
        ),
      };
    default:
      return state;
  }
}
