import React from 'react';
import {Button, Table} from "rsuite";

const ActionCell = ({ rowData, dataKey, ...props }) => {
    function handleAction() {
        alert(`id:${rowData[dataKey]}`);
    }
    return (
        <Table.Cell style={{padding: '7px 10px'}} {...props} className="link-group">
            <Button onClick={handleAction} size='sm' >Готово</Button>
        </Table.Cell>
    );
};

const PullsMoney = () => {
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const data = [
        {
            id: 1,
            amount: 300,
            user: 'Gasasd Gasdsad Adasfdsfdf',
            card: '8874 8888 8888 8888',
            createdAt: '42:42 42 november 2021'
        },
        {
            id: 2,
            amount: 300,
            user: 'Gasasd Gasdsad Adasfdsfdf',
            card: '8874 8888 8888 8888',
            createdAt: '42:42 42 november 2021'
        },
        {
            id: 1,
            amount: 300,
            user: 'Gasasd Gasdsad Adasfdsfdf',
            card: '8874 8888 8888 8888',
            createdAt: '42:42 42 november 2021'
        },
        {
            id: 1,
            amount: 300,
            user: 'Gasasd Gasdsad Adasfdsfdf',
            card: '8874 8888 8888 8888',
            createdAt: '42:42 42 november 2021'
        },
        {
            id: 1,
            amount: 300,
            user: 'Gasasd Gasdsad Adasfdsfdf',
            card: '8874 8888 8888 8888',
            createdAt: '42:42 42 november 2021'
        },
    ]

    const getData = () => {
        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }
        return data;
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };

    return (
        <div>
            <h6 className='cabinet-title'>Все пользователи</h6>
            <Table
                style={{fontSize: 12}}
                affixHeader
                affixHorizontalScrollbar
                autoHeight
                data={getData()}
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={handleSortColumn}
                loading={loading}
            >
                <Table.Column width={70} align="center" fixed sortable>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.Cell dataKey="id" />
                </Table.Column>
                <Table.Column width={150} sortable>
                    <Table.HeaderCell>Сумма</Table.HeaderCell>
                    <Table.Cell dataKey="amount" />
                </Table.Column>
                <Table.Column width={250} fixed sortable>
                    <Table.HeaderCell>Карта</Table.HeaderCell>
                    <Table.Cell dataKey="card" />
                </Table.Column>
                <Table.Column width={350} fixed sortable>
                    <Table.HeaderCell>Пользователь</Table.HeaderCell>
                    <Table.Cell dataKey="user" />
                </Table.Column>
                <Table.Column width={180} fixed sortable>
                    <Table.HeaderCell>Дата создания</Table.HeaderCell>
                    <Table.Cell dataKey="createdAt" />
                </Table.Column>
                <Table.Column width={'auto'} sortable>
                    <Table.HeaderCell></Table.HeaderCell>
                    <ActionCell dataKey="id" />
                </Table.Column>
            </Table>
        </div>
    );
};

export default PullsMoney;