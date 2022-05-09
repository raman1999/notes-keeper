import { FaTrashAlt, FaTrash } from "react-icons/fa";
import { useUserContext } from "../../Context";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { TrashCard } from "./TrashCard";
export function Trash() {
  const {
    userState: { trashedNotes },
    userDispatch,
  } = useUserContext();
  useDocumentTitle("Trash | NotesKeeper");

  return (
    <div className="px-8">
      {trashedNotes.length === 0 ? (
        <div className="flex flex-col items-center gap-7 mt-[5rem]">
          <div className="bg-yellow-100 rounded-3xl p-6 w-fit">
            <FaTrash className="text-[8rem] text-yellow-600" />
          </div>
          <h3 className="text-3xl text-gray-700 font-semibold dark:text-white">
            You haven't deleted any note yet.
          </h3>
        </div>
      ) : (
        <div className="mt-2 mb-10">
          <h2 className="heading text-3xl ">Trash Notes</h2>
          <div className="flex flex-wrap gap-8  mt-8">
            {trashedNotes?.map((note) => (
              <TrashCard key={note._id} noteDetails={note} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
