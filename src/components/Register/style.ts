import styled from "styled-components";

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
        a {
            color: #ffffff;
            text-decoration: none;
        }  
    }
      
`;