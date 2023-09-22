import memosStore from '../stores/memosStore'

function UpdateForm() {
    const store = memosStore()

    if (!store.updateForm._id) return <></>

  return (
    
        <div>
          <h2>Update memo</h2>
          <form onSubmit={store.updateMemo}>
            <input
              name="text"
              type="text"
              value={store.updateForm.text}
              onChange={store.handleUpdateFieldChange}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      
  )
}

export default UpdateForm