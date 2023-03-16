import { Text, VStack } from "native-base"

const SkillList = ({navigation, route}) => {

    const { skills, title } = route.params

    console.log(skills)

    return(
        <VStack pt="100px" pb={20} flex={1} bgColor="#F4903F">
            <Text>Hello</Text>
        </VStack>
    )
}

export default SkillList