import React from 'react'
import { MDBCard, MDBCardBody, MDBContainer, MDBCardUp, MDBIcon, MDBRow, MDBAvatar, MDBCol, MDBRotatingCard } from "mdbreact";
import Photo1 from "../Assests/ServicesPhotos/photo1.jpg"
import Photo2 from "../Assests/ServicesPhotos/photo2.jpg"
import Photo3 from "../Assests/ServicesPhotos/photo3.jpg"
import Photo4 from "../Assests/ServicesPhotos/photo4.jpg"
import Photo5 from "../Assests/ServicesPhotos/photo5.jpg"
import Photo6 from "../Assests/ServicesPhotos/photo6.jpg"
import Photo8 from "../Assests/ServicesPhotos/photo8.jpg"
import Photo9 from "../Assests/ServicesPhotos/photo9.jpg"

class Services extends React.Component{
    constructor() {
        super();
        this.state={
            flip1:false,
            flip2:false,
            flip3:false,
            flip4:false,
            flip5:false,
            flip6:false,
            flip7:false,
            flip8:false,
            flip9:false,
        }
        this.handleFlip = this.handleFlip.bind(this);
    }
    handleFlip = id => () => {
        const cardId = `flipped${id}`;
        this.setState({ [cardId]: !this.state[cardId] });
    }
    render(){
        return(
            <MDBContainer>
                <MDBRow center>
                    <MDBCol md="4" style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped1} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src={Photo1} alt="" />
                                </MDBCardUp>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Photo of legs</h4>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(1)}>
                                        <MDBIcon icon="redo" /> Click here to rotate
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About legs</h4>
                                    <hr />
                                    <p>
                                        What happends with the legs
                                    </p>
                                    <hr />
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(1)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md="4" style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped2} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src={Photo2} alt="" />
                                </MDBCardUp>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(2)}>
                                        <MDBIcon icon="redo" /> Click here to rotate
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(2)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md="4" style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped3} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src={Photo3}alt="" />
                                </MDBCardUp>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(3)}>
                                        <MDBIcon icon="redo" /> Click here to rotate
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(3)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol md="4" style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped4} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src={Photo4} alt="" />
                                </MDBCardUp>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(4)}>
                                        <MDBIcon icon="redo" /> Click here to rotate
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(4)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md="4" style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped5} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src={Photo5} alt="" />
                                </MDBCardUp>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(5)}>
                                        <MDBIcon icon="redo" /> Click here to rotate
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(5)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md="4" style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped6} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src={Photo6} alt="" />
                                </MDBCardUp>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(7)}>
                                        <MDBIcon icon="redo" /> Click here to rotate
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(7)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md="4" style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped7} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src={Photo8}alt="" />
                                </MDBCardUp>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(7)}>
                                        <MDBIcon icon="redo" /> Click here to rotate
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(8)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md="4" style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped8} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src={Photo8}alt="" />
                                </MDBCardUp>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(8)}>
                                        <MDBIcon icon="redo" /> Click here to rotate
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(8)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md="4" style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped9} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src={Photo9} alt="" />
                                </MDBCardUp>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(9)}>
                                        <MDBIcon icon="redo" /> Click here to rotate
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlip(9)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }

}
export default Services;