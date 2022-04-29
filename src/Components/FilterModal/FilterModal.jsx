import { useFilterContext, useUserContext } from "../../Context";

export function FilterModal({ setShowFilterModal }) {
  const {
    userState: { labels },
  } = useUserContext();
  const {
    filterState: { sortByDate, priorityFilter, labelFilter },
    filterDispatch,
  } = useFilterContext();
  const priorityArray = ["Low", "Medium", "High"];
  const isItemInArray = (item, arr) =>
    arr.some((eachItem) => eachItem === item);

  return (
    <div className="modal">
      <div className="w-[30rem] bg-white p-4 m-auto text-black dark:bg-gray-300 sm:w-[90%] ">
        <div className="font-bold mb-4 text-lg ">Filter By:</div>
        <div className="space-y-4">
          <div className="font-bold text-gray-600"> Tags:</div>
          <div className="flex  flex-wrap  gap-3">
            {labels.map((label, index) => (
              <div key={index + 10} className=" space-x-1">
                <input
                  type="checkbox"
                  value={label}
                  id={index + 10}
                  checked={isItemInArray(label, labelFilter)}
                  onChange={() =>
                    filterDispatch({ type: "SET_LABEL_FILTER", payload: label })
                  }
                />
                <label htmlFor={index + 10}>{label}</label>
              </div>
            ))}
          </div>

          <div className="font-bold text-gray-600"> Priority:</div>
          <div className="flex  flex-wrap  gap-3">
            {priorityArray.map((priority, index) => (
              <div key={index + 5} className=" space-x-1">
                <input
                  type="checkbox"
                  value={priority}
                  id={index + 5}
                  checked={isItemInArray(priority, priorityFilter)}
                  onChange={() =>
                    filterDispatch({
                      type: "SET_PRIORITY_FILTER",
                      payload: priority,
                    })
                  }
                />
                <label htmlFor={index + 5}>{priority}</label>
              </div>
            ))}
          </div>
          <div className="font-bold pt-4 text-md border-t-2 border-gray-300">
            Sort By Date:
          </div>
          {/* <div className="font-bold text-gray-600"> Date:</div> */}
          <div className="flex  flex-wrap  gap-3">
            <div className=" space-x-1">
              <input
                type="radio"
                id="oldest_first"
                checked={sortByDate === "oldest"}
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_DATE",
                    payload: "oldest",
                  })
                }
              />
              <label htmlFor="oldest_first">Oldest First</label>
            </div>
            <div className=" space-x-1">
              <input
                type="radio"
                id="latest"
                checked={sortByDate === "latest"}
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_DATE",
                    payload: "latest",
                  })
                }
              />
              <label htmlFor="latest">Latest First</label>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly mt-7">
          <button
            className="bg-gray-700  text-white p-1 px-2 rounded-lg"
            onClick={() => filterDispatch({ type: "CLEAR_ALL_FILTERS" })}
          >
            Clear Filters
          </button>
          <button
            className="bg-gray-300 p-1 px-3 rounded-lg font-semibold"
            onClick={() => setShowFilterModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
