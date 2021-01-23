import React from 'react'
import {Container, Row} from "react-bootstrap";
import styled from 'styled-components';
import Gallery from "react-photo-gallery";
import {photos} from "./GalleryPhotos";

const Styled = styled.div`
  .text {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-bottom: 200px;
  }
`

class WebsiteGallery extends React.Component{
    render(){
        return(
            <Container className="container" fluid>
                <Styled>
                    <Row className="text">
                        <Gallery photos={photos}/>
                    </Row>
                </Styled>
            </Container>
        );
    }

}
export default WebsiteGallery;