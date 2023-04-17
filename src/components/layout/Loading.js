import { View } from "native-base"
import { StyleSheet } from "react-native"
import { FadeLoading } from "react-native-fade-loading"

const Loading = () => {
  return (
    <View style={styles.container}>
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor="#F8CDA7"
        secondaryColor="#FAF5EC"
        duration={1000}
        visible={false}
        animated={true}
      />
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor="#F8CDA7"
        secondaryColor="#FAF5EC"
        duration={1000}
        visible={false}
        animated={true}
      />
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor="#F8CDA7"
        secondaryColor="#FAF5EC"
        duration={1000}
        visible={false}
        animated={true}
      />
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor="#F8CDA7"
        secondaryColor="#FAF5EC"
        duration={1000}
        visible={false}
        animated={true}
      />
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor="#F8CDA7"
        secondaryColor="#FAF5EC"
        duration={1000}
        visible={false}
        animated={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  box: {
    width: '90%',
    height: 20,
    marginVertical: 5,
  },
  boxSmall: {
    width: '60%',
    height: 20,
    marginVertical: 5,
  },
});

export default Loading