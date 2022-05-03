export function filterComposer(state, notes, ...functions) {
  return functions.reduce((acc, curr) => {
    return curr(state, acc);
  }, notes);
}

export function FilterByLabels(state, notes) {
  const { labelFilter } = state;

  const isLabelinLabelFilter = (label) =>
    labelFilter.some((item) => item === label);
  const filterNotesByLabels = (notes) =>
    notes.filter(
      (note) => note.labelList.filter(isLabelinLabelFilter).length > 0
    );
  return labelFilter.length > 0 ? filterNotesByLabels(notes) : notes;
}

export function FilterByPriority(state, notes) {
  const { priorityFilter } = state;
  const filterNotesByPriority = (notes) =>
    notes.filter((note) =>
      priorityFilter.some((priority) => priority === note.priority)
    );
  return priorityFilter.length > 0 ? filterNotesByPriority(notes) : notes;
}

export function SortByDate(state, notes) {
  const { sortByDate } = state;
  if (!sortByDate) return notes;
  const sortedNotes = [...notes].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return sortByDate === "oldest" ? sortedNotes : sortedNotes.reverse();
}

export function FilterBySearchValue(state, notes) {
  let { searchValue } = state;

  if (searchValue == "") return notes;

  searchValue = searchValue.toLowerCase();
  return notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchValue) ||
      note.description.toLowerCase().includes(searchValue)
  );
}
