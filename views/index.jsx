const React = require('react')
const Default = require('./layouts/Default')

function Index ({breadDataArray, title}) {
    return (
      <Default>
        {/* This is a JSX comment */}
        <h2>Index Page</h2>
        <ul>
            {
                breadDataArray.map((bread, index) =>
                {
                    return(
                    <li key = {index}>
                        <a href ={`/breads/${index}`}>
                            {bread.name}  
                        </a>
                    </li>)
                })
            }
        </ul>
        <div className="newButton">
            <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
      </Default>
    )
}

module.exports = Index
