import React, { useState } from 'react'

function Inputs({addDoc, deleteDocument, updateDocument}) {
    const [name, setName] = useState('')
    const [project, setProject] = useState([])
    const [id, setId] = useState('')
    const [updateId, setUpdateId] = useState('')

    const submitHandler=()=> {
        console.log(name, project)
        addDoc(name, project);
        setName('')
        setProject([])
    }

    const deleteDoc = () => {
        console.log('Deleting doc of id', id)
        deleteDocument(id)
        setId('')
        setUpdateId('')
    }

    const updateDoc = () => {
        console.log('Updating doc with id', updateId)
        updateDocument(updateId)
    }

  return (
    <div>
        <label htmlFor='name'>Name</label>
        <input type="text" value={name} onChange={e=> setName(e.target.value)} name='name'/>

        <div>
            <label htmlFor='project'>Project Name</label>
            <input type="text" value={project} onChange={e=> setProject(e.target.value)} name='project'/>
        </div>
        <button onClick={submitHandler}>Submit</button>

        <div>
            <label htmlFor='doc'>Delete Document id</label>
            <input type="text" value={id} onChange={e=> setId(e.target.value)} name='doc'/>
            <button onClick={deleteDoc}>Delete Doc</button>
        </div>

        <div>
            <label htmlFor='updateDoc'>Update Document id</label>
            <input type="text" value={updateId} onChange={e=> setUpdateId(e.target.value)} name='updateDoc'/>
            <button onClick={updateDoc}>Update Doc</button>
        </div>
    </div>
  )
}

export default Inputs