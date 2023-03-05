import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    //get user token for login
    const getToken = async(email, password) => {

        console.log(email, password)

        const res = await fetch(`http://3.84.131.140:3000/api/users/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email, 
                password: password
            })
            
        })
        const data = await res.json()

        if(data.token === undefined ){
            setUserToken(null)
        } else {
            console.log(data.token)
            let userInfo = data
            setUserInfo(userInfo)
            setUserToken(data.token)
            AsyncStorage.setItem('userToken', data.token)
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
        }
    }

    const login = (email, password) => {
        setIsLoading(true);
        getToken(email, password);
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken')
        AsyncStorage.removeItem('userInfo')
        setIsLoading(false);
    }

    const createAccount = async (firstName, lastName, email, password) => {
        console.log(firstName, lastName, email, password);

        const res = await fetch(`http://3.84.131.140:3000/api/users`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
        })

        const data = await res.json()

        console.log(data.token)
        let userInfo = data
        setUserInfo(userInfo)
        setUserToken(data.token)
        AsyncStorage.setItem('userToken', data.token)
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }
            setIsLoading(false);
        } catch(e) {
            console.log(`isLogged in error ${e}`)
        }
    }

    useEffect (() => {
        isLoggedIn();
    }, [])

    return(
    <AuthContext.Provider value={{login, logout, createAccount, isLoading, userToken, userInfo}}>
        {children}
    </AuthContext.Provider>
    )
}
