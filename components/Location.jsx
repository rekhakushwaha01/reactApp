import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Location = () => {
    const [registrationDate, setRegistrationDate] = useState(null);
    const regDatePickerRef = useRef(null);

    return (
        <div className="container py-1">
            <div className="card shadow-sm " >
                <div className="card-body compact-form">
                    <form>
                        <div className="row g-2 py-1">
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">Location ID <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="CLID/01" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">Location Registration Date <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <DatePicker
                                        selected={registrationDate}
                                        onChange={date => setRegistrationDate(date)}
                                        placeholderText="dd-mm-yyyy"
                                        className="form-control"
                                        dateFormat="dd-MM-yyyy"
                                        ref={regDatePickerRef}
                                        customInput={<input type="text" readOnly className="form-control" />}
                                    />
                                    <span className="input-group-text bg-white" style={{ cursor: 'pointer' }} onClick={() => regDatePickerRef.current.setOpen(true)}>
                                        <img src="/SVG/Asset_Date_selection.svg" alt="calendar icon" style={{ width: '1.2em', height: '1.2em' }} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">Location Display Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="CLID/01/State" />
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
                                <label className="form-label">Country <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Select Country (Default India)" />
                                    <span className="input-group-text bg-white">
                                        <img src="/SVG/dd.svg" alt="dropdown" style={{ width: '1.2em', height: '1.2em' }} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">State/Province <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Select State" />
                                    <span className="input-group-text bg-white">
                                        <img src="/SVG/dd.svg" alt="dropdown" style={{ width: '1.2em', height: '1.2em' }} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">PIN Code <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="6-Digit Code" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">City/District <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter City/District" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">Address Line 1 <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter Address Line 1" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">Address Line 2 <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter Address Line 2" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">Address Line 3 <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter Address Line 3" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <label className="form-label">Address Line 4 <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter Address Line 4" />
                            </div>
                        </div>
                        <img src="/location.png" className="locations py-3 location" alt="locations" style={{ cursor: 'pointer' }} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Location;
