import { RoutingPath } from "./Routes/RoutingPath";
import { Navbar, Footer } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        pauseOnHover="false"
        closeOnClick
        theme="dark"
        toastStyle={{ backgroundColor: "rgb(50,50,50)" }}
      />

      <div className="main-container">
        <RoutingPath />
      </div>
      <Footer />
    </div>
  );
}

export default App;
