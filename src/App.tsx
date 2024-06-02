import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "react-tabs/style/react-tabs.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
