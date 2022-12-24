import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';

const Analytis = () => {
    return ( 
        <div className="w-full h-40 flex justify-between items-center flex-row px-5 border-solid border-b-slate-200 border-b-2">
            <div className="w-72 h-32 bg-blue-400 flex flex-row justify-center items-center rounded-xl shadow-lg">
                <div className="w-1/2 h-full  flex justify-center items-center">
                    <SearchIcon sx={{'font-size': '90px'}} className="text-3xl p-2 bg-white text-blue-400 rounded-full"/>
                </div>
                <div className="w-1/2 h-32 flex justify-center items-center flex-col space-y-4 text-white">
                    <h1 className="w-3/4 text-md font-bold">Total Scanned</h1>
                    <h1 className="w-3/4 text-5xl font-bold">76</h1>
                </div>
            </div>
            <div className="w-72 h-32 bg-green-400 flex flex-row justify-center items-center rounded-xl shadow-lg">
                <div className="w-1/2 h-full  flex justify-center items-center">
                    <VerifiedIcon sx={{'font-size': '100px'}} className="text-3xl text-white rounded-full"/>
                </div>
                <div className="w-1/2 h-32 flex justify-center items-center flex-col space-y-4 text-white">
                    <h1 className="w-3/4 text-md font-bold">Total Verified</h1>
                    <h1 className="w-3/4 text-5xl font-bold">71</h1>
                </div>
            </div>
            <div className="w-72 h-32 bg-red-400 flex flex-row justify-center items-center rounded-xl shadow-lg">
                <div className="w-1/2 h-full  flex justify-center items-center">
                    <CancelIcon sx={{'font-size': '100px'}} className="text-3xl text-white  rounded-full"/>
                </div>
                <div className="w-1/2 h-32 flex justify-center items-center flex-col space-y-4 text-white">
                    <h1 className="w-3/4 text-md font-bold">Total Rejected</h1>
                    <h1 className="w-3/4 text-5xl font-bold">5</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Analytis;