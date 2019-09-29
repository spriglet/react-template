import React from "react";
import {Row} from "./Table";


const users = [
  {"id":1, "firstName":"Micah", "lastName": "Bell"},
  {"id":2, "firstName":"James", "lastName": "Bond"},
]

export const UserTable = (props)  => {
  const rows  = users.map((user)=>{
    return <Row key={user.id}  cols={user}/>
  });
  return(
    <div>
      <table>
      <thead>
      </thead>
      <tbody>
        {rows}
      </tbody>
      </table>
    </div>
  );
}

