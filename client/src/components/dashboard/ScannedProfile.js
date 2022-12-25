import NorthIcon from '@mui/icons-material/ArrowUpward';
import SouthIcon from '@mui/icons-material/ArrowDownward';

const ScannedProfile = (props) => {
    
    return ( 
        <div className="w-full h-16 flex justify-start items-center mx-3 bg-slate-100 rounded-md space-x-1 outline outline-2 outline-slate-200">
            <div className="w-auto h-16 flex justify-center items-center px-3  rounded-md">
                <div className="w-12 h-12 flex justify-start items-center bg-amber-500 rounded-full">
                    <img src={props.profileData.photo} alt="" className="rounded-full w-full"/>
                </div>
            </div>
            <div className="w-2/6 h-16 flex justify-start items-center px-3  rounded-md">
                <h1 className="w-3/4 text-md">{props.profileData.name}</h1>
            </div>
            <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                <h1 className="w-3/4 text-md ">{props.profileData.id}</h1>
            </div>
            <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                <h1 className="w-3/4 text-md">{props.profileData.timeStamp}</h1>
            </div>
            <div className="w-1/6 h-16 flex justify-center items-center px-3 rounded-md flex-row space-x-2">
                {
                    props.profileData.verified? <SouthIcon sx={{'font-size': '30px'}} className=" text-green-400 rounded-full"/> : <NorthIcon sx={{'font-size': '30px'}} className=" text-red-400 rounded-full"/>
                }
                
            </div>
        </div>
     );
}
 
export default ScannedProfile;