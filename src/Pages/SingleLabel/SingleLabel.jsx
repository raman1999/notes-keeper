import { BsArrowRight } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context";
import { NoteCard } from "../Notes/NoteCard";

export function SingleLabel() {
  const {
    userState: { notes, pinnedNotes },
  } = useUserContext();
  const { labelName } = useParams();
  const navigate = useNavigate();
  const totalNotes = [...notes, ...pinnedNotes];
  const notesInLabel = totalNotes.filter((note) =>
    note.labelList.some((label) => label === labelName)
  );
  return (
    <div className="px-8">
      {notesInLabel.length === 0 ? (
        <div className="flex flex-col gap-5 justify-center items-center mt-[7rem] text-gray-600">
          <h2 className="text-3xl font-semibold text-center">
            No Notes Found For {labelName}{" "}
          </h2>
          <button
            className="btn flex items-center gap-2 "
            onClick={() => navigate("/notes")}
          >
            Go To Notes <BsArrowRight className="text-2xl" />
          </button>
        </div>
      ) : (
        <div className="mt-3 mb-10">
          <h2 className="heading text-3xl">{labelName}</h2>
          <div className="flex flex-wrap gap-8  md:gap-x-2 mt-9">
            {notesInLabel.map((note) => (
              <NoteCard key={note._id} noteDetails={note} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
