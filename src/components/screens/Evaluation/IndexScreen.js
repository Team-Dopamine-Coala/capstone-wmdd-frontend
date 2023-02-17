import { Center, Heading, ScrollView, Text, View, Box } from 'native-base'
import CalendarStrip from 'react-native-calendar-strip';

const IndexScreen = () => {
  return (
    <ScrollView p={3}>
      <Center>
        <Heading>Evaluation</Heading>
      </Center>
      
      <CalendarStrip
        style={{height:150, paddingTop: 20, paddingBottom: 10}}
      />
      
      <Box>
        <Box></Box>
      </Box>
    </ScrollView>
  )
}

export default IndexScreen