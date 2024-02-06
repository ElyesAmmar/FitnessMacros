import { ADD_USER_DATA, VALIDATE_USER, USER_REGISTER } from '../constant/actionsTypes'


export const addUserData = (Data) =>{
    console.log('user',Data);
    return {
        type: ADD_USER_DATA,
        payload: Data
    }
}

export const validateUser = (data,page) => {
    console.log('from validator',data);
    const errors = {}
    if (page === 1 & !data.weight ||data.weight < 20 || data.weight > 500) {
        errors.weight = "Veuillez saisir un poids valide entre 20 et 500";
    }
    if (page === 1 & !data.height || data.height < 66 || data.height > 241) {
        errors.height = "Veuillez saisir un hauteur valide entre 66 & 241";
    } 
    if (page === 1 & !data.username) {
        errors.username = "Veuillez saisir un prénom valide.";
    }
    if (page === 1 & !data.gender) {
        errors.gender = "Sélectionnez le sexe.";
    } 
    if (page === 1 & !data.date_of_birth) {
        errors.date_of_birth = "Veuillez indiquer une date de naissance valide (dd/mm/yyyy).";
    } 
    if (page === 2 & !data.goal) {{
        errors.goal= "Veuillez selectionner un choix";
    }}
    console.log('errors',errors);
    return {
        type: VALIDATE_USER,
        payload: errors
    }

}
    