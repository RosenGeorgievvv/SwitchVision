import React, { useState, useEffect } from 'react';
import DarkLogo from '../assets/logo-dark.jpg';
import WhiteLogo from '../assets/logo-light.jpg';
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs';
import MyPicture from '../assets/picture1.jpg'

function Main() {

    const [theme, setTheme] = useState('light');

    useEffect(() =>{
        if(localStorage.getItem('theme') === null){
            localStorage.setItem('theme', 'light')
        }
    })




        return (
            <div>Starting</div>
        )
    }

export default Main