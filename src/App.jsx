import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header'
import CompanyHeader from '../components/CompanyHeader'
import Location from '../components/Location';
import Company from '../components/Company';
import Credentials from '../components/Credentials';
import Bottom from '../components/Bottom';
const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <img src="/SVG/separator.svg" alt="separator" style={{ width: '100%', display: 'block', margin: 0, padding: 0 }} />
            <div className="card shadow rounded-4 mx-auto my-5" style={{ maxWidth: '95%', border: '1.5px solid #e0e0e0', background: '#fff' }}>
              <CompanyHeader />
              <Company />
            </div>
            <Bottom />
          </>
        } />
        <Route path="/Company" element={<>
          <Header />
          <img src="/SVG/separator.svg" alt="separator" style={{ width: '100%', display: 'block', margin: 0, padding: 0 }} />
          <div className="card shadow  mx-auto my-5" style={{ maxWidth: '90%', border: '1.5px solid #e0e0e0', background: '#fff', minHeight: '550px' }}>
            <CompanyHeader />
            <Company />
          </div>
          <Bottom />
        </>} />
        <Route path="/location" element={<>
          <Header />
          <img src="/SVG/separator.svg" alt="separator" style={{ width: '100%', display: 'block', margin: 0, padding: 0 }} />
          <div className="card shadow  mx-auto my-5" style={{ maxWidth: '90%', border: '1.5px solid #e0e0e0', background: '#fff', minHeight: '550px' }}>
            <CompanyHeader />
            <Location />
          </div>
          <Bottom />
        </>} />
        <Route path="/Credentials" element={<>
          <Header />
          <img src="/SVG/separator.svg" alt="separator" style={{ width: '100%', display: 'block', margin: 0, padding: 0 }} />
          <div className="card shadow  mx-auto my-5" style={{ maxWidth: '90%', border: '1.5px solid #e0e0e0', background: '#fff', minHeight: '550px' }}>
            <CompanyHeader />
            <Credentials />
          </div>
          <Bottom />
        </>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
