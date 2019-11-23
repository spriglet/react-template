import React from "react";
import {Row} from "./Table";


const users = [
  {"id":1, "firstName":"Micah", "lastName": "Bell"},
  {"id":2, "firstName":"James", "lastName": "Bond"},
]


export class ApplicationTable extends React.Component{

  constructor(props){
    super(props);
    this.state = {applications:[]}

  }
  componentDidMount() {
    fetch("/companies").then(data=>data.json()).then(arr=>{
      const applications = arr.map(row=>({
        name:row.name,
        website:<a href={row.website} target="_blank">website</a>,
        applied:<input id={row.id} type="checkbox" />
      }))
      this.setState({applications:applications})
    });
  }
  render(){
    const {applications} = this.state;
    const rows = applications.map(obj=><Row id={obj.id} cols={obj} />)

    return(
      <div>
        <table class="table table-hover table-fixed">
          <thead>
            <tr>{applications.length > 0 ? Object.keys(applications[0]).map(name=><td>{name}</td>) : "" }</tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

