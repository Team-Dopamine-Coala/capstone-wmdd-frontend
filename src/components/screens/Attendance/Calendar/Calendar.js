import CalendarStrip from 'react-native-calendar-strip';

const Calendar = () => {
    const dateSelected = (date) => {
      console.log(date)
    }
  
    return (

        <CalendarStrip
        scrollable
        style={{height: 130, paddingTop: 20, paddingBottom: 10}}
        calendarHeaderStyle={{
          fontSize: 18,
          alignSelf: 'flex-start',
        }}
        selectedDate={new Date()}
        onDateSelected={dateSelected}
        minDate="2023-01-01"
        maxDate="2023-12-31"
        dayContainerStyle={{
          paddingBottom: 4
        }}
        dateNameStyle={{
          marginBottom: 6,
          fontSize: 13,
          textTransform: 'capitalize'
        }}
        dateNumberStyle={{
          paddingBottom: 4,
          fontSize: 16,
          fontWeight: '300'
        }}
        highlightDateNameStyle={{
          marginBottom: 6,
          fontSize: 13,
          textTransform: 'capitalize'
        }}
        highlightDateNumberStyle={{
          color: '#ffffff',
          fontSize: 16
        }}
        highlightDateNumberContainerStyle={{
          backgroundColor: '#40506A',
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          minWidth: 25,
          minHeight: 25
        }}
      />
        
    )
  }
  
  export default Calendar