import { useRef } from "react";
import { Dimensions } from 'react-native'
import { View } from "native-base"

import StudentList from "../lists/StudentList";
import BottomSheet from 'react-native-simple-bottom-sheet';

const ClassBottomSheet = ({ students, openDialog }) => {
  const panelRef = useRef(null)

  return (
    <BottomSheet
        isOpen={false}
        ref={ref => panelRef.current = ref}
        animationDuration={300}
        sliderMinHeight={0}
        sliderMaxHeight={Dimensions.get('window').height * 0.9}
      >
      <View>
        <StudentList students={students} selectedClass={selectedClass} openDialog={openDialog} />
      </View>
    </BottomSheet>
  )
}

export default ClassBottomSheet