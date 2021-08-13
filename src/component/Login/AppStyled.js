import styled from 'styled-components'

export const ContainerLogin = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .boxLogin{
        position: relative;
        width: 80%;
        height: 550px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        box-shadow: 0px 0px 7px rgba(0,0,0,.7);
        border-radius: 5px;

        .boxField{
            height: 100%;
            width: 50%;
            padding: 30px 0px;
            position: relative;
            .boxLogo{


                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                span{
                    color: #C94A21;
                    font-family: sans-serif;
                    font-weight: bold;
                    font-size: 21px;
                }
            }

            form{
                margin-top: 35px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                .boxFieldInputs{
                    width: 100%;
                    margin: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    input{
                        width: 270px;
                        background-color: rgba(0,0,0,0.1);
                        padding: 10px 10px;
                        border-radius: 2px;
                        outline: 0;
                        border: none;
                    }

                    .icons{
                        font-size: 24px;
                    }
                    
                }
                button{
                    width: 360px;
                    padding: 12px 0px;
                    background-color: #C94A21;
                    border: none;
                    color: white;
                    font-family: sans-serif;
                    cursor: pointer;
                    border-radius: 5px;
                    font-size: 20px;
                    transition: all 0.3s ease;
                }
                button:hover{
                    opacity: 0.8;
                }
            }
            .boxInfo{
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 0px 30px;
                margin-top: 50px;

                span{
                    color: #C94A21;
                    font-family: sans-serif;
                    font-weight: bold;
                }

                a{
                    color: #C94A21;
                    font-family: sans-serif;
                    font-weight: bold;
                    text-decoration: none;
                }
                a:hover{
                    text-decoration: underline;
                }

                .check{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;

                    input:checked{
                        background-color: #C94A21;
                    }

                    span{
                        color: #C94A21;
                    }
                }
            }
            .cadastro{
                margin-top: 10px;
                width: 100%;
                padding: 0px 30px;
                display: flex;
                justify-content: flex-end;

                a{
                    color: #C94A21;
                    font-family: sans-serif;
                    font-weight: bold;
                    text-decoration: none;
                }
                a:hover{
                    text-decoration: underline;
                }
            }
        }
        .boxIntro{
            background-color: yellow;
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #C94A21;
            border-radius: 0px 5px 5px 0px;

            span{
                width: 70%;
                line-height: 60px;
                text-align: center;
                font-size: 30px;
                color: white;
                font-weight: bold;
                font-family: sans-serif;
            }

            p{
                width: 70%;
                text-align: center;
                margin-top: 15px;
                color: white;
            }
        }
    }
`