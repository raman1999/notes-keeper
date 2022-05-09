import { RoutingPath } from "./Routes/RoutingPath";
import { Navbar } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App h-[100vh] dark:text-white dark:bg-black">
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={1400}
        hideProgressBar={false}
        pauseOnHover="false"
        closeOnClick
        theme="dark"
        toastStyle={{ backgroundColor: "rgb(50,50,50)" }}
      />

      <div className="routes-container min-h-[80vh] dark:bg-black">
        <RoutingPath />
      </div>
    </div>
  );
}

export default App;
