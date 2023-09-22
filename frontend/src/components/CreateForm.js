import memosStore from "../stores/memosStore";

function CreateForm() {
  const store = memosStore();

  return (
    <div>
      <section className="heading">
        <h2>Create memo</h2>
      </section>
      <section className="form">
        <form onSubmit={store.createMemo}>
          <div className="form-group">
            <input
              type="text"
              name="text"
              value={store.createForm.text}
              onChange={store.updateCreateFormField}
            />
          </div>
          <div className="form-group">
            <button className="btn" type="submit">Create</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CreateForm;
