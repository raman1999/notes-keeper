import { BsTagFill } from "react-icons/bs";
import { useUserContext } from "../../Context";
import { LabelCard } from "./LabelCard";
import { useState } from "react";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
export function Labels() {
  const {
    userState: { labels },
    userDispatch,
  } = useUserContext();
  const [newLabel, setNewLabel] = useState("");

  useDocumentTitle("Labels | NotesKeeper");

  function addLabelHandler() {
    if (newLabel.length > 0) {
      userDispatch({ type: "ADD_NEW_LABEL", payload: newLabel });
      setNewLabel("");
    }
  }
  return (
    <div className="px-8">
      <div className="mt-4 mb-10">
        <div className="flex justify-between pr-14 sm:pr-0">
          <h2 className="heading text-3xl">Labels</h2>
          <div className="flex  items-center relative">
            <input
              type="text"
              placeholder="Add New label"
              value={newLabel}
              maxLength="18"
              className="p-[2px] pr-4  w-[11rem] border-b-2 border-b-gray-400 outline-none bg-transparent
                         placeholder:font-semibold text-lg dark:border-white dark:placeholder:text-white"
              onChange={(e) => setNewLabel(e.target.value)}
              onKeyDown={(e) => e.keyCode === 13 && addLabelHandler()}
            />
            <BsTagFill
              size={25}
              className="text-gray-600 absolute right-[-7px] dark:text-white"
              onClick={addLabelHandler}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-8  mt-14">
          {labels.map((label) => (
            <LabelCard key={label} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}
