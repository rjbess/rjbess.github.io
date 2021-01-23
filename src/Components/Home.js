import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";
import styled from 'styled-components';
import Photo from "../Assests/HomePhotos/frontColoured.jpg";
import Family from "../Assests/HomePhotos/family.jpg";
import OldBusiness from "../Assests/HomePhotos/oldBusiness.jpg";
import OldBusiness2 from "../Assests/HomePhotos/oldBusiness2.jpg";
import Peter from "../Assests/HomePhotos/peter.jpg";
import PhilipSign from "../Assests/HomePhotos/philipSign.jpg";
import './Home.css'

const Styled = styled.div`
  .col {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    align-items: center;
    margin-bottom:10px;
  }
  .text{
    margin-top:20px;
    margin-bottom:10px;
  }
`

class Home extends React.Component{
    render(){
        return(
            <MDBContainer>
                <Styled>
                        <MDBRow>
                            <MDBCol className='col'>
                                <img src={Photo} className="img-fluid z-depth-2 rounded-circle"/>
                                <div className="text">
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                    .................................
                                </div>
                            </MDBCol>
                        </MDBRow>
                         <MDBRow>
                            <MDBCol>
                               <MDBCarousel
                                   activeItem={1}
                                   length={5}
                                   showControls={true}
                                   showIndicators={true}
                                   className="z-depth-1"
                                   slide
                               >
                                   <MDBCarouselInner>
                                       <MDBCarouselItem itemId="1">
                                           <MDBView>
                                               <img
                                                   className=" d-block  img-fluid"
                                                   src={Family}
                                                   alt="First slide"
                                               />
                                           </MDBView>
                                       </MDBCarouselItem>
                                       <MDBCarouselItem itemId="2">
                                           <MDBView>
                                               <img
                                                   className="img-fluid"
                                                   src={OldBusiness}
                                                   alt="Second slide"
                                               />
                                           </MDBView>
                                       </MDBCarouselItem>
                                       <MDBCarouselItem itemId="3">
                                           <MDBView>
                                               <img
                                                   className="img-fluid"
                                                   src={OldBusiness2}
                                                   alt="Third slide"
                                               />
                                           </MDBView>
                                       </MDBCarouselItem>
                                       <MDBCarouselItem itemId="4">
                                           <MDBView>
                                               <img
                                                   className="img-fluid"
                                                   src={Peter}
                                                   alt="Fourth slide"
                                               />
                                           </MDBView>
                                       </MDBCarouselItem>
                                       <MDBCarouselItem itemId="5">
                                           <MDBView>
                                               <img
                                                   className="img-fluid"
                                                   src={PhilipSign}
                                                   alt="Fifth slide"
                                               />
                                           </MDBView>
                                       </MDBCarouselItem>
                                   </MDBCarouselInner>
                               </MDBCarousel>
                            </MDBCol>
                        </MDBRow>
                </Styled>
            </MDBContainer>
        );
    }

}
export default Home;