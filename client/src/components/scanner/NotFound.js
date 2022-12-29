import CancelIcon from '@mui/icons-material/Cancel';

const NotFound = () => {
    return ( 
        <div className="w-full h-full flex justify-center items-center flex-col p-2 rounded-md shadow-sm bg-slate-100 my-3">
            <div className="w-full h-40 flex justify-center items-center">
                <CancelIcon sx={{'font-size': '110px'}} className="text-3xl text-red-400 rounded-full"/>
            </div>
            <div className="w-full h-20 flex justify-center items-center">
                <h1 className="w-auto text-4xl font-bold">Not found</h1>
            </div>
        </div>
     );
}
 
export default NotFound;