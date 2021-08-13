import styled from 'styled-components'

export const ContainerCalendario = styled.div`
    background-color : #C94A21;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 27px 20px;

    .calendarioOpen{
        display: none;
    }
    .calendarioOpen.calendario-open{
        background-color: white;
        border: 1px solid black;
        position: absolute;
        right: 18px;
        top: 160px;
        z-index: 75;
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 135px;
        width: 320px;

        .boxData{
            margin: 8px;
            width: 100%;
            padding: 0px 30px;
            display: flex;
            gap: 5px;

            label{
                font-weight: bold;
                color: black;
                font-family: sans-serif;
                letter-spacing: 1px;
            }
            select{
                border-top: none;
                border-left: none;
                border-right: none;
                width: 100%;

                .option{
                    padding: 30px 10px;
                }
            }
        }
    }

    .boxText{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;

        span{
            color: white;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 30px;
            letter-spacing: 2px;
        }

        p{
            color: white;
            font-family: sans-serif;
        }
    }

    .calendario{
        background-color: white;
        padding: 7px 5px;
        width: 170px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        transition: all 1s ease;

        .calendario-icon{
            font-size:  125%;
        }

        input{
            width: 55px;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
        }
        
    }
    .calendario:hover{
        background-color: #ccc;
        opacity: 1;
    }
`