import axios from "axios"
import { useState } from "react";
import File from "./File";


const AddStudent = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [student, setStudent] = useState({
    image: "",
    name: "",
    class: "",
    age: "",
    height:"",
    description:"",
    available: true,
    
  });

  const imagesHandler = (images) => {
    setStudent({ ...student, image: images[0]?.url });
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/create_student`, student, {})
      .then((response) => {
        setSuccess(response.data.message);
        setStudent({
          image: "",
          name: "",
          class: "",
          age: "",
          height:"",
          description:"",
          available: true,

        });
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="addStudentContainer">
      {success && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          {success}
        </p>
      )}
      {error && (
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      )}

      <File
        imagesHandler={(images) => imagesHandler(images)}
        reset={false}
      />
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="addStudentContainerForm"
      >
        <input
          name="name"
          type="text"
          value={student.name}
          placeholder="Enter student name"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <input
          name="class"
          type="text"
          value={student.class}
          placeholder="Enter student class"
          onChange={(event) => handleChange(event)}
        />
        <br />
        
        <br />
        <input
          name="age"
          value={student.ingredients}
          placeholder="Enter student age"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <input
          name="height"
          value={student.origin}
          placeholder="Enter  student height"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <input
          name="description"
          value={student.description}
          placeholder="Enter student description"
          onChange={(event) => handleChange(event)}
        />
        <select
          name="available"
          onChange={(event) => handleChange(event)}
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};
export default AddStudent;
