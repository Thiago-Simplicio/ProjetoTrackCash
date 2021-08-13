import styled from 'styled-components'

export const ContainerFooter = styled.footer`
    width: 100%;
    background-color: #222222;
    position: relative;
    bottom; 0;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    align-items: center;

    .left{
        display: flex;
        alig-items: center;

        span{
            color: #ccc;

            em{
                color: white;
                font-weight: bold;
            }
        }
    }

    .right{
        display: flex;
        color: white;
        gap: 17px;
        font-family: sans-serif;
    }
`