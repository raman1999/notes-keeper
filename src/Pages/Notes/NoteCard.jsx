import { IoMdColorPalette } from "react-icons/io";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BsPin, BsPinFill } from "react-icons/bs";
import { MdArchive } from "react-icons/md";
import Tippy from "@tippyjs/react";
import { ColorPallete, NoteForm } from "../../Components";
import { useState } from "react";
import { updateArchives, updateNotes } from "../../Services";
import { useUserContext } from "../../Context";

export function NoteCard({ noteDetails }) {
  const { title, description, labelList, priority, date, isPinned, bgColor } =
    noteDetails;
  const [showNoteForm, setShowNoteForm] = useState(false);
  const { userDispatch } = useUserContext();

  return (
    <>
      <div
        className="card card-shadow bg-gray-100 "
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex justify-between pr-2">
          <span className="font-semibold text-lg">{title}</span>
          <span className="text-2xl">
            {!isPinned ? (
              <BsPin
                onClick={() =>
                  updateNotes(
                    "ADD_TO_PINNED_NOTES",
                    { ...noteDetails, isPinned: true },
                    userDispatch
                  )
                }
              />
            ) : (
              <BsPinFill
                onClick={() =>
                  updateNotes(
                    "REMOVE_FROM_PINNED_NOTES",
                    { ...noteDetails, isPinned: false },
                    userDispatch
                  )
                }
              />
            )}
          </span>
        </div>
        <p>
          <span className="text-gray-600  font-medium">Priority: </span>
          {priority}
        </p>
        <p
          className="w-[80%]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>

        <div className="flex flex-wrap space-x-2">
          {labelList.map((label, index) => (
            <span
              key={index}
              className="bg-[rgba(0,0,0,.12)] rounded-full px-2"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="mr-7 text-gray-500 ">
          Created at: <span>{date}</span>
        </div>
        <div className="flex justify-end gap-4 text-xl text-gray-700 mt-3 ">
          <Tippy
            content={<ColorPallete noteDetails={noteDetails} />}
            trigger={"click"}
            interactive={true}
            theme="light-border"
          >
            <span>
              <IoMdColorPalette />
            </span>
          </Tippy>

          <MdArchive
            onClick={() =>
              updateArchives("ADD_NOTE_TO_ARCHIVES", noteDetails, userDispatch)
            }
          />
          <FaEdit onClick={() => setShowNoteForm(true)} />
          <FaTrashAlt
            onClick={() =>
              updateNotes("DELETE_NOTE", noteDetails, userDispatch)
            }
          />
        </div>
        {showNoteForm && (
          <NoteForm
            setShowNoteForm={setShowNoteForm}
            existingNote={noteDetails}
          />
        )}
      </div>
    </>
  );
}
