import styled from 'styled-components';

export const Container = styled.div`
    width: 500px;
    background-color: #F1eecc;
    margin: 50px auto;
    border-radius: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
`;
export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    text-align: center;

`;
export const FormContainer = styled.div`
    width: 470px;
    background-color: #6870b5;
    margin: 0 auto;
    padding: 15px;
`;
export const FormTitle = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    display: block;
    text-align: left;
    padding-top: 10px;
`;
export const Input = styled.input`
    width: 200px;
    height: 35px;
    border-radius: 10px;
    outline: none;
    border: none;
    :focus {
        border: 2px solid #55bb55;
    }
`;
export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: block;
    padding: 10px 15px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background-color: #62cbde;
    border: none;
    outline: none;
    cursor: pointer;
    :hover {
        background-color: #55bb55;
    }
`;
export const SubTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    text-align: center;
`;
export const FilterArea = styled.div`
    padding-left: 15px;
`;
export const FilterDesc = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
`;
export const List = styled.ul`
    list-style-type: '☎';
`;
export const ListItem = styled.li`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    padding: 10px;
`;
export const DeleteBtn = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: inline-block;
    padding: 10px 15px;
    margin-left: 15px;
    border-radius: 10px;
    background-color: #62cbde;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    right: 25px;
    :hover {
        background-color: #F55b50;
    }
`;