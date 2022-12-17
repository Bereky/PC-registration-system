import Dashboard from "../dashboard";
import Registration from "../registration";
import { Scanner } from "../scanner";
import Setting from "../setting";
import Update from "../update";
import Brand from "./Brand";

import LeftWrapper from "./LeftWrapper";
import SideNav from "./SideNav";
import TopMenu from "./TopMenu";


const HomeWrapper = ({children}) => {
    return ( 
        <div className="w-100 h-full min-h-screen flex flex-row">
            {children}
        </div>
     );
}

const SideWrapper = ({children}) => {
    return(
        <div className="w-4/5 bg-slate-100"> 
            {children}
            
            {/* Top menu */}
            {/* <TopMenu /> */}
            {/* Side Display */}
            
            {/* Dashboard */}
            {/* <Dashboard /> */}

            {/* Scanner */}
            {/* <Scanner /> */}
            
            {/* Registration */}
            {/* <Registration /> */}

            {/* Update */}
            {/* <Update /> */}

            {/* Setting */}
            {/* <Setting /> */}
        </div>
    );
}

const DisplayWrapper = ({children, props, route}) => {
    return (
        <>
            <LeftWrapper>
                <Brand />
                <SideNav route={route}/>
            </LeftWrapper>
            <SideWrapper route={route}>
                <TopMenu />

                {
                    route === 'scanner'? <Scanner /> : <></> 
                   /* ( route === 'registration'? <Registration /> : <></> )
                   ( route === 'update'? <Update /> : <></> )
                   ( route === 'setting'? <Setting /> : <></> ) */
                }

            </SideWrapper>
        </>
    );
}
 
export {HomeWrapper, SideWrapper, DisplayWrapper};