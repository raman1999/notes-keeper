import { useUserContext } from "../../Context";
import { updateNotes } from "../../Services";

export function ColorPallete({ noteDetails }) {
  const { userDispatch } = useUserContext();
  const colorPallete = [
    "#E3BEC6",
    "#E193FD",
    "#F6D7A7",
    "#AF9EB5",
    "#E7ED9B",
    "#9DB5B2",
  ];

  return (
    <div className="flex space-x-2">
      {colorPallete.map((color) => (
        <span
          onClick={() =>
            updateNotes(
              "CHANGE_NOTE_COLOR",
              { ...noteDetails, bgColor: color },
              userDispatch
            )
          }
          key={color}
          className="rounded-full  w-4 h-4"
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  );
}
