import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
export default function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{display:"flex", justifyContent:"center"}} variant="dense">
          <Link style={{marginRight:"2px"}} to="/saved">
            <Button variant="outlined">Saved</Button>
          </Link>
          <Link style={{marginLeft:"2px"}} to="/">
            <Button  variant="outlined">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
