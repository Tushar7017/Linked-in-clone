import { Avatar } from '@material-ui/core';
import React from 'react';
import "../style/Sidebar.css";
import gradient from '../images/gradient.jpg'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
// import avatar from '../images/avatar.JPG';

const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar-recentItem'>
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src={gradient} alt="" />
                <Avatar
                    className="sidebar-avatar"
                    src={user.photoUrl}
                >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Connections</p>
                    <p className="sidebar-statNumber">37</p>
                </div>
                <div className="sidebar-stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar-statNumber">13</p>
                </div>
            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
