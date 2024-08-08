import React from 'react';
import Layout from '../components/Layout';
import { Form, Row, Col, Input,TimePicker,message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import axios from 'axios';

const ApplyDoctor = () => {
    const{user} = useSelector(state => state.user)

    const dispatch= useDispatch()
    const navigate = useNavigate()
    //handle form
    const handleFinish = async (values) =>{
        try{
            dispatch(showLoading())
            const res = await axios.post('/api/v1/user/apply-doctor',{...values, userId:user._id},
            {
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            });
            dispatch(hideLoading())
            if(res.data.success){
                message.success(res.data.success);
                navigate("/");
            }
            else{
                message.error(res.data.success);
            }
        }
        catch(error){
            console.log(error)
            message.error("Something went wrong")
        }
    }
  return (
    <Layout>
        <h1 className='text-center'>ApplyDoctor</h1>
        <Form layout='vertical' onFinish={handleFinish} className="m-4"> 
        <h3 className=''>Pesonal Details:</h3>
            <Row gutter={30}>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="First Name" name="firstName" required rules={[{required:true}]}>
                        <Input type='text' placeholder='FirstName'/>
                    </Form.Item>
                </Col>

                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Last Name" name="lastName" required rules={[{required:true}]}>
                        <Input type='text' placeholder='LastName'/>
                    </Form.Item>
                </Col>

                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Phone No" name="phone" required rules={[{required:true}]}>
                        <Input type='text' placeholder='Phone No'/>
                    </Form.Item>
                </Col>

                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Email" name="email" required rules={[{required:true}]}>
                        <Input type='text' placeholder='Email'/>
                    </Form.Item>
                </Col>

                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Website" name="website">
                        <Input type='text' placeholder='Website'/>
                    </Form.Item>
                </Col>

                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Address" name="address" required rules={[{required:true}]}>
                        <Input type='text' placeholder='Address'/>
                    </Form.Item>
                </Col>
            </Row>
            <h3>Professional Details:</h3>
            <Row gutter={30}>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Specialization" name="specialization" required rules={[{required:true}]}>
                        <Input type='text' placeholder='Specialization'/>
                    </Form.Item>
                </Col>

                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Experience" name="experience" required rules={[{required:true}]}>
                        <Input type='text' placeholder='Experience'/>
                    </Form.Item>
                </Col>

                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Fee Per Cunsaltation" name="feePerCunsaltation" required rules={[{required:true}]}>
                        <Input type='text' placeholder='Fee'/>
                    </Form.Item>
                </Col>

                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Timing" name="timing" required rules={[{required:true}]}>
                        <TimePicker.RangePicker format="HH:mm" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}></Col>
                <Col xs={24} md={24} lg={8}></Col>
                <Col xs={24} md={24} lg={8}></Col>
                <Col xs={24} md={24} lg={8}>
                <button className='btn btn-primary form-btn'type='submit'>Submit</button>
                </Col>
            </Row>
            <div className='d-flex' justify-content-end>

            </div>
        </Form>
    </Layout>

  )
}

export default ApplyDoctor;