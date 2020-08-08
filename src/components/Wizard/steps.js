import React from 'react';
import { Container, Item } from './steps.style';

export const Steps = ({ steps, actualStep }) => {
    const getStepsContent = () => {
        let content = [];
        for (let i = 0; i < steps; i++) {
            content.push(<Item key={i} selected={i === actualStep}>{i}</Item>);
        }
        return content;
    };

    return (
        <Container>
            {getStepsContent(steps)}
        </Container>
    )
}
