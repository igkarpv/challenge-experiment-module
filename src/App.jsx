import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CampaignDetail from "./Pages/CampaignDetail";
import CreateCampaign from "./Pages/CreateCampaign";
import About from "./Pages/About";
import Campaigns from "./Pages/Campaigns";
import HowItWorks from "./Pages/HowItWorks";
import MyCampaigns from "./Pages/MyCampaigns";
import ScrollToTop from "./Components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"; // тут лежат lomi-toast стили


function App() {
  return (
    <BrowserRouter>
      <ToastContainer
  position="bottom-right"
  autoClose={4000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  toastClassName="lomi-toast"
  bodyClassName="lomi-toast-body"
  progressClassName="lomi-toast-progress"
/>
      <div className="bg-gray-950">
        <Navbar />
        <ScrollToTop />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign/:id" element={<CampaignDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/my-campaigns" element={<MyCampaigns />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
