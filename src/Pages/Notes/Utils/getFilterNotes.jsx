import {
  filterComposer,
  FilterByLabels,
  FilterByPriority,
  SortByDate,
  FilterBySearchValue,
} from "./filterComposer";

export function getFilterNotes(state, notes) {
  return filterComposer(
    state,
    notes,
    FilterByLabels,
    FilterByPriority,
    SortByDate,
    FilterBySearchValue
  );
}
