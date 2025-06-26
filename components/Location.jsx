import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Location = () => {
    const [registrationDate, setRegistrationDate] = useState(null);
    const regDatePickerRef = useRef(null);

    return (
        <div className='company-container'>
            <form className="company-form">
                <div className="form-grid">
                    <div>
                        <label id='registrationNo'>Location ID  <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="CLID/01" />
                    </div>
                    <div className="calender">
                        <label id='Registration'>Location Registration Date <label htmlFor="star" className='star'>*</label></label>
                        <DatePicker
                            selected={registrationDate}
                            onChange={date => setRegistrationDate(date)}
                            placeholderText="dd-mm-yyyy"
                            className="date-input"
                            dateFormat="dd-MM-yyyy"
                            ref={regDatePickerRef}
                            customInput={<input type="text" readOnly />}
                        />
                        <img
                            src="/SVG/Asset_Date_selection.svg"
                            alt="calendar icon"
                            className="calendar-icon"
                            onClick={() => regDatePickerRef.current.setOpen(true)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="status">
                        <label id='status'>Location Display Name <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder='CLID/01/State' />
                    </div>
                    <div>
                        <label id='constitutionOfBusiness'>Status <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder='Select Status' />
                        <img src="/SVG/status.svg" alt="status" className="status-icon" />
                    </div>
                    <div>
                        <label id='corporateIdentification'>Country<label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="Select Country (Default India)" />
                        <img src="/SVG/dd.svg" alt="status" className="dd-icon" />
                    </div>
                    <div>
                        <label id='natureOfBusiness'>State/Province <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder='Select State' />
                        <img src="/SVG/dd.svg" alt="status" className="dd-icon" />
                    </div>
                    <div>
                        <label id='pan'>PIN Code <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="6-Digit Code" />
                    </div>
                    <div>
                        <label id='constitutionOfBusiness'>City/District <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder='Enter City/District' />
                    </div>
                    <div>
                        <label id='corporateIdentification'>Address Line 1<label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="Enter Enter Address Line 1" />
                    </div>
                    <div>
                        <label id='corporateIdentification'>Address Line 2<label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="Enter Enter Address Line 2" />
                    </div>
                    <div>
                        <label id='corporateIdentification'>Address Line 3<label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="Enter Enter Address Line 3" />
                    </div>
                    <div>
                        <label id='corporateIdentification'>Address Line 4<label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="Enter Enter Address Line 4" />
                    </div>
                    <img src="/src/location.png" className="locations-icon" alt="locations" />
                </div>
            </form>
            <img src="/SVG/save_1.svg" className="save_1" alt="save_1" />
            <img src="/SVG/save.svg" className="save" alt="save" />
        </div>
    )
}

export default Location
