import Header from './Header';
import Search from './Search';
import { SideWrapper } from '../home';

import NotFound from './NotFound';
import UpdateData from './UpdateData';

const Update = () => {
    return ( 
        <SideWrapper>
            <div className="w-full h-auto flex flex-col"> 
            
                <Header />

                <Search />

                {/* <UpdateData /> */}

                {/* <NotFound /> */}

            </div>
        </SideWrapper>
     );
}

 
export { Update };