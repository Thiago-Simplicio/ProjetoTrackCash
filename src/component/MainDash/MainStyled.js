import styled from 'styled-components'

export const ContainerMain = styled.div`
    width: 100%;
    height: 950px;
    background-color: #ccc;
    padding: 20px 20px;
    gap: 40px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .grafico{
        width: 50%;
        height: 100%;
        border-radius: 5px;
        box-shadow: 0px 5px 7px rgba(0,0,0,0.5);
        background-color: white;

        .topGrafico{
            width: 100%;
            padding: 20px 0px;
            display: flex;
            justify-content: center;
            align-items; center;
            background-color: #222222;
            border-radius: 5px 5px 0px 0px;

            span{
                color: white;
                font-family: sans-serif;
                letter-spacing: 2px;
                font-weight: bold;
            }
        }

        .mainGrafico{
            height: 100%;
            

            .linha{
                margin-left: 20px;
                width: 90%;
                border: 1px solid #ccc;
            }

            .infoGrafico{
                width: 100%;
                height: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 45px;

                div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                    gap: 15px;

                    span{
                        font-family: sans-serif;
                        font-weight: bold;
                        font-size: 35px;
                    }

                    .icons{
                        font-size: 41px;
                    }
                    p{
                        font-family: sans-serif;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    .total{
        width: 50%;
        height: 100%;
        border-radius: 5px;
        box-shadow: 0px 5px 7px rgba(0,0,0,0.5);
        background-color: white;
        position: realtive;

        .topTotal{
            width: 100%;
            padding: 20px 0px;
            display: flex;
            justify-content: center;
            align-items; center;
            background-color: #222222;
            border-radius: 5px 5px 0px 0px;
            position: relative;
            top: 0;

            span{
                color: white;
                font-family: sans-serif;
                letter-spacing: 2px;
                font-weight: bold;
            }
        }






        .mainTotal{
            height: 100%;
            

            .boxPorcentagem{
                width: 100%;
                height: 35%;
                display: flex;
                justify-content: center;
                align-items: center;

                .boxValor{
                    width: 423px;
                    height: 80%;
                    border-radius: 5px;
                    background-color: #229954;
                    display: flex;
                    justify-content: center;
                    align-itens: center;
                    text-align: center;
                    flex-direction: column;
                    gap: 15px;

                    span:nth-child(1){
                        color: white;
                        font-weight: bold;
                        font-size: 38px;
                    }
                    span:nth-child(2){
                        color: white;
                        font-weight: bold;
                        font-size: 43px;
                    }
                    span:nth-child(3){
                        color: white;
                        font-size: 15px;
                        font-family: sans-serif;
                    }
                }
            }

            .boxValorTotal{
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 55px;
                position: relative;

                .boxDataTotal{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    
                    div{
                    padding: 0px 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color:  #CEE3F1;
                    }
                    
                }

                .boxDataLeroy{
                    width: 60%;
                    position: absolute;
                    left: 2%;
                    top: 50px;
                    z-index: 88;
                    padding: 10px 10px;
                    background-color: white;
                    border-radius: 5px;
                    box-shadow: 0 5px 7px rgba(0,0,0,.5);
                    display: none;

                    

                    .topo{
                        width: 100%;
                        height: 55px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0px 5px;
                    }

                    .data{
                        z-index: 70;
                        width: 100%;
                        height: 40px;
                        background-color: white;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: #34495E;
                        padding: 0px 5px;
                        border-radius: 5px 5px 0px 0px;
                        color: white;
                        font-weight: bold;
                    }

                    .dataTotal{
                        z-index: 70;
                        width: 100%;
                        height: 38px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0px 5px;

                        input{
                            border: none;
                            outline: 0;
                            cursor: default;
                        }
                    }

                    .bottom{
                        z-index: 70;
                        width: 100%;
                        height: 38px;
                        background-color: #229954;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0px 5px;
                        border-radius: 0px 0px 5px 5px;
                        color: white;
                        font-weight: bold;
                    }
                }
                .boxDataLeroy-open{
                    display: block;
                }

                .boxDataMadeira{
                    width: 60%;
                    position: absolute;
                    right: 2%;
                    top: 50px;
                    z-index: 88;
                    padding: 10px 10px;
                    background-color: white;
                    border-radius: 5px;
                    box-shadow: 0 5px 7px rgba(0,0,0,.5);
                    display: flex;
                    flex-direction: column;
                    display: none;

                    .topo{
                        width: 100%;
                        height: 55px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0px 5px;
                    }

                    .data{
                        z-index: 70;
                        width: 100%;
                        height: 40px;
                        background-color: white;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: #34495E;
                        padding: 0px 5px;
                        border-radius: 5px 5px 0px 0px;
                        color: white;
                        font-weight: bold;

                       
                    }

                    .dataTotal{
                        z-index: 70;
                        width: 100%;
                        height: 38px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0px 5px;

                        input{
                            border: none;
                            outline: 0;
                            cursor: default;
                        }
                    }

                    .bottom{
                        z-index: 70;
                        width: 100%;
                        height: 38px;
                        background-color: #229954;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0px 5px;
                        border-radius: 0px 0px 5px 5px;
                        color: white;
                        font-weight: bold;
                    }
                }
                .boxDataMadeira-open{
                    display: block;
                }
            }
        }
        .info{
            width: 98%;
            height: 450px;
            position: relative;
            padding: 0px 30px;
            display: flex;
            flex-direction: row;

            .linha{
                position: absolute;
                top: 5%;
                width: 90%;
                border: 1px solid #ccc;
            }

            .left{
                width: 50%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                gap: 52px;

                span{
                    color: #27AE60;
                    font-size: 37px;
                    font-weight: bold;
                    font-family: sans-serif;
                }

                p{
                    color: black;
                    font-family: sans-serif;
                    font-weight: bold;
                }
            }
            .rigth{
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                flex-direction: column;
                gap: 52px;
                text-align: end;

                span{
                    color: #C94A21;
                    font-size: 37px;
                    font-weight: bold;
                    font-family: sans-serif;

                }

                p{
                    color: black;
                    font-family: sans-serif;
                    font-weight: bold;
                }
            }
        }
    }
`