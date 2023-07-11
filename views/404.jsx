const React = require('react')
const Default = require('./layouts/defaults')

function FourOhFour (){
    return(
        <Default>
            <h1>404</h1>
            <p>Oooops... Page not found</p>
        </Default>
    )
}
module.exports = FourOhFour