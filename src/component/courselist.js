import React, { Component, Fragment } from "react";


class List extends Component {

    state={
        isEdit:false
    }

    renderCourse = () => {
        return (
            <li>
                <span>{this.props.detail.name}</span>
                <button onClick={()=>{this.toggleState()}}>Edit Course</button>
                <button onClick={() => { this.props.deleteCourse(this.props.index) }}>Delete course</button>

            </li>
        )
    }

    updateCourseItem=(e)=>{
        e.preventDefault()
       this.props.editCourse(this.props.index,this.input.value);
       this.toggleState();
       

    }

    rendeUpdateCourse=()=>{
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) =>{this.input =v}} defaultValue={this.props.detail.name} />
                <button type="submit" >Edit Course</button>
            </form>
        )
    }

    toggleState=()=>{

      let {isEdit}=this.state;
      this.setState({
          isEdit :  !isEdit
      })

    }



    render() {

        let isEdit =this.state.isEdit

        return (
            <Fragment>
                {isEdit ? this.rendeUpdateCourse() : this.renderCourse()}
            </Fragment>
        )
    }
}

export default List;