import Dashboard from "../dashboard";
import Registration from "../registration";
import Scanner from "../scanner";
import Setting from "../setting";
import Update from "../update";


import Sidebar from "./Sidebar";


const Home = () => {
    
    return ( 
        <div className="w-100 h-full min-h-screen flex flex-row">
            <Sidebar />
            <div className="w-4/5 bg-slate-100"> 
                {/* Side Display */}
                <Dashboard />

                {/* Scanner */}
                {/* <Scanner /> */}
                
                {/* Registration */}
                {/* <Registration /> */}

                {/* Update */}
                {/* <Update /> */}

                {/* Setting */}
                {/* <Setting /> */}


            </div>
        </div>
     );
}
 
export default Home;