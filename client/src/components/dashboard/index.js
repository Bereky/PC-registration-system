import Header from './Header';
import Analytics from './Analytics';
import Activities from './Activities';
import History from './History';
import { SideWrapper } from '../home';

const Dashboard = () => {
    return (
        <SideWrapper>
            <div className="w-full flex flex-col">
                <Header />
                <Analytics />

                <div className="w-full h-auto flex justify-between items-center flex-row space-x-4 px-5 ">
                    <Activities />
                    <History />
                </div>
            </div>
        </SideWrapper> 
     );
}

 
export { Dashboard };