import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './content_50.module.scss';

export const Content_50 = () =>
    <Row>
        <Col>
            <img src="https://placehold.it/300x300" />
        </Col>
        <Col>
            <h2 className={styles.title}>
                Lorem Ipsum
            </h2>
        </Col>
    </Row>