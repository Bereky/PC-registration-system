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
import { useSelector } from 'react-redux';

const Scanner = () => {

    const scan_result = useSelector((state) => state.scanner.current_scan[0] )

    return ( 
        <MainWrapper>
            <Header />
            <Search />
            <ChildWrapper>
            { scan_result? <ResultDisplay /> : <NotFound /> }
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