import NotFound from './NotFound';
import Header from './Header';
import Search from './Search';
import UpdateData from './UpdateData';
import LeftWrapper from '../home/LeftWrapper';
import Brand from '../home/Brand';
import SideNav from '../home/SideNav';
import { SideWrapper } from '../home';
import TopMenu from '../home/TopMenu';

const Update = () => {
    return ( 
        <div className="w-full h-auto flex flex-col"> 
        
            <Header />

            <Search />

            {/* <UpdateData /> */}

            {/* <NotFound /> */}

        </div>
     );
}

const UpdateRoute = () => {
    return ( 
        <>
            <LeftWrapper>
                <Brand />
                <SideNav route='update'/>
            </LeftWrapper> 
            <SideWrapper>
                <TopMenu />
                <Update />
            </SideWrapper>
        </>
     );
}
 
export { Update, UpdateRoute };