

function Goal () {
    return (
        <div>
            <h5 style={{textAlign:"center"}}>Quel est votre objectif ?</h5>
            <button type="button" className="big_buttons" value="weight loss">
                <h6>Perte de poids de 0,25kg par semaine</h6>
            </button>
            <button type="button" className="big_buttons" value="extreme weight loss">
                Perte de poids extrême de 0,5kg par semaine
            </button>
            <button type="button" className="big_buttons" value="maintenance">
                Maintien du poids
            </button>
            <button type="button" className="big_buttons" value="muscle gain">
                Prise de poids de 0,5kg par semaine
            </button>
            <button type="button" className="big_buttons" value="extreme muscle gain">
                Prise de poids extrême de 1kg par semaine
            </button>
        </div>
    )
}

export default Goal;