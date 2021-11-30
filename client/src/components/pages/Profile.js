import React, {useState} from 'react';
import {Col,  Row} from "reactstrap";
import {Button, Form, IconButton, Radio, RadioGroup,Input, InputGroup,} from "rsuite";
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/all";

const Profile = () => {

    const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);

    const toggleOldPasswordVisible = () => {
        setOldPasswordVisible(!oldPasswordVisible);
    }

    const toggleNewPasswordVisible = () => {
        setNewPasswordVisible(!newPasswordVisible);
    }

    return (
        <Row className='cabinet'>
            <Col sm={12} md={6}>
                <Form fluid className='cabinet-form'>
                    <h6 className="cabinet-title">Ваша личная информация</h6>
                    <Form.Group controlId="id">
                        <Form.ControlLabel className='cabinet-label'>Ваш ID</Form.ControlLabel>
                        <Form.Control readOnly={true} className='cabinet-field' name="id" />
                    </Form.Group>
                    <Form.Group controlId="last_name">
                        <Form.ControlLabel className='cabinet-label'>Фамилия</Form.ControlLabel>
                        <Form.Control className='cabinet-field' name="last_name" />
                    </Form.Group>
                    <Form.Group controlId="first_name">
                        <Form.ControlLabel className='cabinet-label'>Имя</Form.ControlLabel>
                        <Form.Control className='cabinet-field' name="first_name" />
                    </Form.Group>
                    <Form.Group controlId="middle_name">
                        <Form.ControlLabel className='cabinet-label'>Отчество</Form.ControlLabel>
                        <Form.Control className='cabinet-field' name="middle_name" />
                    </Form.Group>
                    <Form.Group controlId="email" className='cabinet-group'>
                        <Form.ControlLabel className='cabinet-label'>Email</Form.ControlLabel>
                        <Form.Control className='cabinet-field' name="email" type="email" />
                        <Button className="cabinet-group-btn rounded">Подтвердить</Button>
                    </Form.Group>
                    <Form.Group controlId="phone" className='cabinet-group'>
                        <Form.ControlLabel className='cabinet-label'>Телефон</Form.ControlLabel>
                        <Form.Control className='cabinet-field' name="phone" />
                        <Button className="cabinet-group-btn rounded">Подтвердить</Button>
                    </Form.Group>
                    <Form.Group style={{textAlign: 'center'}}>
                        <Button className='pink-btn btn-lg rounded'>Сохранить</Button>
                    </Form.Group>
                </Form>
            </Col>
            <Col sm={12} md={6}>
                <Form fluid className='cabinet-form'>
                    <h6 className="cabinet-title">Личная информация</h6>
                    <Form.Group controlId="id">
                        <Form.ControlLabel className='cabinet-label'>Дата рождения</Form.ControlLabel>
                        <Form.Control type='date' className='cabinet-field' name="id" />
                    </Form.Group>
                    <Form.Group controlId="sex">
                        <RadioGroup name="sex" inline>
                            <Radio value="male">Мужчина</Radio>
                            <Radio value="female">Женщина</Radio>
                        </RadioGroup>
                    </Form.Group>
                    <Form.Group style={{textAlign: 'center'}}>
                        <Button className='pink-btn btn-lg rounded'>Сохранить</Button>
                    </Form.Group>
                </Form>
                <Form fluid className='cabinet-form'>
                    <h6 className="cabinet-title">Смена пароля</h6>
                    <Form.Group controlId="old_password" className='cabinet-group cabinet-group-sm'>
                        <Form.ControlLabel className='cabinet-label'>Старый пароль</Form.ControlLabel>
                        <Form.Control className='cabinet-field' name="old_password" type={oldPasswordVisible ? 'text' : 'password'} />
                        <IconButton onClick={toggleOldPasswordVisible} className="cabinet-group-btn" circle>{oldPasswordVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</IconButton>
                    </Form.Group>
                    <Form.Group controlId="new_password" className='cabinet-group cabinet-group-sm'>
                        <Form.ControlLabel className='cabinet-label'>Новый пароль</Form.ControlLabel>
                        <Form.Control className='cabinet-field' name="new_password" type={newPasswordVisible ? 'text' : 'password'} />
                        <IconButton onClick={toggleNewPasswordVisible} className="cabinet-group-btn" circle>{newPasswordVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</IconButton>
                    </Form.Group>
                    <Form.Group controlId="new_password_confirmation" className='cabinet-group cabinet-group-sm'>
                        <Form.ControlLabel className='cabinet-label'>Новый пароль еще раз</Form.ControlLabel>
                        <Form.Control className='cabinet-field' name="new_password_confirmation" type={newPasswordVisible ? 'text' : 'password'} />
                        <IconButton onClick={toggleNewPasswordVisible} className="cabinet-group-btn" circle>{newPasswordVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</IconButton>
                    </Form.Group>
                    <Form.Group style={{textAlign: 'center'}}>
                        <Button className='pink-btn btn-lg rounded'>Сохранить</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
};

export default Profile;