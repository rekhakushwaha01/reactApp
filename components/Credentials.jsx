const Credentials = () => {
    return (
        <div className="container py-1">
            <div className="card shadow-sm " >
                <div className="card-body compact-form">
                    <form>
                        <div className="row g-2">
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">Location Display Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Plant 1, Thane, 400601, MH" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">GSTIN <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="27AAGCD4662E1ZP" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">Status <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Select Status" />
                                    <span className="input-group-text bg-white">
                                        <img src="/SVG/status.svg" alt="status" style={{ width: '1.2em', height: '1.2em' }} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">PF Act Applicability <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="DD/Yes, No" />
                                    <span className="input-group-text bg-white">
                                        <img src="/SVG/dd.svg" alt="dropdown" style={{ width: '1.2em', height: '1.2em' }} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">PF Registration No. <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Smart Field" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">ESI Act Applicability <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="DD/Yes, No" />
                                    <span className="input-group-text bg-white">
                                        <img src="/SVG/dd.svg" alt="dropdown" style={{ width: '1.2em', height: '1.2em' }} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">ESI Registration No <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Smart Field" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">PF Act Applicability <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="DD/Yes, No" />
                                    <span className="input-group-text bg-white">
                                        <img src="/SVG/dd.svg" alt="dropdown" style={{ width: '1.2em', height: '1.2em' }} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">PF Registration No. <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Smart Field" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">LWF Act Applicability <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="DD/Yes, No" />
                                    <span className="input-group-text bg-white">
                                        <img src="/SVG/dd.svg" alt="dropdown" style={{ width: '1.2em', height: '1.2em' }} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">LWF Registration No. <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Smart Field" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Credentials;
