import { HomeWrapper} from "./home";

import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route} from "react-router-dom";

import { DashboardRoute } from "./dashboard";
import {ScannerRoute} from "./scanner";
import { RegistrationRoute } from "./registration";
import { UpdateRoute } from "./update";


const App = () => {
  return (
      <HomeWrapper>
        <Router>
          <Routes>
            <Route index element={<DashboardRoute />} />
            <Route path="/scanner" element={<ScannerRoute />} />
            <Route path="/registration" element={<RegistrationRoute />} />
            <Route path="/update" element={<UpdateRoute />} />
          </Routes>
        </Router>
      </HomeWrapper>
  );
}

export default App;
