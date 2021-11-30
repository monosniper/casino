import React from 'react';
import Logo from '../../assets/images/logo.png';
import {Button, Dropdown, IconButton} from "rsuite";
import {Link} from "react-router-dom";
import {AiOutlineUser} from "react-icons/all";
import Player from "../Player";
import {CASSA_ROUTE, HOME_ROUTE, PROFILE_ROUTE, PUSH_MONEY_ROUTE, USERS_ROUTE} from "../../utils/routes";

const Header = () => {

    const isAdmin = true;

    return (
        <div className="header">
                <div className="header-left">
                    <Link to={HOME_ROUTE} className="header-logo">
                        <img alt="Casino" src={Logo}/>
                    </Link>
                </div>
                <div className="header-center">
                    <div className="header-menu">
                        <div className="header-menu-item">
                            <Link to="#">Турниры</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to="#">Акции</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to="#">Бонусы</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to="#">faq</Link>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <Player />
                    <div className="header-panel">
                        <div className="header-panel-item">
                            <Dropdown renderToggle={(props, ref) => <Button {...props} ref={ref} className="casino-btn">RU</Button>}>
                                <Dropdown.Item className="casino-btn">En</Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="header-panel-item">
                            <span className="balance">0.00 ₴</span>
                            {isAdmin &&
                            <Link style={{margin: '0 .5rem'}} to={USERS_ROUTE}>
                                <Button className="casino-btn">Админка</Button>
                            </Link>
                            }
                            <Link to={PUSH_MONEY_ROUTE}>
                                <Button className="casino-btn">Касса</Button>
                            </Link>
                        </div>
                        <div className="header-panel-item">
                            <Link to={PROFILE_ROUTE} >
                                <IconButton icon={<AiOutlineUser/>} className="casino-btn" circle />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Header;