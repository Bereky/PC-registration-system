const Header = () => {
    return ( 
        <div className="w-full h-20 flex flex-col justify-end items-center px-5 bg-slate-100 shadow-sm mb-5">
            <div className="w-full h-10 flex justify-end items-center">
                <h1 className="w-full text-2xl font-bold">Dashboard</h1>
            </div> 
            <div className="w-full h-8 flex justify-start items-center">
                <h1 className="w-3/4 text-sm font-bold">Welcome, here is what's happening today</h1>
            </div>
        </div>
     );
}
 
export default Header;