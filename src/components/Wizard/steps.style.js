import styled from 'styled-components';

export const Container = styled.ul`
 list-style: none;
`;

export const Item = styled.li`
    color: ${({ selected }) => (selected ? 'blue' : 'white')};
`;