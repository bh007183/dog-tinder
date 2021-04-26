import React, {useEffect} from "react";
import Cards from "../components/cards"
import { useDispatch, useSelector } from "react-redux";
import { apiGetLiked, apiRemoveLiked } from "../store/Liked";

export default function Saved() {
    const dispatch = useDispatch();
    
  useEffect(() => {
      dispatch(apiGetLiked())
  }, [])

  const onDelete = (event) => {
    dispatch(apiRemoveLiked(event.currentTarget.value)).then(window.location.href = "/saved")
  }
  const liked = useSelector((state) => state.entities.liked.value)
  
    return (
        <div>
            {liked.length ? [...liked].reverse().map(dog => <Cards key={dog._id} delete={onDelete} id={dog._id} image={dog.message}/>) : <></>}
        </div>
    )
}
