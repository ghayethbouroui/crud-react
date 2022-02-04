import React, { Component, Fragment } from "react";


class List extends Component {
    render() {

        return (
            <Fragment>
                <li>
                    <span>{this.props.detail.name}</span>
                    <button onClick={()=>{this.props.deleteCourse(this.props.index)}}>Delete course</button>

                </li>
            </Fragment>
        )
    }
}

export default List;