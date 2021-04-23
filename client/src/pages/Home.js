import React, {useEffect} from 'react'
import configureStore from "../store/configureStore";
import Grid from "@material-ui/core/Grid"
import {useDispatch, useSelector} from "react-redux"
import {getNewDogs} from "../store/newdogs"


export default function Home() {

    const dispatch = useDispatch()
    const dogs = useSelector(state => state.entities.dogs)

    useEffect(() => {
       dispatch(getNewDogs())
    }, [])
    
    return (

        <Grid container direction="row" justify="center" spacing={1}>

            <Grid container direction="row" justify="center">
                {dogs.payload ? (<img style={{height: "50vw"}} src={dogs.payload.message}></img>) : (<></>)}
               
            </Grid>
            

        </Grid>
        
            
      
    )
}
