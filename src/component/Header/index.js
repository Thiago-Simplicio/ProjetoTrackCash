import React from 'react'

import {FaUserCircle} from 'react-icons/fa'
import Logo from '../../imagens/logo.png'
import {ContainerHeader} from './HeaderStyled'

const Header = () => {
    return(
        <ContainerHeader>
            <img src={Logo} alt="Logo"/>
            <FaUserCircle className="user-icon"/>
        </ContainerHeader>
    )
}

export default Header