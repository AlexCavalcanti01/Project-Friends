import styled from 'styled-components'

export const Container = styled.div`
    width: 347px;
    height: 415px;

    text-align: center;

    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 10px;



    input{
        background: #FFFFFF;
        box-shadow: -2px -2px 0px rgba(24, 119, 242, 0.1), 2px 2px 0px rgba(24, 119, 242, 0.1);
        border-radius: 5px;
        border: none;
        
        width: 320px;
        height: 45px;

        padding-left: 20px;

        margin-top: 20px;

        opacity: 50%;
    }

    button {
        margin-top: 20px;

        background: #448BFD;
        border-radius: 5px;

        width: 320px;
        height: 45px;
        
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        color: #FFFFFF;
            
        flex: none;
        order: 0;
        flex-grow: 0;   
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        gap: 10px;

        margin-top: 13px;

        a {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;

            color: #000000; 

            width: max-content;
        }
        img {
                width: 22px;
                height: 22px;
            }
    }

    a {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;

        color: #448BFD; 

        width: 265px;
        height: 15px;

        text-decoration: none;
    }

    div#linha{
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        text-align: center;

        color: #B0B0B0;

        hr {
            border: 1px solid #DFDFDF;

            width: 150px;
            height: 0px;
        }
    }

    button#new {
        background: #46B72A;
        border-radius: 5px;

        width: 141px;
        height: 41px;  

        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
    }
`;