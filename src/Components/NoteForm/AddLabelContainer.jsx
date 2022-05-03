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

  function labelInputHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (newLabel.length > 0) {
        userDispatch({ type: "ADD_NEW_LABEL", payload: newLabel });
        setNewLabel("");
      }
    }
  }
  function addLabelHandler(label) {
    const newLabelList = !isLabelInLabelList(label)
      ? labelList.concat(label)
      : labelList.filter((labelItem) => labelItem !== label);
    setNoteForm((prevState) => ({ ...prevState, labelList: newLabelList }));
  }
  return (
    <div className="bg-white space-y-2 py-2 ">
      <div className="pb-2">
        <input
          type="text"
          placeholder="Add new label"
          minLength="2"
          maxLength="18"
          value={newLabel}
          className=" p-[3px] w-[9rem]  border-b-2 border-[#cbcaca] outline-none text-[1rem]"
          onChange={(e) => setNewLabel(e.target.value)}
          onKeyDown={labelInputHandler}
        />
      </div>
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
    </div>
  );
}
