import React, {useState} from "react";
import axios from "axios";

export default function EditAndDelete() {
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    pname: "",
    gitrepo: "",
    thumbnail: "",
    link: "",
    techstack: ""
    // other fields
  });

  const handletext = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put("http://localhost:3001/projects", formData);

      return response;
    } catch (error) {
      return error;
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.put("http://localhost:3001/projects", {data: formData});

      return response;
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      //Edit form here
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Project Id
          </label>
          <input
            name="id"
            type="id"
            className="form-control"
            id="exampleInputNqme1"
            onChange={handletext}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            name="pname"
            type="pname"
            className="form-control"
            id="exampleInputName1"
            onChange={handletext}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            value={FormData.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handletext}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Github Repo
          </label>
          <input
            name="gitrepo"
            value="gitrepo"
            type="gitrepo"
            className="form-control"
            id="exampleInputPassord1"
            onChange={handletext}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Thumbnail image link
          </label>
          <input
            name="thumbnail"
            value="thumbnail"
            type="thumbnail"
            className="form-control"
            id="exampleInputPassord1"
            onChange={handletext}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Project Link (Optional)
          </label>
          <input
            name="link"
            value="link"
            type="link"
            className="form-control"
            id="exampleInpuPassord1"
            onChange={handletext}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Techstack used
          </label>
          <input
            name="techstack"
            value="techstack"
            type="techstack"
            className="form-control"
            id="exampleInputPassord1"
            onChange={handletext}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <div className="alert alert-primary" role="alert">
          To edit, copy and paste the project id here and fill the rest of the form. <br /> To delete, just paste the project id here and delete.
        </div>
      </form>
      <button onClick={handleEdit} className="mx-5 my-1">Edit</button>
      <button onclick={handleDelete}>Delete</button>
    </>
  );
}
