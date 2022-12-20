import ComputerIcon from '@mui/icons-material/Computer';

const Brand = () => {
    return ( 
        <div className="w-full h-auto flex flex-col">
            <div className="w-full h-32 flex justify-center items-center"> 
                <div className="w-full h-full flex justify-center items-center flex-row">
                    <div className="w-16  h-20 flex justify-center items-center"> 
                        <ComputerIcon  fontSize="large"/>
                    </div>
                    <div className="w-2/4 h-20 flex justify-start items-center">
                        <h1 className="w-3/4 text-4xl font-extrabold">PCRS</h1>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Brand;