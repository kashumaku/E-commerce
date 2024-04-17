const Dashboard = () => {
    return (
        <div className="h-screen">
            <h1 className="text-3xl font-bold text-white flex justify-center m-4">Dashboard</h1>
            <div className="grid grid-cols-3 gap-4 px-8">
                <div className="row-span-2  bg-slate-400">
                    <p>405 Users</p>
                </div>
                <div className="w-[300px] h-[250px] bg-slate-400">
                    <p>25 pending orders</p>
                </div>
                <div className="w-[300px] h-[250px] bg-slate-400">
                    <p>250 sold products</p>
                </div>
                <div className="w-[300px] h-[250px] bg-slate-400">
                    <p>250 sold products</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;