import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import {Card } from 'antd';
const { Meta } = Card;

const FacilitiesForm = () => {
 
  const [name, setName] = useState('');
  const [facility, setFacility] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://newbackend-wg0z.onrender.com/', {
        name,  
       facility,
        date,
        startTime,
        endTime,
      });
   
      console.log(response.data.message,"hiiiiiiii")

      // const { message, amount } = response.data;
      
      setMessage(response.data.message)
      setAmount(response.data.amount)
      setName("")
      setFacility("")
      setStartTime("")
      setEndTime("")
      setDate("")
    } catch (error) {
      console.error(error);
    }
    // console.log(setAmount,setMessage)
  };
  const haldleClose =()=>{
    setMessage("")
      setAmount("")
  }
 

  return (
    <Container style={{padding:"6rem"}}  >
     
      <Row>
      
        <Col md={6} className="mx-auto">
        
          <Form onSubmit={onSubmit} className='booking-form' >
              <h2>Facility Booking</h2>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="facility">
              <Form.Label>Facility</Form.Label>
              <Form.Control as="select" required value={facility} onChange={(e) => setFacility(e.target.value)}>
                 <option value="">Select Facility</option>
                 <option value="Clubhouse">Clubhouse</option>
                 <option value="Tennis Court">Tennis Court</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="startTime">
              <Form.Label>Start Time:</Form.Label>
              <Form.Control type="time" required  value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="endTime">
              <Form.Label>End Time:</Form.Label>
              <Form.Control type="time" required value={endTime} onChange={(e) => setEndTime(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Book Facility
            </Button>
          </Form>
        </Col>
      </Row>
      {message && (
        <Card className='message-card'>
          <Meta title={`Booking Status:${message}`} description={`Your Booking Amount: ${amount}₹`} />
          <Row>
            <Col>
          <Button variant="primary" type="button" className='btn1' onClick={haldleClose}>
              Ok
            </Button>
            <Button variant="primary" type="button" className='btn1' onClick={haldleClose} style={{marginLeft:"16px"}}>
              Book New Slot
            </Button>
            </Col>
            </Row>
        </Card>
      )}
   
    </Container>
  );
};

export default FacilitiesForm;
