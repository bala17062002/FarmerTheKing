
import './App.css';
import React, { createContext, useState } from 'react';
import { ReactDOM } from 'react-dom';
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
          <Route path='/soiltest' element={<Soiltestlogin />} />
        </Routes>
      </StateContext.Provider>
    </BrowserRouter>
  );
}


export default App;
