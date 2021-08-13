import React from 'react'

import {ContainerMain} from './MainStyled'

import Leyro from '../../../src/imagens/Leyro.png'
import Add from '../../../src/imagens/add.png'
import Madeira from '../../../src/imagens/Madeira.png'
import {HiMenuAlt1} from 'react-icons/hi'
import {MdAttachMoney} from 'react-icons/md'

import Chart from '../Chart/index'
const MainDash = () => {


    function openDataRageLeroy() {
        var boxData = document.querySelector('.boxDataLeroy')
        if(boxData.className === "boxDataLeroy"){
            boxData.className += " boxDataLeroy-open"
        }
    }

    function closedDataRangeLeroy(){
        var boxData = document.querySelector('.boxDataLeroy')
        if(boxData.className === "boxDataLeroy boxDataLeroy-open"){
            boxData.className = "boxDataLeroy"
        }
    }


    function openDataRageMadeira(){
        var boxData = document.querySelector('.boxDataMadeira')
        if(boxData.className === "boxDataMadeira"){
            boxData.className += " boxDataMadeira-open"
        }
    }

    function closedDataRangeMadeira(){
        var boxData = document.querySelector('.boxDataMadeira')
        if(boxData.className === "boxDataMadeira boxDataMadeira-open"){
            boxData.className = "boxDataMadeira"
        }
    }


    return(
        <ContainerMain>
            <div className="grafico">
                <div className="topGrafico">
                    <span>Desempenho Mensal e Diário</span>
                </div>
                <div className="mainGrafico">
                    <Chart />
                    <div className="infoGrafico">
                        <div>   
                            <HiMenuAlt1 className="icons" style={{color: '#2980B9'}}/>
                            <span style={{color: '#2980B9'}}>7,48%</span>
                            <p>Taxa de aprovação dos pedidos</p>
                        </div>  
                        <div>
                            <MdAttachMoney className="icons" style={{color: '#27AE60'}}/>
                            <span style={{color: '#27AE60'}}>7,48%</span>
                            <p>Taxa de aprovação dos pedidos</p>
                        </div>
                    </div>
                    <div className="linha"></div>
                    <div className="infoGrafico">
                        <div>   
                            <HiMenuAlt1 className="icons" style={{color: '#2980B9'}}/>
                            <span style={{color: '#2980B9'}}>98</span>
                            <p>Pedidos aprovados na data de hoje</p>
                        </div>  
                        <div>
                            <MdAttachMoney className="icons" style={{color: '#27AE60'}}/>
                            <span style={{color: '#27AE60'}}>7,48%</span>
                            <p>Total de vendas do dia (R$)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="total">
                <div className="topTotal">
                    <span>Desempenho Mensal e Diário</span>
                </div>
                <div className="mainTotal">
                    <div className="boxPorcentagem">
                        <div className="boxValor">
                        <span>$</span>
                        <span className="valor">7,48%</span>
                        <span>total liquido (R$)</span>
                        </div>
                    </div>
                    <div className="boxValorTotal">
                        <div className="boxDataLeroy">
                            <div className="topo">
                                <span>Repasses da Leroy Merlin</span>
                                <span style={{cursor: 'pointer'}} onClick={closedDataRangeLeroy}>X</span>
                            </div>
                            <div className="data">
                                <span>Data</span>
                                <span>Valor (R$)</span>
                            </div>
                            <div className="dataTotal">
                                <input placeholder="07//08/2021"/>
                                <span>9.370,00</span>
                            </div>
                            <div className="bottom">
                                <span>Saldo Final</span>
                                <span>2.474,00</span>
                            </div>
                        </div>
                        <div className="boxDataTotal">
                            <img src={Leyro}></img>
                                <div>
                                    <span>00000</span>
                                </div>
                                <div>
                                <img onClick={openDataRageLeroy} style={{width: 15, cursor: 'pointer'}} src={Add}></img>
                                </div>
                        </div>
                        <div className="boxDataMadeira">
                            <div className="topo">
                                <span>Repasses da Madeira Madeira</span>
                                <span style={{cursor: 'pointer'}} onClick={closedDataRangeMadeira} >X</span>
                            </div>
                            <div className="data">
                                <span>Data</span>
                                <span>Valor (R$)</span>
                            </div>
                            <div className="dataTotal">
                                <input placeholder="07//08/2021"/>
                                <span>9.370,00</span>
                            </div>
                            <div className="bottom">
                                <span>Saldo Final</span>
                                <span>2.474,00</span>
                            </div>
                        </div>
                        <div className="boxDataTotal">
                            <img src={Madeira}></img>
                                <div>
                                    <span>00000</span>
                                <div>
                                <img style={{width: 15, cursor: 'pointer'}} onClick={openDataRageMadeira} src={Add}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="linha">

                        </div>
                        <div className="left">
                            <div>
                                <span>252,14</span>
                                <p>Retiradas (R$)</p>
                            </div>
                            <div>
                                <span>12,01</span>
                                <p>Antecipações (R$)</p>
                            </div>
                            <div>
                                <span>245,00</span>
                                <p>Pagamentos totais (R$)</p>
                            </div>
                        </div>
                        <div className="rigth">
                            <div>    
                                <span>752</span>
                                <p>Comissões (R$)</p>
                            </div>
                            <div>
                                <span>175,32</span>
                                <p>Frete do marketplace (R$)</p>
                            </div>
                            <div>
                                <span>200,00</span>
                                <p>Devoluções e cancelamentos (R$)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerMain>
    )
}

export default MainDash