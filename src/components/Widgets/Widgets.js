import React from 'react'
import '../style/Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets-articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets-header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React is back", "Top news - 9909 readers")}
            {newsArticle("CoronaVirus: India updates", "Top news - 808 readers")}
            {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
            {newsArticle("Is Redux too good?", "Code - 499 readers")}
            {newsArticle("React launches new version", "Top news - 200 readers")}
        </div>
    )
}

export default Widgets
