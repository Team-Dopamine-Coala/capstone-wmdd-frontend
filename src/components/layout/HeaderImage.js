import { TouchableOpacity, Text, View } from 'react-native'
import { useContext, useState, useEffect } from 'react';
import {Image} from 'native-base'
import { AuthContext } from '../context/AuthContext';

import { fetchUserById } from '../../utils/queries';
const HeaderImage = ({navigation}) => {
    const {userInfo} = useContext(AuthContext)
    // const userToken = userInfo.token
    console.log(userInfo)
    const [userID] = useState(userInfo._id)
    const [userFirstname] = useState(userInfo.firstName)    
    const [userLastname] = useState(userInfo.lastName)    
    const [userEmail] = useState(userInfo.email)
    // const [userPhoto, setUserPhoto] = useState(userInfo.photoUrl)
    console.log(userID,userFirstname,userLastname,userEmail)
    const userToken = userInfo.token
    //これ二つ確認
    // console.log('ナビkore',navigation)
    // console.log('写真',userPhoto)
    
    useEffect(() => {
        fetchUserById(userID, userToken)
        .then((data) => {
            
            console.log('データ',data)
        })
    },[])  
    

  return (
    <View>
        <TouchableOpacity onPress={() => {navigation.navigate('Setting Index',{userID, userFirstname, userLastname, userEmail, userPhoto})}}>
            <Text>YAHOOO</Text> 
            {/* <Image
              style={{ width: 200, height: 50 }}
              source={require(`${userPhoto}`)}
              resizeMode='contain'
            />  */}
        </TouchableOpacity>
    </View>
    
  )
}

export default HeaderImage
