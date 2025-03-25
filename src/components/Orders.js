export const Orders = () => {
    return <div className="container">
        <main>
            <div className="py-5 text-center">
                <h2>Checkout form</h2>
                <p className="lead">Please fill out this form to complete your purchase.</p>
            </div>
            <form className="needs-validation" noValidate>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label className="form-label">Product</label>
                        <input className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label">Quantity</label>
                        <input className="form-control" />
                    </div>
                </div>
                <hr className="my-4" />
                <button className="w-100 btn btn-primary btn-lg" type="submit">Buy</button>
            </form>
        </main>
    </div>
}
    
