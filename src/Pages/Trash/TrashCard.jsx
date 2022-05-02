import { FaTrashAlt } from "react-icons/fa";
import { useUserContext } from "../../Context";
import { toast } from "react-toastify";

export function TrashCard({ noteDetails }) {
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
        <div className="flex justify-end text-xl">
          <FaTrashAlt
            onClick={() => {
              userDispatch({ type: "REMOVE_FROM_TRASH", payload: noteDetails });
              toast.success("Deleted From Trash");
            }}
          />
        </div>
      </div>
    </>
  );
}
