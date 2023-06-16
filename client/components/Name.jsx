import React from 'react'

function Name() {
  const users = [
    { name: 'John Doe', id: 1 },
    { name: 'Jane Doe', id: 2 },
    { name: 'Billy Doe', id: 3 },
  ]
  return (
    <>
      <p>List of Names</p>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  )
}

export default Name
