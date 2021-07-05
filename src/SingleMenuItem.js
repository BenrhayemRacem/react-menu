import {Col, Image, Row} from "react-bootstrap";
import {Alert} from "react-bootstrap";


const SingleMenuItem =(props) => {
   const {title,price,img,desc} = props.item;
   return (

          <Col xs={12} md={6} className="menu-item" >

              <Row >
                  <Col xs={6} md={4} >
                      <Image src={img} rounded/>
                  </Col>
                  <Col  xs={6} md={4} className="alert-img">
                  <Alert variant="success"> {title}</Alert>
              </Col>
              </Row>




              <Row>
                  <Col xs={8} >
                      <p>
                          {desc}
                      </p>
                  </Col>
                  <Col>
                      <h4>{price}</h4>
              </Col>
              </Row>





          </Col>

   )

}


export default SingleMenuItem ;