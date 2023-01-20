import { View, ScrollView } from 'react-native'
import { Card, Header } from 'react-native-elements'
import React, {useState, useEffect} from 'react'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/FontAwesome'

const Feed = ({navigation}: any) => {
  const [students, setStudents] = useState<any>([]);

  const fetchStudents = async () => {
    const students = await firestore().collection('students').get();
    setStudents(students.docs.map((doc) => {
      return {...doc.data(), id: doc.id}
    }))
  }

  useEffect(() => {
    fetchStudents();

    firestore().collection('students').onSnapshot(query => {
      query.docChanges().forEach(change => {
        fetchStudents();
      })
    })
  }, []);

  const deleteStudent = async (id: string) => {
    await firestore().collection('students').doc(id).delete();
    fetchStudents();
  }
  return (
    <View>
      <Header
      placement='left'
      centerComponent={{text: 'STUDENTS', style:{color: '#fff', marginTop: 2}}}
      leftComponent={{icon: 'people', color: '#fff'}}/>
      <ScrollView>
        {
          students.map((student:any) => {
            return (
              <Card key={student.id}>
                <Card.Title style={{fontSize: 21, color: 'red'}}>{student.name}</Card.Title>
                <Card.Divider/>
                <Card.Title>{student.age} years old, studying at {student.school}</Card.Title>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Icon
                  name='pencil'
                  color={'darkblue'}
                  size={20}
                  onPress={() => {navigation.navigate('Update', {
                    studentToUpdate: student
                  })}}/>
                  <Icon
                  name='trash'
                  color={'red'}
                  size={20}
                  onPress={() => {deleteStudent(student.id)}} />
                </View>
              </Card>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Feed