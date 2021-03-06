import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import GetAppointment from './components/GetAppointment/GetAppointment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Appointments from './components/Admin/Appointments/Appointments';
import Patients from './components/Admin/Patients/Patients';
import GetPrescriptions from './components/Admin/GetPrescriptions/GetPrescriptions';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/getAppointment">
            <Navbar></Navbar>
            <GetAppointment></GetAppointment>
          </Route>
          <Route path="/doctorsDashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/doctorsAppointment">
            <Appointments></Appointments>
          </Route>
          <Route path="/getPrescription">
            <GetPrescriptions></GetPrescriptions>
          </Route>
          <Route path="/patients">
            <Patients></Patients>
          </Route>
          <Route exact path="/">
            <Navbar></Navbar>
            <Header></Header>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
