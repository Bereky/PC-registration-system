import Header from './Header';
import Analytics from './Analytics';
import Activities from './Activities';
import History from './History';
import LeftWrapper from '../home/LeftWrapper';
import Brand from '../home/Brand';
import SideNav from '../home/SideNav';
import { SideWrapper } from '../home';
import TopMenu from '../home/TopMenu';

const Dashboard = () => {
    return ( 
        <div className="w-full flex flex-col">
            {/* Header */}
            <Header />

            {/* Analytics */}
            <Analytics />

            <div className="w-full h-auto flex justify-between items-center flex-row space-x-4 px-5">
                {/* Activities */}
                <Activities />
                <History />
            </div>
        </div>
     );
}

const DashboardRoute = () => {
    return ( 
        <>
            <LeftWrapper>
                <Brand />
                <SideNav route='dashboard'/>
            </LeftWrapper> 
            <SideWrapper>
                <TopMenu />
                <Dashboard />
            </SideWrapper>
        </>
     );
}
 
export { DashboardRoute, Dashboard };