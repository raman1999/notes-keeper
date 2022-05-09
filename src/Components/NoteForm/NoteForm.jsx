import { Editor } from "./Editor";
import { useState } from "react";
import { BsTagFill } from "react-icons/bs";
import { useUserContext } from "../../Context";
import { AddLabelContainer } from "./AddLabelContainer";
import { updateNotes } from "../../Services";
import "./note_editor.css";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light-border.css";
import "tippy.js/dist/tippy.css";

export function NoteForm({ setShowNoteForm, existingNote }) {
  const initialData = {
    title: "",
    labelList: [],
    description: "",
    priority: "High",
    isPinned: false,
    bgColor: "",
    date: new Date().toLocaleString(),
  };

  const [noteForm, setNoteForm] = useState(existingNote || initialData);
  const { title, description, priority, labelList } = noteForm;
  const { userDispatch } = useUserContext();
  const [error, setError] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (description == "") return setError("Please fill the description");
    setError("");
    if (existingNote) updateNotes("UPDATE_NOTE", noteForm, userDispatch);
    else updateNotes("ADD_NOTE", noteForm, userDispatch);

    setShowNoteForm(false);
    setNoteForm(initialData);
  }
  return (
    <div className="modal">
      <form
        className="flex flex-col space-y-3 w-[70%] h-[80%] bg-gray-100 dark:bg-gray-200 p-4 m-auto rounded-lg lg:w-[90%] lg:h-[80%]"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-wrap justify-between gap-3">
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            className="font-semibold outline-none text-xl md:basis-[100%] bg-transparent"
            onChange={(e) =>
              setNoteForm({ ...noteForm, title: e.target.value })
            }
            required
          />
          <div className="priority-field flex items-center gap-3 ">
            <label
              htmlFor="priority"
              className="text-xl font-semibold text-gray-600"
            >
              Priority*
            </label>
            <select
              name="priority"
              className=" sel border-2 border-gray-200 p-1 bg-transparent"
              value={priority}
              onChange={(e) =>
                setNoteForm({ ...noteForm, priority: e.target.value })
              }
              required
            >
              <option className="option-field" value="High">
                High
              </option>
              <option className="option-field" value="Medium">
                Medium
              </option>
              <option className="option-field" value="Low">
                Low
              </option>
            </select>
          </div>
          <div>
            <Tippy
              content={
                <AddLabelContainer
                  labelList={labelList}
                  setNoteForm={setNoteForm}
                />
              }
              trigger="click"
              interactive={true}
              placement="bottom"
              theme="light-border"
            >
              <span className="font-semibold border-2 border-yellow-600 text-yellow-600 rounded-full flex items-center p-1 cursor-pointer">
                <BsTagFill /> <span className="ml-1">labels</span>
              </span>
            </Tippy>
          </div>
        </div>

        <Editor
          value={description}
          setValue={(e) => {
            setNoteForm({ ...noteForm, description: e });
          }}
        />
        <div className="flex justify-between sm:pt-5">
          <span className="text-red-700 font-semibold">{error}</span>
          <div>
            <button
              className="btn bg-red-600 hover:bg-red-700"
              onClick={() => setShowNoteForm((prev) => !prev)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn bg-green-700 hover:bg-green-800"
            >
              {existingNote ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
