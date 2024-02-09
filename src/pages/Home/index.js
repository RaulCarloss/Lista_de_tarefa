import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './home.css'

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Home(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      
      await signInWithEmailAndPassword(auth,email,password)

      .then(() => {
        // navegar para /admin
        navigate('/admin', {replace: true })
      })
      .catch(() => {
        console.log("ERRO AO FAZER LOGIN")
      })

    }else{
      alert("Preencha todos os campos!")
    }
  }

    return(
      <div className="home-container">
        <h1>Lista de tarefas</h1>
        <span>Gerencie sua agenda de forma facil.</span>

        <form className="form" onSubmit={handleLogin}>
          <input 
            type="text"
            placeholder="Digite seu email..."
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="********"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />

          <button type="submit">Acessar</button>
        </form>

        <Link className="button-link" to="/register">
          Não possui uma conta? Cadastre-se
        </Link>

      </div>
    )
  }
  