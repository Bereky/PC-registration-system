const MainWrapper = ({children}) => {
    return (
        <div className="w-full h-auto flex flex-col"> 
            {children}
        </div>
     );
}

const ChildWrapper = ({children}) => {
    return ( 
        <div className=" w-full h-auto flex justify-start items-center px-3">
            {children}
        </div>
     );
}
 
export { MainWrapper, ChildWrapper };