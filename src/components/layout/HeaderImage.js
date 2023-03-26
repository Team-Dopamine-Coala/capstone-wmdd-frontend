import { TouchableOpacity, Text, View } from 'react-native'
import { useContext, useState, useEffect } from 'react';
import {Image, Box} from 'native-base'
import { AuthContext } from '../context/AuthContext';

import { fetchUserById } from '../../utils/queries';
const HeaderImage = ({navigation}) => {
    const {userInfo} = useContext(AuthContext)
    // const userToken = userInfo.token
    console.log('ユーザー情報',userInfo)
    const [userID] = useState(userInfo._id)
    const [userFirstname] = useState(userInfo.firstName)    
    const [userLastname] = useState(userInfo.lastName)    
    const [userEmail] = useState(userInfo.email)
    const [userPhoto, setUserPhoto] = useState('')
    console.log(userID,userFirstname,userLastname,userEmail, userPhoto)
    const userToken = userInfo.token
    //これ二つ確認
    console.log('ナビ',navigation)
    // console.log('写真',userPhoto)
    
    useEffect(() => {
        fetchUserById(userID, userToken)
        .then((data) => {
            setUserPhoto(data.photoUrl)
            console.log('データ',data.photoUrl)
        })
    },[])  
    const url = 'https://res.cloudinary.com/dp53wf7gb/image/upload/v1679639471/johncoala_owqiyr.jpg'
//userPhotoがgetできたらそれもPropsで一緒に送る
  return (
    <View mb={9} mt={9}>
        <TouchableOpacity onPress={() => {navigation.navigate('Setting Index',{userID, userFirstname, userLastname, userEmail, userPhoto})}}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 149, marginRight: 20, borderColor: "#FDFDFD", borderWidth: 1.5}}
            source={{ uri: url}}
              resizeMode='contain'
              alt='user image'
            /> 
        </TouchableOpacity>
    </View>
  )
}

export default HeaderImage
//   source={{ uri: ${data.photoUrl}'https://res.cloudinary.com/dp53wf7gb/image/upload/v1679639471/johncoala_owqiyr.jpg'}}