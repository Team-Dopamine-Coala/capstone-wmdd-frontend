import { TouchableOpacity, View } from 'react-native'
import { useContext, useState, useEffect } from 'react';
import {Image } from 'native-base'
import { AuthContext } from '../context/AuthContext';
import { fetchUserById } from '../../utils/queries';

const HeaderImage = ({navigations, attendance}) => {
    const {userInfo} = useContext(AuthContext)
    const [userToken] = useState(userInfo.token)
    const [userID] = useState(userInfo._id)
    const [userFirstname] = useState(userInfo.firstName)    
    const [userLastname] = useState(userInfo.lastName)    
    const [userEmail] = useState(userInfo.email)
    const [userPhoto, setUserPhoto] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    //Fetch Photo URL
    useEffect(() => {
        fetchUserById(userID, userToken)
        .then((data) => {
            setUserPhoto(data.photoUrl)
            setIsLoading(true)
        })
    },[])  

    //User photo size
    const imageSize = attendance ? 66 : 40;
    //User photo marginRight
    const imageMarginRight = attendance ? 8 : 20;
    
  return (
    isLoading && (
    <View mb={9} mt={9}>
        <TouchableOpacity onPress={() => {navigations.navigate('Setting Index',{userID:userID, userFirstname:userFirstname, userLastname:userLastname, userEmail:userEmail, userPhoto:userPhoto, userToken:userToken})}}>
            <Image
                style={{ width: imageSize, height: imageSize, borderRadius: 149, marginRight: imageMarginRight, borderColor: "#FDFDFD", borderWidth: 1.5}}
                source={{ uri: `${userPhoto}`}}
                resizeMode='contain'
                alt='user img'
            /> 
        </TouchableOpacity>
    </View>
    )
  )
}

export default HeaderImage