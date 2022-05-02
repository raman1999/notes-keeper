export function filterReducer(state, { type, payload }) {
  const { priorityFilter, labelFilter } = state;

  switch (type) {
    case "SORT_BY_DATE":
      return { ...state, sortByDate: payload };

    case "SET_LABEL_FILTER":
      var newLabelFilter = labelFilter.some((label) => label === payload)
        ? labelFilter.filter((label) => label !== payload)
        : [...labelFilter, payload];
      return {
        ...state,
        labelFilter: newLabelFilter,
      };

    case "SET_PRIORITY_FILTER":
      var newPriorityFilter = priorityFilter.some(
        (priority) => priority === payload
      )
        ? priorityFilter.filter((priority) => priority !== payload)
        : [...priorityFilter, payload];
      return {
        ...state,
        priorityFilter: newPriorityFilter,
      };

    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: payload };

    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sortByDate: null,
        priorityFilter: [],
        labelFilter: [],
        searchValue: "",
      };

    default:
      return state;
  }
}
