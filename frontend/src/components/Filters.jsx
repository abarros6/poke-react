const Filters = () => {
    return (
        <div className="">
            <div className="card bg-base-100 w-full max-w-sm shrink-0">
                <div className="card-body">
                    <h2 className="text-3xl">Filters</h2>
                    <div className="divider m-0"></div>
                    <div className="flex gap-4 flex-row items-center">
                        <p>Id:</p>
                        <input className="input input-bordered" />
                    </div>

                    <div className="flex gap-4 flex-row items-center">
                        <p>Name:</p>
                        <input className="input input-bordered" />
                    </div>

                    <div className="flex gap-4 flex-row items-center">
                        <p>Type1:</p>
                        <input className="input input-bordered" />
                    </div>

                    <div className="flex gap-4 flex-row items-center">
                        <p>Type2:</p>
                        <input className="input input-bordered" />
                    </div>

                    <div className="divider m-0"></div>
                    
                    <div className="form-control">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filters