import React from 'react';
import { useSelector } from "react-redux";


function FavoriteFood() {
    const favoriteFood = useSelector((state)=> state.foodReducer.favoriteFood);
    console.log(favoriteFood);
    
    return(
        <div>
        </div>
    )
}

export default FavoriteFood;