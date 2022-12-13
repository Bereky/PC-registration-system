import Search from './Search';

const Update = () => {
    return ( 
        <div className="w-full h-full flex flex-col px-8"> 
            <div className="w-full h-40 flex flex-col justify-center items-center">
                <div className="w-full h-12 flex justify-end items-center">
                    <h1 className="w-full text-3xl font-bold">Update</h1>
                </div> 
            </div>

            <Search />

        </div>
     );
}
 
export default Update;