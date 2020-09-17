import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
// import CommentForm from './CommentFormComponent';
import {Modal, ModalHeader, Label, Button, ModalBody, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';




  function  RenderDish({dish}) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  
    function RenderComments({comments}) {
      if (comments == null || comments.length === 0) {
        return (
          <div></div>
        );
      }
  
      const renderedComments = comments.map((comment) => {
        return (
          <li>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
          </li>
        );
      });
  
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            { renderedComments }
          </ul>
        </div>
      );
    }
  
    const DishDetail = (props) => {
      console.log('DishDetail Component Render Invoked')
      if (props.dish != null) {
        return (
        <div className='container'>  
          <div className='row'>
              <Breadcrumb>
                  <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className='col-12'>
                  <h3>{props.dish.name}</h3>
                  <hr/>
              </div>
          </div>
          <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <CommentForm/>
                    </div>
                </div>
        </div>
        );
      }
      else {
        return (
          <div>Nope</div>
        );
      }
    }
  
    
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props){
        super (props);

        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
          };

    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }




    render(){
        return(
        <>
            <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModalOpen} externalButton externalButtonClassName="cool-close-button" >
                <ModalHeader toggle={this.toggleModalOpen} >Login </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" defaultValue="1" className="form-control" name="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" className="form-control" name="name" placeholder="Your Name"
                                                    validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}/>
                                    <Errors className="text-danger" model=".name" show="touched"
                                            messages={{
                                                required: 'Required. ',
                                                minLength: 'Must be greater than 2 numbers. ',
                                                maxLength: 'Must be 15 numbers or less. '
                                        }} 
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                <Control.textarea model=".message" id="message" rows="6" className="form-control" name="message" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
            </Modal>
            </>    
        );
    }
}
  
  export default DishDetail;