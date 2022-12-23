import Search from './Search';
import Header from './Header';
import ResultDisplay from './ResultDisplay';
import NotFound from './NotFound';
import { ChildWrapper, MainWrapper } from './Wrappers';
import { SideWrapper } from '../home';
import { useSelector } from 'react-redux';

const Scanner = () => {

    const scan_result = useSelector((state) => state.scanner.current_scan[0] )

    return ( 
        <SideWrapper>
            <MainWrapper>
                <Header />
                <Search />
                <ChildWrapper>
                { scan_result? <ResultDisplay /> : <NotFound /> }
                </ChildWrapper>
            </MainWrapper> 
        </SideWrapper>
     );
}
 
export { Scanner };