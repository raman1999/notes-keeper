import { MdArchive } from "react-icons/md";
import { useUserContext } from "../../Context";
import { ArchiveCard } from "./ArchiveCard";
export function Archive() {
  const {
    userState: { archivedNotes },
  } = useUserContext();

  return (
    <div className="px-8">
      {archivedNotes.length === 0 ? (
        <div className="flex flex-col items-center gap-6 mt-[5rem]">
          <div className="bg-yellow-100 rounded-3xl p-3 w-fit">
            <MdArchive className="text-[11rem] text-yellow-600" />
          </div>
          <h3 className="text-3xl text-gray-700 font-semibold dark:text-white">
            You haven't archived any note yet.
          </h3>
        </div>
      ) : (
        <div className="mt-2 mb-10">
          <h2 className="heading text-3xl">Archive Notes</h2>
          <div className="flex flex-wrap gap-8  mt-8">
            {archivedNotes?.map((note) => (
              <ArchiveCard key={note._id} noteDetails={note} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
