import styled from 'styled-components';

const colorCompleted = '#007bff';
const colorIncomplete = '#6c757d';

export const Container = styled.ul`
 list-style: none;
 display:flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 0;
`;

export const Item = styled.li`
    align-items: center;
    border: 3px solid;
    background-color: ${({ step, actual }) => ( actual > step ? colorCompleted : '#fff')};
    border-color: ${({ step, actual }) => ( actual >= step ? colorCompleted : colorIncomplete)};
    color: ${({ step, actual }) => ( actual >= step ? colorCompleted : colorIncomplete)};
    display: flex;
    justify-content: center;
    height: 50px;
    width: 50px;
    margin-bottom: 50px;
    &:not(:last-child)::after {
        content: '';
        position: absolute;
        background-color: ${({ step, actual }) => ( actual >= step ? colorCompleted : colorIncomplete)};
        width: 3px;
        height: 50px;
        margin-top: 100px;
    }
    &:not(:first-child)::before{
        content: '';
        position: absolute;
        background-color: ${({ step, actual }) => ( actual >= step ? colorCompleted : colorIncomplete)};
        width: 3px;
        height: 25px;
        margin-top: -75px;
    }

    & .check {
        color:white;
    }

    & div {
        background-color: ${({ step, actual }) => ( actual >= step ? colorCompleted : '')};
        width: 40px;
        height: 38px;
        border-radius: 50%;
        color: ${({ step, actual }) => ( actual >= step ? 'white' : '')};;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;