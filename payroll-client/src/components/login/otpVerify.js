import React, {useState, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OtpInput from 'react-otp-input';
import PayrollContext from '../../context/payrollContext';
import { loginEnum } from '../../constValue';

const OtpVerify = () => {
  const [otp, setOtp] = useState('');
  const context = useContext(PayrollContext);
  const {setLoginCard} = context;
  return (
    <>
        <Card.Title className='pb-3 text-center'>Please enter OTP recieved on your email</Card.Title>
        <Card.Text>
            <Form >
            <Form.Group className="otpInput mb-4" controlId="formBasicEmail">
                <OtpInput
                inputType='tel'
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>•</span>} 
                renderInput={(props) => <input {...props} />}/>
            </Form.Group>
            <div>
                <Button className='w-100' type='submit' onClick={() => {setLoginCard(loginEnum.reset_password)}}>Verify</Button>
            </div>
            <p className='pt-3 m-0 text-center hoverEffect' style={{fontWeight: "bold",color: "#0d6efd"}} onClick={() => {setLoginCard(loginEnum.login)}}>Back to login</p>
            </Form>
        </Card.Text>
    </>
  )
}

export default OtpVerify