import React from 'react'

function Name() {
  const users = [
    { name: 'John Doe', id: 1 },
    { name: 'Jane Doe', id: 2 },
    { name: 'Billy Doe', id: 3 },
  ]
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  )
}

export default Name
