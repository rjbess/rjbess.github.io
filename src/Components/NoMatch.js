import React from 'react'
import {Container, Row} from "react-bootstrap";
import styled from 'styled-components';

const Styled = styled.div`
  .text {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-bottom: 200px;
  }
`

class NoMatch extends React.Component{
    render(){
        return(
            <Container className="container" fluid>
                <Styled>
                    <Row className="text">
                        <text>Something went wrong.................................
                            ...............................................................
                            ...............................................................
                            ...............................................................
                            ...............................................................
                            ...............................................................
                            ...............................................................
                            ...............................................................
                            ...............................................................
                        </text>
                    </Row>
                </Styled>
            </Container>
        );
    }

}
export default NoMatch;