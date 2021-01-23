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

class ContactUs extends React.Component{
    render(){
        return(
            <Container className="container" fluid>
                <Styled>
                    <Row className="text">
                        <text>Email and phone details.................................
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
export default ContactUs;