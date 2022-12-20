const ResultImage = () => {
    return ( 
        <div className="bg-slate-200 w-2/5 h-auto flex justify-center items-center rounded-md py-5">
            <div className="bg-slate-100 w-72 h-72 flex justify-center items-center px-1 rounded-full ">
                <img src="https://api.lorem.space/image/face?w=450&h=450" alt="" className="rounded-full w-full"/>
            </div>
        </div>
     );
}
 
export default ResultImage;