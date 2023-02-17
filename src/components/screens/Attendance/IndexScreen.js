import { Text, VStack, Center } from 'native-base'
import { useState, useEffect } from 'react'
import ClassList from "./ClassList/ClassList"
import Calendar from "./Calendar/Calendar"
import WelcomeCard from "./Card/WelcomeCard"

const IndexScreen = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const getClasses = async () => {
      const res = await fetchClasses();
      setClasses(res)
 
    };

    getClasses() 

  }, [])

  // Fetch Classes
const fetchClasses = async () => {
  // const res = await fetch(`${process.env.REACT_APP_API_URL}/api/class/63e065e53e54d66c36ab24ec/63e9fcf20386d6f0fd9053b3`);
  const res = await fetch("http://3.84.131.140:3000/api/class/63e9fcf20386d6f0fd9053b3");
  const data = await res.json();
  return data;
};

  return (
    <VStack p={3} pb={20} bgColor="#ffffff" flex={1}>

      {/* <Text>This is index screen of Attendance</Text> */}
      <WelcomeCard/>
      <Calendar />
      <ClassList classes={classes} />
    </VStack>
  )
}

export default IndexScreen