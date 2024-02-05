import { useState } from "react";


function User() {
    const [usage, setUsage] = useState('')
    const [visible, setVisible] = useState(false);
    const [password, setPassword] = useState('');

    const toggleVisibility = () => {
        setVisible(!visible);
      };
    
    return (
      <div>
          <form className='form_groups'>
            <h5>Vous y êtes presque ! Créez votre compte.</h5>
            <div className='form_control'>
                <input className='email_input' type="email" name="email" placeholder='Adresse e-mail'></input>
                <div className='password_input' >
                <input 
                    type={visible ? 'email' : 'password'} 
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Créer un mot de passe'>
                </input>
                <button
                    type="button"
                    className="toggle-password"
                    onClick={toggleVisibility}>
                         {visible ? 'Hide' : 'Show'}
                </button>
                <br/>
                <p style={{fontSize:'12px'}}>Le mot de passe doit comporter au moins 10 caractères, sans espaces.</p>
                </div>
                
            </div>
        </form>
      </div>
    );
  }
  
  export default User;