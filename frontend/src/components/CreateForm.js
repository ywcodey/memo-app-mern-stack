import memosStore from '../stores/memosStore'

function CreateForm() {
    const store = memosStore()

    if (store.updateForm._id) return <></>

  return (
    
        <div>
          <h2>Create memo</h2>
          <form onSubmit={store.createMemo}>
            <input
              type="text"
              name="text"
              value={store.createForm.text}
              onChange={store.updateCreateFormField}
            />
            <button type="submit">Create</button>
          </form>
        </div>
      
  )
}

export default CreateForm