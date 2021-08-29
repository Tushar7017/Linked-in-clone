import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import logo from './images/icon.png';
import "./style/Header.css";
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import avatar from './images/avatar.JPG';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} alt="logo" />

                <div className="header-search">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder='Search'

                    />
                </div>

            </div>

            <div className="header-right">
                <HeaderOption
                    Icon={HomeIcon}
                    title='Home'
                />
                <HeaderOption
                    Icon={SupervisorAccountIcon}
                    title='My network'
                />
                <HeaderOption
                    Icon={BusinessCenterIcon}
                    title="Jobs"
                />
                <HeaderOption
                    Icon={ChatIcon}
                    title="Messaging"
                />
                <HeaderOption
                    Icon={NotificationsIcon}
                    title="Notifications"
                />
                <HeaderOption
                    avatar={true}
                    title="me"
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    )
}

export default Header
