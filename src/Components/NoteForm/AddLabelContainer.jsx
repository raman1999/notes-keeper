import { useUserContext } from "../../Context";
import { useState } from "react";
export function AddLabelContainer({ labelList, setNoteForm }) {
  const {
    userState: { labels },
    userDispatch,
  } = useUserContext();

  const [newLabel, setNewLabel] = useState("");
  const isLabelInLabelList = (label) =>
    labelList.some((item) => item === label);

  function addLabelHandler(label) {
    const newLabelList = !isLabelInLabelList(label)
      ? labelList.concat(label)
      : labelList.filter((labelItem) => labelItem !== label);
    setNoteForm((prevState) => ({ ...prevState, labelList: newLabelList }));
  }
  return (
    <div className="bg-white space-y-2 py-2 ">
      {labels.map((label, index) => (
        <div key={index} className="space-x-2">
          <input
            type="checkbox"
            value={label}
            id={index}
            checked={isLabelInLabelList(label)}
            onChange={() => addLabelHandler(label)}
          />
          <label htmlFor={index}>{label}</label>
        </div>
      ))}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="add label"
          value={newLabel}
          className="input-field p-[3px]  min-w-fit  border-2"
          onChange={(e) => setNewLabel(e.target.value)}
        />
        <button
          className="bg-yellow-500 text-white font-bold p-1 px-2"
          onClick={() => {
            userDispatch({ type: "ADD_NEW_LABEL", payload: newLabel });
            setNewLabel("");
          }}
          disabled={newLabel.length === 0}
        >
          Add
        </button>
      </div>
    </div>
  );
}
