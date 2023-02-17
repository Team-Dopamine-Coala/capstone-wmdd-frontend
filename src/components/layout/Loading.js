import { View } from "native-base"
import { StyleSheet } from "react-native"
import { FadeLoading } from "react-native-fade-loading"
StyleSheet

const Loading = () => {
  return (
    <View style={styles.container}>
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor="gray"
        secondaryColor="lightgray"
        duration={5000}
        visible={false}
        animated={false}
      />
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor="gray"
        secondaryColor="lightgray"
        duration={5000}
        visible={false}
        animated={false}
      />
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor="gray"
        secondaryColor="lightgray"
        duration={5000}
        visible={false}
        animated={false}
      />
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor="gray"
        secondaryColor="lightgray"
        duration={5000}
        visible={false}
        animated={false}
      />
      <FadeLoading
        style={[styles.box]}
        children={''}
        primaryColor="gray"
        secondaryColor="lightgray"
        duration={5000}
        visible={false}
        animated={false}
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