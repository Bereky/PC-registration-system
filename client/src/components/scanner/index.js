import Search from './Search';
import Header from './Header';
import ResultDisplay from './ResultDisplay';
import NotFound from './NotFound';
import { ChildWrapper, MainWrapper } from './Wrappers';
import { SideWrapper } from '../home';
import TopMenu from '../home/TopMenu';
import Brand from '../home/Brand';
import SideNav from '../home/SideNav';
import LeftWrapper from '../home/LeftWrapper';

const Scanner = () => {
    return ( 
        <MainWrapper>
            <Header />
            <Search />
            <ChildWrapper>
                {/* Diplay if found */}
                <ResultDisplay />

                {/* Error if not found */}
                {/* <NotFound /> */}
                
            </ChildWrapper>
        </MainWrapper> 
     );
}
 
const ScannerRoute = () => {
    return ( 
        <>
            <LeftWrapper>
                <Brand />
                <SideNav route='scanner'/>
            </LeftWrapper> 
            <SideWrapper>
                <TopMenu />
                <Scanner />
            </SideWrapper>
        </>
     );
}
 
export { Scanner, ScannerRoute };