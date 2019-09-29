import React from "react";

export const Column = (props) => (<td>{props.value}</td>);

export const Row = (props) => {
  const cols = Object.keys(props.cols).map((key)=> <Column key={key}  value={props.cols[key]}/>);
  return <tr>{cols}</tr> ;
};

export const Table = (props) => {

}