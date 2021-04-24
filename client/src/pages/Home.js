import React, { useEffect } from "react";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getNewDogs } from "../store/newdogs";
import { apiLiked } from "../store/Liked";
import "./style.css"

export default function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.entities.dogs);
  const liked = useSelector((state) => state.entities.liked)

  useEffect(() => {
    dispatch(getNewDogs());
  }, [liked.value.length]);

  const downClick = (event) => {
      if(event.currentTarget){
        dispatch(getNewDogs())
      }
  }
  const upClick = (event) => {
      if(event.currentTarget){
        dispatch(apiLiked(dogs.payload))
      }
  }

  return (
    <Grid container direction="row" justify="center" spacing={1}>
      <Grid item xs={2}>
        <Button onClick={downClick}className="thumbDown">
          <ThumbDown style={{color:"white"}}/>
        </Button>
      </Grid>
      <Grid item xs={8} >
        {dogs.payload ? (
          <img style={{ height: "50vw", width: "100%"  }} src={dogs.payload.message}></img>
        ) : (
          <></>
        )}
      </Grid>
      <Grid item xs={2}>
        <Button onClick={upClick} className="thumbUp">
          <ThumbUp value="up" style={{color:"white"}}/>
        </Button>
      </Grid>
    </Grid>
  );
}
