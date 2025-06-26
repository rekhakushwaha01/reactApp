import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header'
import CompanyHeader from '../components/CompanyHeader'
import Location from '../components/Location';
import Company from '../components/company';
import Credentials from '../components/Credentials';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <CompanyHeader />
            <Company />
          </>
        } />
        <Route path="/Company" element={<>
          <Header />
          <CompanyHeader />
          <Company />
        </>} />
        <Route path="/location" element={<>
          <Header />
          <CompanyHeader />
          <Location />
        </>} />
        <Route path="/Credentials" element={<>
          <Header />
          <CompanyHeader />
          <Credentials />
        </>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
