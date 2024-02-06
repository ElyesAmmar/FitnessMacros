import { useSelector, useDispatch } from "react-redux";
import { addUserData } from "../../JS/actions/user";

function Goal () {

    const dispatch = useDispatch();
    const errors = useSelector((state)=> state.userReducer.errors);
    const user = useSelector((state)=> state.userReducer.user);
    const HandleData = (e) => {
        const goal = e.target.getAttribute('value');
        dispatch(addUserData({goal: goal}));
    }
    
    return (
        <div>
            <h5 style={{textAlign:"center"}}>Quel est votre objectif ?</h5>
            <button type="button" className="big_buttons" value="weight loss" onClick={HandleData} autoFocus={user.goal === "weight loss"}>
                Perte de poids de 0,25kg par semaine
            </button>
            <button type="button" className="big_buttons" value="extreme weight loss" onClick={HandleData} autoFocus={user.goal === "extreme weight loss"}>
                Perte de poids extrême de 0,5kg par semaine
            </button>
            <button type="button" className="big_buttons" value="maintenance" onClick={HandleData} autoFocus={user.goal === "maintenance"}>
                Maintien du poids
            </button>
            <button type="button" className="big_buttons" value="muscle gain" onClick={HandleData} autoFocus={user.goal === "weight loss"}>
                Prise de poids de 0,5kg par semaine
            </button>
            <button type="button" className="big_buttons" value="extreme muscle gain" onClick={HandleData} autoFocus={user.goal === "extreme muscle gain"}>
                Prise de poids extrême de 1kg par semaine
            </button>
            {errors.goal && <p style={{fontSize: '12px', color: 'red', marginLeft:'40px'}}>{errors.goal}</p>}
        </div>
    )
}

export default Goal;