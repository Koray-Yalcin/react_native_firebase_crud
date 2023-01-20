import { View } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, Input } from 'react-native-elements'
import firestore from '@react-native-firebase/firestore'

const Create = ({navigation}: any) => {

  const [student, setStudent] = useState({
    name: '',
    age: '',
    school: ''
  });

  const createStudent = async (student: any) => {
    try {
      await firestore().collection('students').add(student);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 15}}>
      <Text style={{textAlign: 'center', marginBottom: 15}}>Create a Student</Text>
      <Input value={student.name} onChangeText={(name) => {setStudent({...student, name: name})}}
      placeholder={'Enter Name'} leftIcon={{type: 'font-awesome', name: 'header'}}/>
      <Input value={student.age} onChangeText={(age) => {setStudent({...student, age: age})}}
      placeholder={'Enter Age'} leftIcon={{type: 'font-awesome', name: 'vcard'}}/>
      <Input value={student.school} onChangeText={(school) => {setStudent({...student, school: school})}}
      placeholder={'Enter School'} leftIcon={{type: 'font-awesome', name: 'building-o'}}/>

      <Button title={'Send'} onPress={() => {createStudent(student); console.log(student)}} />
    </View>
  )
}

export default Create