import CancelIcon from '@mui/icons-material/Cancel';

const NotFound = () => {
    return ( 
        <div className="bg-slate-100 w-full h-auto flex justify-center items-center flex-row space-x-2 p-3 rounded-md shadow-md">
            <div className="w-full h-full flex justify-center items-center flex-col p-2">
                <div className="w-full bg-slate-200 h-36 flex justify-center items-center">
                    <CancelIcon sx={{'font-size': '100px'}} className="text-3xl text-red-400  rounded-full"/>
                </div>
                <div className="w-full bg-slate-200 h-20 flex justify-center items-center">
                    <h1 className="w-auto text-4xl font-bold">Profile not found</h1>
                </div>
            </div>
        </div>
     );
}
 
export default NotFound;