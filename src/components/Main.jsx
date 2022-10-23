import React, { useEffect, useState } from "react";

const Main = () => {
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
  const [arrayValue, setArrayValue] = useState([]);
  const handleDelete = (index) => {
    console.log("index:", index);
    console.log("arrayValue:", arrayValue[index].id);

    const newContent = [...arrayValue];
    newContent.splice(index, 1);
    setArrayValue(newContent);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContent((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = new Date().getTime();
    const newContent = { ...content, id };
    // console.log("content:", content);
    console.log("newContent:", newContent);
    setArrayValue((prev) => {
      return [...prev, newContent];
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          placeholder="nguyen song toan"
          name="name"
          onChange={handleChange}
        />
        <br />
        <label>phone</label>
        <input
          type="number"
          placeholder="04411222"
          name="phone"
          onChange={handleChange}
        />
        <br />
        <label>email</label>
        <input
          type="text"
          placeholder="st@gmail.com"
          name="email"
          onChange={handleChange}
        />
        <br />
        <label>works</label>
        <input
          type="text"
          placeholder="clear my  room"
          name="works"
          onChange={handleChange}
        />
        <br />
        <button>submit</button>
      </form>

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
            {/* <button onClick={handleDelete(index)}>delete</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default Main;
