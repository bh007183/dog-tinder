import React from "react";
import Grid from "@material-ui/core/Grid";


export default function Cards(props) {


  return (
    <div>
      <Grid container direction="row" justify="center" spacing={1}>
        <Grid item xs={2}>
          
        </Grid>
        <Grid item xs={8}>
            <button onClick={props.delete} value={props.id} >X</button>
          
            <img
              style={{ height: "50vw", width: "100%" }}
              src={props.image}
            ></img>
          
        </Grid>
        <Grid item xs={2}>
          
        </Grid>
      </Grid>
    </div>
  );
}
