import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Company = () => {
  const [registrationDate, setRegistrationDate] = useState(null);
  const [incorporationDate, setIncorporationDate] = useState(null);
  const regDatePickerRef = useRef(null);
  const incDatePickerRef = useRef(null);

  return (
    <div className="container ">
      <div className="card shadow-sm ">
        <div className="card-body" >
          <form >
            <div className="row g-3 " >
              <div className="col-lg-3 col-md-4 col-12">
                <label className="form-label">Registration No. <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="D0001" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">Registration Date <span className="text-danger">*</span></label>
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
                <label className="form-label">Company Legal Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Enter Legal Entity Name" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">Company Nick Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Enter Company Nick Name" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">Constitution of Business <span className="text-danger">*</span></label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Select Constitution of Business" />
                  <span className="input-group-text bg-white">
                    <img src="/SVG/dd.svg" alt="dropdown" style={{ width: '1.2em', height: '1.2em' }} />
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">Corporate Identification No. <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Enter CIN" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">Date of Incorporation <span className="text-danger">*</span></label>
                <div className="input-group">
                  <DatePicker
                    selected={incorporationDate}
                    onChange={date => setIncorporationDate(date)}
                    placeholderText="dd-mm-yyyy"
                    className="form-control"
                    dateFormat="dd-MM-yyyy"
                    ref={incDatePickerRef}
                    customInput={<input type="text" readOnly className="form-control" />}
                  />
                  <span className="input-group-text bg-white" style={{ cursor: 'pointer' }} onClick={() => incDatePickerRef.current.setOpen(true)}>
                    <img src="/SVG/Asset_Date_selection.svg" alt="calendar icon" style={{ width: '1.2em', height: '1.2em' }} />
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">Nature of Business <span className="text-danger">*</span></label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Select Nature of Business" />
                  <span className="input-group-text bg-white">
                    <img src="/SVG/dd.svg" alt="dropdown" style={{ width: '1.2em', height: '1.2em' }} />
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">Company PAN <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Enter CIN" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">TAN (Tax Deduction & Collection) <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="D0001" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">MSME Classification <span className="text-danger">*</span></label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Select MSME Classification" />
                  <span className="input-group-text bg-white">
                    <img src="/SVG/dd.svg" alt="dropdown" style={{ width: '1.2em', height: '1.2em' }} />
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">Udyam Registration No. <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="D0001" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">GST Classification <span className="text-danger">*</span></label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Select GST Classification" />
                  <span className="input-group-text bg-white">
                    <img src="/SVG/dd.svg" alt="dropdown" style={{ width: '1.2em', height: '1.2em' }} />
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">Total No. of Locations <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="7" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <label className="form-label">No. of Locations Served <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="5" />
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Company;
