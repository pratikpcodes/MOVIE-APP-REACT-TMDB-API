import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SearchField from "./Components/SearchField";

function App() {
  return (
    <>
      <Header />
      <SearchField/>

      <Outlet />
      
      {/* <Footer /> */}
    </>
  );
}

export default App;
