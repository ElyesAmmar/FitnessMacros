

function Activity() {
  return (
    <div>
        <h5 style={{textAlign:"center"}}>Quel est votre objectif ?</h5>
            <button type="button" className="big_buttons" value="sedentary">
                <h6>Sédentaire</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Peu ou pas d'exercice</p>
            </button>
            <button type="button" className="big_buttons" value="lightly active">
                <h6>légèrement actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>S'entraîner 1 à 3 fois par semaine</p>
            </button>
            <button type="button" className="big_buttons" value="moderatly active">
                <h6>Modérément actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement modéré 3 à 5 jours/semaine</p>
            </button>
            <button type="button" className="big_buttons" value="very active">
                <h6>Très actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement intensif 6 à 7 jours par semaine</p>
            </button>
            <button type="button" className="big_buttons" value="extra active">
                <h6>Extra actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement très dur et travail physique ou 2x entraînement</p>
            </button>
    </div>
  );
}

export default Activity;
