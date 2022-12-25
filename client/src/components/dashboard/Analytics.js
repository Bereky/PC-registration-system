import SearchIcon from '@mui/icons-material/Search';

import NorthIcon from '@mui/icons-material/ArrowUpward';
import SouthIcon from '@mui/icons-material/ArrowDownward';

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
                    <SouthIcon sx={{'font-size': '90px'}} className=" text-green-400 rounded-full bg-white"/>
                </div>
                <div className="w-1/2 h-32 flex justify-center items-center flex-col space-y-4 text-white">
                    <h1 className="w-5/6 text-md font-bold">Entered campus</h1>
                    <h1 className="w-3/4 text-5xl font-bold">41</h1>
                </div>
            </div>
            <div className="w-72 h-32 bg-red-400 flex flex-row justify-center items-center rounded-xl shadow-lg">
                <div className="w-1/2 h-full  flex justify-center items-center">
                    <NorthIcon sx={{'font-size': '90px'}} className="text-red-400 bg-white rounded-full"/>
                </div>
                <div className="w-1/2 h-32 flex justify-center items-center flex-col space-y-4 text-white">
                    <h1 className="w-5/6 text-md font-bold">Exited campus</h1>
                    <h1 className="w-3/4 text-5xl font-bold">35</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Analytis;