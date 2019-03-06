import React, { Component } from 'react';
import Header from '../Home/Header';
import Sidebar from '../Home/Sidebar';
import Footer from '../Home/Footer';
import { Button, SplitButton, MenuItem, FormControl, FormGroup, InputGroup, Col, Checkbox, OverlayTrigger, Tooltip, textarea, ButtonToolbar, ToggleButtonGroup, ToggleButton, Modal } from 'react-bootstrap';


const DashboardApp = ({ children }) => (
  <div className="margin10">
    <Sidebar/>
    <div className="main">
    <Header />
    <div className="col-md-12">
    {children}
    </div>
    <Footer />
    </div>
    
  </div>
);

export default DashboardApp;
