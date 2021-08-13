import React,{useState} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import MainDash from '../MainDash'

import {BiCalendarMinus} from 'react-icons/bi'

import {ContainerCalendario} from './Styled'



const DashBoard = () => {

    const [selectMeses, setSelect] = useState('')
    const [selectAno, setAno] = useState('')

    function getMonth(){
        var data = new Date()
        var mes = String(data.getMonth())
        return mes
    }
    
    const ano = [
        
        {id: 1, name: 2000},
        {id: 2, name:2001},
        {id: 3, name: 2002},
        {id: 4, name:2003},
        {id: 5, name: 2004},
        {id: 6, name:2005},
        {id: 7, name: 2006},
        {id: 8, name:2007},
        {id: 9, name: 2008},
        {id: 10, name:2009},
        {id: 11, name: 2010},
        {id: 12, name:2011},
        {id: 13, name: 2012},
        {id: 14, name:2013},
        {id: 15, name: 2014},
        {id: 16, name:2015},
        {id: 17, name: 2016},
        {id: 18, name:2017},
        {id: 19, name: 2018},
        {id: 20, name:2019},
        {id: 21, name: 2020},
        {id: 22, name:2021},
    ]

    const meses = [
        {id: 1, name: "Janeiro"},
        {id: 2, name: "Fevereiro"},
        {id: 3, name: "Março"},
        {id: 4, name: "Abril"},
        {id: 5, name: "Maio"},
        {id: 6, name: "Junho"},
        {id: 7, name: "Julho"},
        {id: 8, name: "Agosto"},
        {id: 9, name: "Setembro"},
        {id: 10, name: "Outubro"},
        {id: 11, name: "Novembro"},
        {id: 12, name: "Dezembro"}
    ]

    function openCalendario(){
            var cardCalendario = document.querySelector('.calendario')
            var calendario = document.querySelector('.calendarioOpen')
            if(calendario.className === "calendarioOpen"){
                cardCalendario.style.backgroundColor = 'white';
                calendario.className += " calendario-open"
            }else{
                calendario.className = "calendarioOpen"
                cardCalendario.style.backgroundColor = '#c1c1c1';
            }
    }
    
    return(
        <div style={{height: "100%", position: 'relative', width: "100%"}}>
            <Header />
            <ContainerCalendario>
                <div className="boxText">
                    <span>Tabela de Recorrências de Pagamentos</span>
                    <p>Página de Recorrências de pagamentos referentes ao mês atual</p>
                </div>
                <div className="calendario" onClick={openCalendario}>
                    <BiCalendarMinus className="calendario-icon"/>
                    <input placeholder="Mês" value={selectMeses}/>
                    <p>de</p>
                    <input placeholder="Ano" value={selectAno}/>
                </div>
                <div className="calendarioOpen">
                    <div className="boxData">
                        <label>Mês</label>
                        <select name="select" value={selectMeses} onChange={e => setSelect(e.target.value)}>
                            {meses.map((e) => {
                                return <option className="option" selectd='selectd'  value={e.name}>{e.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="boxData">
                        <label>Ano</label>
                        <select name="select" value={selectAno} onChange={e => setAno(e.target.value)}>
                            {ano.map((e) => {
                                return <option className="option" value={e.name}>{e.name}</option>
                            })}
                        </select>
                    </div>
                </div>
            </ContainerCalendario>
            <MainDash />
            <Footer />
        </div>
    )
}

export default DashBoard