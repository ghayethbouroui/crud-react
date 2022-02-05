import React ,{Component} from 'react'
import Form from './component/courseform';
import List from './component/courselist';


class App extends Component {

  state={
    courses :[
      {name:"HTML"},
      {name:"CSS"},
      {name:"JavaScript"},
      {name:"Python"}
    ],
    current :""
  }

 
  updateCourse=(e)=>{
  this.setState({
    current:e.target.value

  })
  }
 
  addCourse=(e)=>{ 
    e.preventDefault()

    let current = this.state.current;
    let courses =this.state.courses;
    courses.push({name:current})
    this.setState({
      courses,
      current:'',
    })

  }

  deleteCourse=(index)=>{
    let courses =this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses     
    })
  }

  editCourse=(index,value)=>{
    let {courses} =this.state;
    let course= courses[index];
    course ["name"] =value;
    this.setState ({courses})
  }

 

  render(){
    const {courses}=this.state
    const courseliste = courses.map((course,index)=>{
      return(<List deleteCourse={this.deleteCourse} index={index}  detail={course} key={index} editCourse={this.editCourse} />)
    })
    
    return(
      <section className='App'>
        <h2>Add courses</h2>
        <Form current={this.state.current} addCourse={this.addCourse} updateCourse={this.updateCourse}/>
        <ul>{courseliste}</ul>
      </section>
    )
  }
}

export default App;