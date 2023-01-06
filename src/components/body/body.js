import React from "react";
import "./body.css"
import Buy from './buy/buy'
import Table from './tabs/tabs'


function Body() {
  return (
    <div className="body-container">
      <Buy></Buy>
      <Table></Table>
    </div>

  )
}



export default Body