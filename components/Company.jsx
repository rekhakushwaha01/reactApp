import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

const Company = () => {
  const [registrationDate, setRegistrationDate] = useState(null);
  const [incorporationDate, setIncorporationDate] = useState(null);
  const regDatePickerRef = useRef(null);
  const incDatePickerRef = useRef(null);

  return (
    <div className='company-container'>
      <form className="company-form">
        <div className="form-grid">
          <div>
            <label id='registrationNo'>Registration No. <label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder="D0001" />
          </div>
          <div className="calender">
            <label id='Registration'>Registration Date <label htmlFor="star" className='star'>*</label></label>
            <DatePicker
              selected={registrationDate}
              onChange={date => setRegistrationDate(date)}
              placeholderText="dd-mm-yyyy"
              className="date-input"
              dateFormat="dd-MM-yyyy"
              ref={regDatePickerRef}
              customInput={<input type="text" readOnly />}
            />
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/SVG/Asset_Date_selection.svg"
                alt="calendar icon"
                className="calendar-icon"
                onClick={() => regDatePickerRef.current.setOpen(true)}
                style={{ cursor: 'pointer' }}
              />
              {registrationDate && (
                <span style={{ marginLeft: 6, fontSize: '0.9em', color: '#333' }}>
                  {formatDate(registrationDate)}
                </span>
              )}
            </span>
          </div>
          <div>
            <label id='companyLegalName'>Company Legal Name <label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder="Enter Legal Entity Name" />
          </div>
          <div>
            <label id='companyNickName'>Company Nick Name <label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder="Enter Company Nick Name" />
          </div>
          <div>
            <label id='constitutionOfBusiness'>Constitution of Business <label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder='Select Constitution of Business' />
            <img src="/SVG/dd.svg" alt="status" className="dd-icon" />
          </div>
          <div>
            <label id='corporateIdentification'>Corporate Identification No.<label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder="Enter CIN" />
          </div>
          <div className="calender">
            <label id='dateOfIncorporation'>Date of Incorporation <label htmlFor="star" className='star'>*</label></label>
            <DatePicker
              selected={incorporationDate}
              onChange={date => setIncorporationDate(date)}
              placeholderText="dd-mm-yyyy"
              className="date-input"
              dateFormat="dd-MM-yyyy"
              ref={incDatePickerRef}
              customInput={<input type="text" readOnly />}
            />
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/SVG/Asset_Date_selection.svg"
                alt="calendar icon"
                className="calendar-icon"
                onClick={() => incDatePickerRef.current.setOpen(true)}
                style={{ cursor: 'pointer' }}
              />
              {incorporationDate && (
                <span style={{ marginLeft: 6, fontSize: '0.9em', color: '#333' }}>
                  {formatDate(incorporationDate)}
                </span>
              )}
            </span>
          </div>
          <div>
            <label id='natureOfBusiness'>Nature of Business <label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder='Select Nature of Business' />
            <img src="/SVG/dd.svg" alt="status" className="dd-icon" />
          </div>
          <div>
            <label id='pan'>Company PAN <label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder="Enter CIN" />
          </div>
          <div>
            <label id='tan'>TAN (Tax Deduction & Collection )<label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder="D0001" />
          </div>
          <div>
            <label id='msmeClassification'>MSME Classification <label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder='Select MSME Classification' />
            <img src="/SVG/dd.svg" alt="status" className="dd-icon" />
          </div>
          <div>
            <label id='udyamRegistration'>Udyam Registration No. <label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder="D0001" />
          </div>
          <div className="dd">
            <label id='dd'> GST Classification <label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder='Select GST Classification ' />


            <img src="/SVG/dd.svg" alt="status" className="dd-icon" />
          </div>
          <div>
            <label id='locations'>Total No.of Locations<label htmlFor="star" className='star'>*</label></label>
            <input type="" placeholder="7" />
          </div>
          <div>
            <label id='locationsServed'>No. of Locations Served <label htmlFor="star" className='star'>*</label></label>
            <input type="" placeholder="5" />
          </div>
          <div className="status">
            <label id='status'>Status <label htmlFor="star" className='star'>*</label></label>
            <input type="text" placeholder='Select Status' />
            <img src="/SVG/status.svg" alt="status" className="status-icon" />
          </div>
        </div>
      </form>
      <img src="/SVG/save_1.svg" className="save_1" alt="save_1" /><img src="/SVG/save.svg" className="save" alt="save" />
    </div>

  )
}

export default Company
