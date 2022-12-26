const ResultImage = (props) => {
    return ( 
        <div className="bg-slate-200 w-2/5 h-72 flex justify-center items-center rounded-md">
            <div className="bg-slate-100 w-64 h-64 flex justify-center items-center px-1 rounded-full ">
                <img src={props.image} alt="profile_avatar" className="rounded-full w-full"/>
            </div>
        </div>
     );
}
 
export default ResultImage;