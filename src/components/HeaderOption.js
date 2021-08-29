import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import "./style/HeaderOption.css";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon &&
                <Icon className='headerOption-icon' />
            }
            {avatar && (
                <Avatar
                    className="headerOption-icon"
                >
                    {user?.email[0]}
                </Avatar>
            )
            }
            <p className='headerOption-title'>{title}</p>
        </div>
    )
}

export default HeaderOption
