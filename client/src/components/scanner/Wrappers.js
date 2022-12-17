const MainWrapper = ({children}) => {
    return (
        <div className="w-full h-auto flex flex-col"> 
            {children}
        </div>
     );
}

const ChildWrapper = ({children}) => {
    return ( 
        <div className=" w-full h-auto flex justify-start items-center my-3 px-5">
            {children}
        </div>
     );
}
 
export { MainWrapper, ChildWrapper };