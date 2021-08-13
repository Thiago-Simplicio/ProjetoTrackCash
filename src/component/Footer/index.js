import React from 'react'

import {ContainerFooter} from './FooterStyled'

const Footer = () => {
    return(
        <ContainerFooter>
            <div className="left">
                <span>Copyright © 2017 - 2021 <em>TrackCash.</em> Todos os Direitos Reservados.</span>
            </div>
            <div className="right">
                <p>Termos de uso</p>
                <p>Politicas de privacidade</p>
                <p>FAQ</p>
            </div>
        </ContainerFooter>
    )
}
export default Footer