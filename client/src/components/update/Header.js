const Header = () => {
    return ( 
        <div className="w-full h-20 flex flex-col justify-end items-center px-5 bg-slate-100 shadow-sm">
            <div className="w-full h-12 flex justify-end items-center">
                <h1 className="w-full text-3xl font-bold">Update</h1>
            </div> 
            <div className="w-full h-8 flex justify-start items-center">
                <h1 className="w-3/4 text-md font-bold">Wed, Oct 8, 2022</h1>
            </div>
        </div>
     );
}
 
export default Header;