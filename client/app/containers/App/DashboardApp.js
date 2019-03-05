import React, { Component } from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { Button, SplitButton, MenuItem, FormControl, FormGroup, InputGroup, Col, Checkbox, OverlayTrigger, Tooltip, textarea, ButtonToolbar, ToggleButtonGroup, ToggleButton, Modal } from 'react-bootstrap';


const DashboardApp = ({ children }) => (
  <div className="margin10">
    <Header />
    <div className="row">
    <div className="col-md-3">
      hello
    </div>
    <div className="col-md-9">
    {children}
    </div>
      
    </div>
    <Footer />
  </div>
);

export default DashboardApp;
