import { TouchableOpacity, View } from 'react-native'
import { useContext, useState, useEffect } from 'react';
import {Image } from 'native-base'
import { AuthContext } from '../context/AuthContext';
import { fetchUserById } from '../../utils/queries';

const HeaderImage = ({navigations}) => {
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

  return (
    isLoading && (
    <View mb={9} mt={9}>
        <TouchableOpacity onPress={() => {navigations.navigate('Setting Index',{userID:userID, userFirstname:userFirstname, userLastname:userLastname, userEmail:userEmail, userPhoto:userPhoto, userToken:userToken})}}>
            <Image
                style={{ width: 40, height: 40, borderRadius: 149, marginRight: 20, borderColor: "#FDFDFD", borderWidth: 1.5}}
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