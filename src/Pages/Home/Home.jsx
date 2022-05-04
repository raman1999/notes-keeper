import { useNavigate } from "react-router-dom";
import homeImg from "../../assets/home_image.png";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { useAuthenticationContext } from "../../Context";
import { Footer } from "../../Components";

export function Home() {
  const { login } = useAuthenticationContext();
  const navigate = useNavigate();
  useDocumentTitle("Home |NotesKeeper");

  return (
    <>
      <section className="flex justify-around h-[80vh] items-center p-10 px-30 md:flex-col">
        <div className="flex justify-center h-full ">
          <img
            className="w-full drop-shadow-[0px_5px_5px_white]"
            src={homeImg}
            alt="logo"
          />
        </div>
        <div className=" flex justify-center items-center">
          <div className="flex flex-col space-y-4 ">
            <h3 className="text-5xl sm:text-4xl font-bold">
              Welcome to <span className="text-yellow-600">Notes Keeper</span>
            </h3>
            <p className="text-xl">
              We help you in organizing your day bettter by making notes of{" "}
              <br />
              all important things to do in a day.
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => (login ? navigate("/notes") : navigate("/login"))}
            >
              Get Started &#8594;
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
