import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/saved">
            <Button variant="outlined">Saved</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
