const React = require('react')
const Default = require('./layouts/defaults')
//const Bread = require('../models/breads.js')


function Index ({breads, title})  {
    return (
      <Default title={title}>
        {/* <h2>Index Page</h2>
        <p>I have {breads[1].name} bread!</p> */}
        {breads.map((bread, index)=>{
            return(
                <li key={index}>
                    <a href={`/breads/${index}`} >
                        {bread.name}
                    </a>
                </li>
            )
        })}
      </Default>
    )
}


module.exports = Index