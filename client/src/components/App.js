import { DisplayWrapper, HomeWrapper} from "./home";

import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route} from "react-router-dom";

const App = () => {
  return (
      <HomeWrapper>
        <Router>
          <Routes>
            <Route index element={<DisplayWrapper route='dashboard' />} />
            <Route path="/scanner" element={<DisplayWrapper route='scanner' />} />
            <Route path="/registration" element={<DisplayWrapper route='registration'/>} />
            <Route path="/update" element={<DisplayWrapper route='update'/>} />
          </Routes>
        </Router>
      </HomeWrapper>
  );
}

export default App;
