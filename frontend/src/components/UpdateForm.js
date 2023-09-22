import memosStore from "../stores/memosStore";

function UpdateForm() {
  const store = memosStore();

  return (
    <div>
      <section className="heading">
        <h2>Update memo</h2>
      </section>
      <section className="form">
        <form onSubmit={store.updateMemo}>
          <div className="form-group">
            <input
              name="text"
              type="text"
              value={store.updateForm.text}
              onChange={store.handleUpdateFieldChange}
            />
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UpdateForm;
