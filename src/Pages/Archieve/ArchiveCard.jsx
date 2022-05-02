import { FaTrashAlt } from "react-icons/fa";
import { MdUnarchive } from "react-icons/md";
import { updateArchives } from "../../Services";
import { useUserContext } from "../../Context";

export function ArchiveCard({ noteDetails }) {
  const { title, description, labelList, priority, date, bgColor } =
    noteDetails;
  const { userDispatch } = useUserContext();

  return (
    <>
      <div className="card card-shadow" style={{ backgroundColor: bgColor }}>
        <div className="pr-2">
          <span className="font-semibold">{title}</span>
        </div>
        <p>
          <span className="text-gray-600 font-medium">Priority: </span>
          {priority}
        </p>
        <p
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
        <div className="mr-7">
          Created at: <span>{date}</span>
        </div>
        <div className="flex justify-end space-x-2 text-xl">
          <MdUnarchive
            onClick={() =>
              updateArchives(
                "RESTORE_NOTE_FROM_ARCHIVES",
                noteDetails,
                userDispatch
              )
            }
          />

          <FaTrashAlt
            onClick={() =>
              updateArchives(
                "DELETE_NOTE_FROM_ARCHIVES",
                noteDetails,
                userDispatch
              )
            }
          />
        </div>
      </div>
    </>
  );
}
