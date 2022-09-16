import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/navbar/navbar.component";
import SearchBox from "./components/search/search.component";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavigationBar />
                <SearchBox />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
