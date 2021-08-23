import { Fragment, useState } from 'react'
import '../App.css'
import dataFromServer from '../utils/dataFromServer'
import Card from './UI/Card'
import Input from './UI/Input'
import Button from './UI/Button'
import classes from './NewStudent.module.css'


function NewStudent(props) {
    const [score, setScore] = useState('')
    const [profession, setProfession] = useState('')
    const [grades, setGrades] = useState([])
    const [student, setStudent] = useState({name: '', faculty: ''})
    const addGrade = () => {
        if (score !== '' && profession !== '') {
            let grade = {profession: profession, score: score}
            setGrades([...grades, grade])
        }
    }
    const addStudent = (e) => {
        e.preventDefault();
        let stud = {name: student.name, faculty: student.faculty, grades: grades}
        dataFromServer.addItem('http://localhost:8000/api/students', stud).then(res => alert(res.data))
        props.history.push('/')
    }
    return (
        <Fragment>
        <h1>New Student</h1>
        <div className = {classes.newStudent}>
            <div  className = {classes.item}>
                <Card>
                    <h2>Common information</h2>
                        <Input
                        title = 'Name' 
                        input = {{id: "name", value: student.name, onChange: (e) => setStudent({...student, name: e.target.value})}}
                        />
                        
                        <Input
                        title = 'Faculty' 
                        input = {{id: "faculty", value: student.faculty, onChange: (e) => setStudent({...student, faculty: e.target.value})}}
                        />
                </Card>
            </div>
            <div className = {classes.item}>
                <Card>
                    <h2>Grades:</h2>
                    <Input
                    title = 'Profession' 
                    input = {{id: "profession", onChange: (e) => setProfession(e.target.value)}}
                    />

                    <Input
                    title = 'Score' 
                    input = {{id: "score", onChange: (e) => setScore(e.target.value)}}
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Profession</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {grades.map((grade, index) => (<tr key = {index}>
                                                            <td>{grade.profession}</td>
                                                            <td>{grade.score}</td>
                                                        </tr>
                            ))}
                        </tbody>
                    </table>

                    <Button
                        title = "Add Grade"
                        style = {{color: '#000000', backColor: '#bfbfbf'}} 
                        onClick = {addGrade}                   
                    /> 
                </Card>
            </div>
        </div>
        <Button
            title = "Update"
            style = {{color: '#FFFFFF', backColor: '#009999'}} 
            onClick = {addStudent}                   
        />
    </Fragment>
    )
}

export default NewStudent