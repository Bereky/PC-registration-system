import { history } from './config/history.config';
import ScannedProfile from './ScannedProfile';

const History = () => {
    return ( 
        <div className="w-2/3 h-full flex justify-center items-center flex-col">
            <div className="w-full h-16 flex justify-start items-center">
                <h1 className="w-3/4 text-2xl font-bold">Recent scan</h1>
            </div>

            <div className="w-full h-auto flex justify-center items-center space-y-2 bg-white rounded-xl px-2 flex-col shadow-lg py-6">
                
                { history.map((data) => <ScannedProfile profileData={data} />) }
                
            </div>
        </div>
     );
}
 
export default History;