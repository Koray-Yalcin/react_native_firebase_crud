import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Text, Input } from 'react-native-elements'
import firestore from '@react-native-firebase/firestore'

const Update = ({navigation, route}: any) => {

  const { studentToUpdate } = route.params;
  const studentId = studentToUpdate.id;
  const [student, setStudent] = useState({
    name: studentToUpdate.name,
    age: studentToUpdate.age,
    school: studentToUpdate.school
  });

  const updateStudent = async (student: any) => {
    console.log(student, studentId)
    try {
      await firestore().collection('students').doc(studentId).update(student);
      navigation.navigate('Feed'); 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 15}}>
      <Text style={{textAlign: 'center', marginBottom: 15}}>Update a Student</Text>
      <Input value={student.name} onChangeText={(name) => {setStudent({...student, name: name})}}
      placeholder={'Enter Name'} leftIcon={{type: 'font-awesome', name: 'header'}}/>
      <Input value={student.age} onChangeText={(age) => {setStudent({...student, age: age})}}
      placeholder={'Enter Age'} leftIcon={{type: 'font-awesome', name: 'vcard'}}/>
      <Input value={student.school} onChangeText={(school) => {setStudent({...student, school: school})}}
      placeholder={'Enter School'} leftIcon={{type: 'font-awesome', name: 'building-o'}}/>

      <Button title={'Send'} onPress={() => {updateStudent(student);}} />
    </View>
  )
}

export default Update