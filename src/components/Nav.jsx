import React from 'react'

const Nav = ({setCurrentPage}) => {

    const arr2 = [ {id: 1, name:"Bob"},{id: 5, name:"Bob"}, {id: 110, name:"Bob"}]
    const arr = ["About", "Contact", "Projects", "Resume"]
  return (
    <ul>
        {/* {arr2.map(topic => (
         <li key={topic.id}>{topic.name}</li>
        ))} */}
        {arr.map(topic => (
            <li onClick={()=> setCurrentPage(topic)} key={topic}>{topic}</li>
        ))}
    </ul>
  )
}

export default Nav