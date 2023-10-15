import React, { useState, useEffect } from "react";
import './header.scss';


const Header = () => {
    const emojis = [
        '😲',
        '😵‍💫',
        '🥲',
        '🍵',
        '😆',
        '🎮'

    ]

    const [curEmoji, setCurEmoji] = useState(emojis[Math.floor(Math.random() * emojis.length)])

    const randomEmoji = () => {
        let emoji = emojis[Math.floor(Math.random() * emojis.length)];
        while (emoji === curEmoji) {
            emoji = emojis[Math.floor(Math.random() * emojis.length)];
        };

        return emoji;
    };

    useEffect(() => {
        const emojiInterval = setInterval(() => {
            setCurEmoji(randomEmoji());
        }, 4000);

        return () => clearInterval(emojiInterval);
    }, []);

    return (
        <div className="header-main">
            <div><b>Mini-us</b> | A Collection Of Blocks</div>
            <div style={{display: 'flex'}}>
                Created with <div id='emoji-char'>{curEmoji}</div> by <a href="https://github.com/ROTBOW">Josiah Leon</a>
            </div>
            <div className="header-line"/>
        </div>
    )
};

export default Header;