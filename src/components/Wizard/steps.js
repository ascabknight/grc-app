import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Container, Item } from './steps.style';

export const Steps = ({ steps, actualStep }) => {
  const getStepsContent = () => {
    let content = [];
    for (let i = 0; i < steps; i++) {
      content.push(
        <Item
          className="rounded-circle"
          key={i}
          step={i + 1}
          actual={actualStep}
        >
          {actualStep > i + 1 && <div id="tick-mark"></div>}
          {actualStep <= i + 1 && <div>{i + 1}</div>}
        </Item>
      );
    }
    return content;
  };

  return (
    <>
      <Container>{getStepsContent(steps)}</Container>
    </>
  );
};
