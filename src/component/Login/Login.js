import React,{useState} from 'react'
import Logo from '../../imagens/icons.png'
import {ContainerLogin} from './AppStyled'

import {AiFillLock} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import api from '../../services/api'

import {history} from '../../history'

function App() {

  const [email_usuario, setEmail] = useState('')
  const [senha_usuario, setSenha] = useState('')

  async function handleSubmit(e){
    e.preventDefault()

    const resp = await api.get('',{
      email_usuario,
      senha_usuario
    }).then(resp => {
      const {data} = resp
      if(data){
        localStorage.setItem('app-token', email_usuario+senha_usuario)
        history.push('/dashboard')
      }
    })
      

  }

  return (
    <ContainerLogin>
      <div className="boxLogin">
          <div className="boxField">
            <div className="boxLogo">
              <img src={Logo} alt="Logo"/>
              <span>Fazer login no TrackCash:</span>
              </div>
                <form onSubmit={handleSubmit}>
                  <div className="boxFieldInputs">
                    <input required className="email" type="email" placeholder="Digite seu Email" value={email_usuario} onChange={e => setEmail(e.target.value)}/>
                    <MdEmail className="icons"/>
                  </div>
                  <div className="boxFieldInputs">
                    <input required className="senha" type="password" placeholder="Digite sua senha" value={senha_usuario} onChange={e => setSenha(e.target.value)}/>
                    <AiFillLock className="icons"/>
                  </div>
                  <button type="submit">Acessar</button>
                </form>
                <div className="boxInfo">
                  <div className="check">
                    <input type="checkbox" /><span href="/cadastrar">Lembrar Senha ?</span>
                  </div>
                    <a href="">Recuperar Senha</a>
                </div>
                <div className="cadastro">
                  <a href="/cadastrar">Cadastrase</a>
                </div>
          </div>
          <div className="boxIntro">
              <span>Muito mais que um conciliador financeiro!</span>
              <p>A melhor ferramenta no mercado e a única com processo automatizado, que compara as informações entre Plataformas, MarketPlaces, Transportadoras, Meios de Pagamento e Instituições Financeiras!</p>
          </div>
      </div>
    </ContainerLogin>
  );
}

export default App;
