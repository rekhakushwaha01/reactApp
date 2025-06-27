import { useNavigate } from 'react-router-dom';
const CompanyHeader = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/location');
  };
  const navigate2 = useNavigate();
  const handleClick2 = () => {
    navigate2('/Credentials');
  };
  const navigate3 = useNavigate();
  const handleClick3 = () => {
    navigate3('/Company');
  };
  return (
    <div className='company-header' >

      <span id='companyRegistration'>Company Registration</span>
      <div className='button-img'>
        <img src="/SVG/separator_1.svg" className="separator" alt="separator_1" />

        <img src="/SVG/company.svg" className="company" alt="company" onClick={handleClick3} style={{ cursor: 'pointer' }} />
        <img src="/SVG/locations.svg" className="locations" alt="locations" onClick={handleClick} style={{ cursor: 'pointer' }} />
        <img src="/SVG/Asset 455.svg" className="asset" alt="asset" onClick={handleClick2} style={{ cursor: 'pointer' }} />

      </div>
    </div>


  )
}

export default CompanyHeader
