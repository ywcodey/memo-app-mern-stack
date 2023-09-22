import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";
import memosStore from "../stores/memosStore";

function Form() {
  const store = memosStore();

  if (store.updateForm._id) return <UpdateForm />;

  return <CreateForm />;
}

export default Form;
