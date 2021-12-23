import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Home = () => {

    const navigate = useNavigate();
    const [token, setToken] = useState('');

    useEffect(() => { 
        setToken(sessionStorage.getItem('token')) 
        if(token){
            navigate('/dashboard')
        }
    });

    return (
        <div>
            Home
        </div>
    )
}
