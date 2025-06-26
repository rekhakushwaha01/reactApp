const Credentials = () => {
    return (
        <div className='main-container company-container'>

            <form className="company-form">
                <div className="form-grid">
                    <div>
                        <label id='LocationName'>Location Display Name  <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="Plant 1, Thane, 400601, MH" />
                    </div>

                    <div>
                        <label id='GSTIN'>GSTIN <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="27AAGCD4662E1ZP" />
                    </div>
                    <div className="status">
                        <label id='status'>Status <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder='Select Status' />
                        <img src="/SVG/status.svg" alt="status" className="status-icon" />
                    </div>
                    <br />
                    <div>
                        <label id='Applicability'>PF Act Applicability <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder='DD/Yes, No' />
                        <img src="/SVG/dd.svg" alt="status" className="dd-icon" />
                    </div>
                    <div>
                        <label id='Registration'>PF Registration No.<label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="Smart Field" />
                    </div>

                    <div>
                        <label id='ESI'>ESI Act Applicability <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder='DD/Yes, No' />
                        <img src="/SVG/dd.svg" alt="status" className="dd-icon" />
                    </div>
                    <div>
                        <label id='ESIRegistration'>ESI Registration No <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="Smart Field" />
                    </div>
                    <div>
                        <label id='PFAct'>PF Act Applicability <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder='DD/Yes, No' />
                        <img src="/SVG/dd.svg" alt="status" className="dd-icon" />
                    </div>
                    <div>
                        <label >PF Registration No.<label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="Smart Field" />
                    </div>

                    <div className="dd">
                        <label id='dd'>LWF Act Applicability <label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder='DD/Yes, No ' />
                        <img src="/SVG/dd.svg" alt="status" className="dd-icon" />
                    </div>
                    <div>
                        <label > LWF Registration No.<label htmlFor="star" className='star'>*</label></label>
                        <input type="text" placeholder="Smart Field" />
                    </div>


                </div>
            </form>
            <img src="/SVG/save_1.svg" className="save_1" alt="save_1" /><img src="/SVG/save.svg" className="save" alt="save" />
        </div>
    )
}

export default Credentials
