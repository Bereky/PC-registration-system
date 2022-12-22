import { HomeWrapper} from "./home";

import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route} from "react-router-dom";

import { DashboardRoute } from "./dashboard";
import {ScannerRoute} from "./scanner";
import { RegistrationRoute } from "./registration";


const App = () => {
  return (
      <HomeWrapper>
        <Router>
          <Routes>
            <Route index element={<DashboardRoute />} />
            <Route path="/scanner" element={<ScannerRoute />} />
            <Route path="/registration" element={<RegistrationRoute />} />
          </Routes>
        </Router>
      </HomeWrapper>
  );
}

export default App;
