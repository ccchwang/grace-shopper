import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Modal, Radio } from 'react-bootstrap'


const CreateReview = React.createClass({

    getInitialState(){
        return { 
            showModal: false,
            rating: null 
        };
    },

    close(){
        this.state.rating = null;
        this.setState({ showModal: false });
    },

    open(){
        this.setState({ showModal: true });
    },

    chooseRating(e) {
        e.preventDefault();
        const rating = +e.target.value;
        this.state.rating = rating;
        for (var i = 1; i <= 5; i++) {
            let elem = document.getElementById(i.toString());
            if (i <= rating) {
                elem.innerHTML = '★';
            } else {
                elem.innerHTML = '☆';
            }
        }

    },

    submitAndClose(description, rating, userId, productId) {
        if (!description || !rating) {
            alert('You must enter a rating and description to submit a review.')
            return;
        }
        this.props.handleSubmit(description, rating, userId, productId);
        this.close();

    },

    render() {
        if (this.props.user) {
            return (
                <div> 
                    <Button bsStyle="primary" bsSize="small" onClick={this.open} >
                    Review This Product
                    </Button>

                    <Modal show={this.state.showModal} onHide={this.close}>

                        <Modal.Header id="review-form-header">
                            <Modal.Title>Leave a Review for {this.props.selectedProduct.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <h4>Rate: </h4>
                            <div className="rating-stars">
                                <Button id="1" value="1" onClick={this.chooseRating}>☆</Button>
                                <Button id="2" value="2" onClick={this.chooseRating}>☆</Button>
                                <Button id="3" value="3" onClick={this.chooseRating}>☆</Button>
                                <Button id="4" value="4" onClick={this.chooseRating}>☆</Button>
                                <Button id="5" value="5" onClick={this.chooseRating}>☆</Button>
                            </div>
                                
                            <form onSubmit={(e) => {
                                    e.preventDefault();
                                    this.submitAndClose(e.target.inputField.value, this.state.rating, this.props.user.id, this.props.selectedProduct.id)}
                                    }>
                                <FormGroup>
                                    <ControlLabel>Review: </ControlLabel>
                                    <FormControl name="inputField" id="review-text" type="text"/>
                                </FormGroup>

                                <Button onClick={this.close}>Close</Button>
                                <Button bsStyle="primary" type="submit">Submit Review</Button>
                            </form>

                        </Modal.Body>

                    </Modal>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
})

export default CreateReview




/* 
    Need to rerender all the reviews when you close the modal to reflect the review that was just created
*/