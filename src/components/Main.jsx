import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import Pagination from "./Pagination";

const Main1 = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalRows: 1,
  });
  const [filter, setFilter] = useState({
    limit: 10,
  });
  const result = {
    backgroundColor: "#00ff00",
    color: "red",
    border: "1px solid black",
    borderRadius: "20px",
  };
  const [content, setContent] = useState({
    name: "",
    phone: "",
    email: "",
    works: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
    works: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [arrayValue, setArrayValue] = useState([]);
  const handleDelete = (index) => {
    console.log("index:", index);
    console.log("arrayValue:", arrayValue[index].id);
    const newContent = [...arrayValue];
    newContent.splice(index, 1);
    setArrayValue(newContent);
  };
  const handleEdit = (index) => {
    console.log("index:", index);
  };
  function handlePageChange(newPage) {
    console.log("newPage:", newPage);
  }
  const handleChange = (e) => {
    // console.log("content:", content);
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setContent((prev) => {
      return { ...prev, [name]: value };
    });
    setFormErrors(validate(content));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("arrayValue:", arrayValue);
    // const isValid = !Object.keys(formErrors).length;
    const isValid = Object.keys(formErrors).length;
    // console.log("Object.keys(formErrors):", Object.keys(formErrors));
    // console.log("isValid:", !!isValid);

    if (isValid === 0) {
      setArrayValue((prev) => {
        return [...prev, newContent];
      });
    }

    let id = new Date().getTime();
    const newContent = { ...content, id };
    // console.log("content:", content);
    // console.log("newContent:", newContent);
    // console.log("formErrors:", formErrors);
  };
  useEffect(() => {
    // console.log(formErrors);
    // console.log("formErrors:", formErrors);
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(content);
    }
  }, [content]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "username is required";
    }
    if (!values.phone) {
      errors.phone = "phone is required";
    }

    if (!values.email) {
      errors.email = "email is required";
    }
    if (!values.works) {
      errors.works = "works is required";
    }
    return errors;
  };

  return (
    <div className="container">
      <h1>to do list</h1>
      <pre>{JSON.stringify(content, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        {/* c??ch l??m theo props */}
        <FormInput
          type="text"
          nameLabel="name"
          name="name"
          placeholder="name"
          onChange={handleChange}
          errors={formErrors.name}
        />
        <FormInput
          type="number"
          nameLabel="phone"
          name="phone"
          placeholder="phone"
          onChange={handleChange}
          errors={formErrors.phone}
        />
        <FormInput
          type="text"
          nameLabel="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          errors={formErrors.email}
        />
        <FormInput
          type="text"
          nameLabel="works"
          name="works"
          placeholder="works"
          onChange={handleChange}
          errors={formErrors.works}
        />
        <button>submit</button>
      </form>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />

      {arrayValue.map((item, index) => {
        return (
          <div key={index} style={result}>
            {item.name}
            <br />
            {item.phone}
            <br />
            {item.email}
            <br />
            {item.works}
            <br />
            <button onClick={() => handleDelete(index)}> delete</button>
            <button onClick={() => handleEdit(index)}> edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Main1;
