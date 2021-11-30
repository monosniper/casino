import React from 'react';
import {BsCheckLg, IoCloseSharp, MdOutlinePendingActions} from "react-icons/all";

const PayHistory = () => {

    const transactions = [
        {
            description: 'Пополнение',
            status: 'success',
            amount: 300,
            date: '22:10 24 ноября 2021',
        },
        {
            description: 'Вывод',
            status: 'success',
            amount: -450,
            date: '22:10 24 ноября 2021',
        },
        {
            description: 'Пополнение',
            status: 'error',
            amount: 300,
            date: '22:10 24 ноября 2021',
        },
        {
            description: 'Вывод',
            status: 'pending',
            amount: -500,
            date: '22:10 24 ноября 2021',
        },
        {
            description: 'Вывод',
            status: 'error',
            amount: -200,
            date: '22:10 24 ноября 2021',
        },
    ];

    const icons = {
        success: <BsCheckLg/>,
        error: <IoCloseSharp/>,
        pending: <MdOutlinePendingActions/>,
    };

    const lang = {
        success: 'Успешно',
        error: 'Ошибка',
        pending: 'Ожидание',
    };

    return (
        <div>
            <h6 className="cabinet-title">История транзакций</h6>
            {transactions.map(transaction => (
                <div className="transaction">
                    <div className={`transaction-col transaction-status`}>
                        <span className={`transaction-icon ${transaction.status}`}>{icons[transaction.status]}</span>
                        <span>{lang[transaction.status]}</span>
                    </div>
                    <div className="transaction-col transaction-description">{transaction.description}</div>
                    <div className="transaction-col transaction-amount">{transaction.amount > 0 ? '+' : ''}{transaction.amount}</div>
                    <div className="transaction-col transaction-date">{transaction.date}</div>
                </div>
            ))}
        </div>
    );
};

export default PayHistory;