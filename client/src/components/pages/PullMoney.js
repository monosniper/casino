import React, {useState} from 'react';
import {PROFILE_ROUTE} from "../../utils/routes";
import {Link} from "react-router-dom";
import {Button, IconButton, Input, MaskedInput, Notification, toaster} from "rsuite";
import Minus from "@rsuite/icons/Minus";
import Plus from "@rsuite/icons/Plus";
import {Col, Row} from "reactstrap";

const PullMoney = () => {

    const verified = true;
    const [amount, setAmount] = useState(200);
    const [cardNumber, setCardNumber] = useState('');
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

    const submit = () => {
        if(amount > 0 && amount < 50000) {
            if(cardNumber !== '') {
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

    return verified ? (
        <div>
            <h6><b>Доступно для вывода: 0.00 ₴</b></h6>
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
            </div>

            <div style={{textAlign: 'center', marginTop: '2rem'}}>
                <Button onClick={submit} className="pink-btn btn-lg rounded">Оплатить</Button>
            </div>
        </div>
    ) : <p style={{margin: '2rem 0', textAlign: 'center'}}>Для возможности оформления вывода подтвердите свой номер телефона и почту в <Link to={PROFILE_ROUTE}>Профиле</Link></p>;
};

export default PullMoney;