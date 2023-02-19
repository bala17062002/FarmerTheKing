
import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Soiltestlogin from './Screens/Soiltestlogin';
import { ROUTES } from './utils/routes';
import { ApplyLoanScreen } from './components/ApplyLoan'
import { LoanHome } from './components/Home'
import { LeandingLoansScreen } from './components/LendingLoans'
import { LoanRequestsScreen } from './components/LoanRequests'
import { MyLoansScreen } from './components/MyLoans'
import { ProfileUpdateScreen } from './components/ProfileUpdate'
import { Organicshop } from './Screens/Organicshop';
import { Organichome } from './components/Organichome';
import { Poverview } from './components/Poverview';
import { Fsoiltest } from './components/Fsoiltest';
import { Requestsoil } from './components/Requestsoil';
import { Soilres } from './components/Soilres';
import { Contactus } from './components/Contactus';
import Register from './components/Register';
import { Agentsh } from './components/Agentsh';
import { Approved } from './components/Approved';
import { Pending } from './components/Pending';

export const StateContext = createContext({
  setuserDetails: () => { },
  saveUsertoLocal: () => { },
  userDetails: {},
})



function App() {

  const [userDetails, setuserDetails] = useState({
    username: '',
    email: '',
    isProfileCompleted: false,
  })
  const saveUsertoLocal = () => {
    localStorage.setItem('userDetails', JSON.stringify(userDetails))
  }
  return (
    <BrowserRouter>
      <StateContext.Provider
        value={{ saveUsertoLocal, setuserDetails, userDetails }}
      >

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/loan' element={<LoanHome />} />
          <Route
            path={ROUTES.LOAN_REQUESTS}
            element={LoanRequestsScreen}
          />
          <Route path={ROUTES.MY_LOANS} element={MyLoansScreen} />
          <Route path={ROUTES.APPLY_LOANS} element={ApplyLoanScreen} />
          <Route path={ROUTES.LEADINGS} element={LeandingLoansScreen} />
          <Route
            path={ROUTES.PROFILE_UPDATE}
            element={<ProfileUpdateScreen />}
          />
          <Route path='/Approved' element={<Approved />} />
          <Route path='/Pending' element={<Pending />} />
          <Route path='/Agents' element={<Agentsh />} />
          <Route path="/Register" element={<Register />} />
          <Route path='/Requestsoil' element={<Requestsoil />} />
          <Route path='/Soilres' element={<Soilres />} />
          <Route path='/Contact' element={<Contactus />} />
          <Route path='/Fsoiltest' element={<Fsoiltest />} />
          <Route path='/Poverview' element={<Poverview />} />
          <Route path='/Organichome' element={<Organichome />} />
          <Route path='/soiltest' element={<Soiltestlogin />} />
          <Route path='/organicshop' element={<Organicshop />} />
        </Routes>
      </StateContext.Provider>
    </BrowserRouter>
  );
}


export default App;
