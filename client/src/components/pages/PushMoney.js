import React, {useState} from 'react';
import {Col, Row} from "reactstrap";
import {Button, IconButton, Input, MaskedInput, Notification, toaster} from "rsuite";
import Plus from "@rsuite/icons/Plus";
import Minus from "@rsuite/icons/Minus";

const PushMoney = () => {

    const [amount, setAmount] = useState(200);
    const [cardNumber, setCardNumber] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cvv, setCvv] = useState('');
    const cardMask = [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/
    ];
    const cardDateMask = [/\d/,/\d/,'/',/\d/,/\d/];
    const cvvMask = [/\d/,/\d/,/\d/];

    const submit = () => {
        if(amount > 0 && amount < 50000) {
            if(cardNumber !== '' && cardDate !== '' && cvv !== '') {
                // request
            } else {
                toaster.push(
                    <Notification type="error" header="Ошибка">
                        <p>Введите данные банковской карты</p>
                    </Notification>
                )
            }
        } else {
            toaster.push(
                <Notification type="error" header="Ошибка">
                    <p>Введите сумму</p>
                </Notification>
            )
        }
    }

    return (
        <div>
            <div className="pushmoney-btn-toolbar">
                <Button onClick={() => setAmount(100)} className="pushmoney-btn">100</Button>
                <Button onClick={() => setAmount(200)} className="pushmoney-btn">200</Button>
                <Button onClick={() => setAmount(300)} className="pushmoney-btn">300</Button>
                <Button onClick={() => setAmount(500)} className="pushmoney-btn">500</Button>
                <Button onClick={() => setAmount(1000)} className="pushmoney-btn">1000</Button>
            </div>

            <div className="pushmoney-amount-group">
                <IconButton onClick={() => setAmount(amount - 100)} circle icon={<Minus />} />
                <Input className='field' type='number' min="200" max="50000" value={amount} onChange={setAmount} />
                <IconButton onClick={() => setAmount(amount + 100)} circle icon={<Plus />} />
            </div>

            <div className='card-group'>
                <div>
                    <div>
                        <p>Введите номер карты</p>
                        <MaskedInput
                            className='field'
                            value={cardNumber}
                            mask={cardMask}
                            keepCharPositions={true}
                            showMask={false}
                            style={{ width: 300 }}
                            onChange={setCardNumber}
                        />
                    </div>
                    <div style={{marginTop: '1rem'}}>
                        <Row>
                            <Col sm={12} md={6}>
                                <p>Срок действия</p>
                                <MaskedInput
                                    className='field'
                                    value={cardDate}
                                    mask={cardDateMask}
                                    keepCharPositions={true}
                                    showMask={false}
                                    style={{ width: 150 }}
                                    onChange={setCardDate}
                                />
                            </Col>
                            <Col sm={12} md={6}>
                                <p>CVV</p>
                                <MaskedInput
                                    className='field'
                                    value={cvv}
                                    mask={cvvMask}
                                    keepCharPositions={true}
                                    showMask={false}
                                    style={{ width: 150 }}
                                    onChange={setCvv}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '2rem'}}>
                <Button onClick={submit} className="pink-btn btn-lg rounded">Оплатить</Button>
            </div>

        </div>
    );
};

export default PushMoney;