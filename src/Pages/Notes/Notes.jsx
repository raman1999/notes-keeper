import { FaSearch, FaFilter } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import { useFilterContext, useUserContext } from "../../Context";
import { NoteForm, FilterModal } from "../../Components";
import { NoteCard } from "./NoteCard";
import { getFilterNotes } from "./Utils/getFilterNotes";

export function Notes() {
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const {
    userState: { notes, pinnedNotes },
  } = useUserContext();
  const { filterState, filterDispatch } = useFilterContext();
  const filteredNotes = getFilterNotes(filterState, notes);

  return (
    <div className="px-8 md:px-4">
      <div className="flex flex-wrap justify-between mt-4 pr-7 gap-4">
        <button
          className="btn md:order-2 flex items-center bg-yellow-500"
          onClick={() => setShowNoteForm(!showNoteForm)}
        >
          <BsPlusLg />
          <span className="ml-1">Add New Note</span>
        </button>
        <div className="flex gap-7 md:w-[100%]">
          <span className="relative flex items-center md:grow ">
            <input
              type="text"
              placeholder="Search  note"
              className="input-field pr-2 rounded-lg border-[#d8d8d8] md:min-w-fit "
              onChange={(e) =>
                filterDispatch({
                  type: "SET_SEARCH_VALUE",
                  payload: e.target.value,
                })
              }
            />
            <FaSearch className="absolute text-xl right-2  text-gray-400 " />
          </span>
          <button
            className="flex items-center  text-xl font-bold text-gray-500 dark:text-gray-200"
            onClick={() => setShowFilterModal(true)}
          >
            <FaFilter />
            <span className="ml-[2px]">Filter</span>
          </button>
        </div>
      </div>
      {showFilterModal && (
        <FilterModal setShowFilterModal={setShowFilterModal} />
      )}
      {showNoteForm && <NoteForm setShowNoteForm={setShowNoteForm} />}

      {notes.length === 0 && pinnedNotes.length === 0 && (
        <div className="empty-notes h-full flex flex-col items-center">
          <GiNotebook size={300} className="text-gray-600" />
          <span className="text-5xl text-gray-700">Add some notes</span>
        </div>
      )}
      {pinnedNotes.length > 0 && (
        <div className="mt-16">
          <h2 className="heading">Pinned Notes</h2>

          <div className="flex flex-wrap gap-8 md:gap-x-2 mt-5">
            {pinnedNotes.map((note) => (
              <NoteCard key={note._id} noteDetails={note} />
            ))}
          </div>
        </div>
      )}
      {filteredNotes.length > 0 && (
        <div className="mt-16 mb-10">
          <h2 className="heading">Notes</h2>
          <div className="flex flex-wrap gap-8  md:gap-x-2 mt-5">
            {filteredNotes.map((note) => (
              <NoteCard key={note._id} noteDetails={note} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
