import React from'react';
import { MDBJumbotron, MDBRow, MDBCol } from "mdbreact";

import styled from 'styled-components';
import bannerXXL2 from '../Assests/mainBannerXXL2.jpg';
import bannerXL from '../Assests/mainBannerXL.jpg';
import bannerLG from '../Assests/mainBannerLG.jpg';
import bannerMD from '../Assests/mainBannerMD.jpg';
import bannerSM from '../Assests/mainBannerSM.jpg';
import Home from "./Home";


const Styles = styled.div`
  .text{
    color:white;
    font-family:Times New Roman;
    position: absolute;
    top: 50%;
    left: 50%;
    user-select:none;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  @media (min-width: 100px) {
    .text{
        font-size:32px;
    }
    .jumbo {
      background: url(${bannerSM})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
     -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      min-height: 200px;
    }
  }
  @media (min-width: 768px) {
  .text{
        font-size:48px;
    }
    .jumbo {
      background: url(${bannerMD})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      min-height: 300px;
    }
  }

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .text{
        font-size:56px;
    }
    .jumbo{
      background: url(${bannerLG})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      min-height: 400px;
    }
  }

  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .text{
        font-size:64px;
    }
    .jumbo{
      background: url(${bannerXL})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      min-height: 500px;
    }
  }
  @media (min-width: 2000px) {
    .text{
        font-size:24x;
    }
    .jumbo{
      background: url(${bannerXXL2})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      min-height: 600px;
    }
  }
 `;

class Jumbotron extends React.Component{

    state={
        thisText:"",
    }
    getText(){
        let temp = window.location.href;
        let temp2 = temp.split("/").pop();
        if(temp2===""){
            this.setState({thisText:"OUR STORY"})
        }
        else if(temp2==="services"){
            this.setState({thisText:"SERVICES"})
        }
        else if(temp2==="gallery"){
            this.setState({thisText:"OUR WORK"})
        }
        else if(temp2==="contactus"){
            this.setState({thisText:"CONTACT US"})
        }
        else{
            this.setState({thisText:"ERROR 404"})
        }
    }
    componentDidMount() {
        this.getText();
    }
    render(){
        return(
            <Styles>
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{ padding: 0 }}>
                            <MDBCol className="jumbo">
                                <p className="text">{this.state.thisText}</p>
                            </MDBCol>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </Styles>
        )
    }

}
export default Jumbotron;