import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
export function NotFound() {
  useDocumentTitle("Page Not Found | NotesKeeper");
  return (
    <div className="page-not-found flex justify-center items-center   w-full h-[80vh] p-4 dark:text-gray-800">
      <div className="text-center w-[55%] md:w-[100%] h-[17rem] bg-[#edeecc] flex flex-col  items-center gap-4  p-5 pt-8">
        <h2 className="text-3xl font-bold text-yellow-800">
          We cannot find any matches!
        </h2>
        <p>The page you are looking for is not available within us.</p>
        <Link to="/" className="btn p-2">
          Go to Home &#8594;
        </Link>
      </div>
    </div>
  );
}
