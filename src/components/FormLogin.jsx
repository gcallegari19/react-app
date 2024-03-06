import { useState } from 'react';
import '../assets/style/FormLogin.css'

function FormLogin() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [mensajeBievenida, setMensajeBievenida] = useState('');
  
    const handleUsuarioChange = (event) => {
      const usuarioIngresado = event.target.value;
      setUsuario(usuarioIngresado);
      console.log(`El usuario que ingreso ${usuarioIngresado}`)
      setMensajeBievenida(`Hola ${usuarioIngresado}`);
    };
  
    const handlePasswordChange = (event) => {
      const password = event.target.value;
      setPassword(password);
    };
  
    const handleLogin = () => {
      // Simplemente para demostración, puedes implementar la autenticación real aquí.
      if (usuario === 'peperina' && password === '123456') {
        setMensajeBievenida(`Bienvenida ${usuario} a nuestro sitio web`);
      } else {
        setMensajeBievenida('Usuario o contraseña incorrectos');
      }
    };

    return (     
    
    <div className="login-wrap">
        <div className='formLogin'>
            <label htmlFor="usuario">Usuario:</label>
            <input type="text" value={usuario} onChange={handleUsuarioChange} name="usuario" />      
            <label htmlFor="password">Contraseña:</label>      
            <input type="password" value={password} onChange={handlePasswordChange} name="password"/>  
            <button type='submit' onClick={handleLogin}>Entrar</button>
        </div>
    <div className='mensaje'>
        <p>{mensajeBievenida}</p>
    </div>
  </div>  );
}

export default FormLogin;