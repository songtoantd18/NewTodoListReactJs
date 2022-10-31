import React, { useState } from "react";

const TodoFormFullFunction = () => {
  //   const [id, setId] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [valueArray, setValueArray] = useState([]);
  const [details, setDetails] = useState({
    // id: Math.floor(Math.random() * 1000000),
    id: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    birthday: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = new Date().getTime();
    const newDetails = { ...details, id };
    // details.id = id;
    setValueArray((prev) => {
      const newValue = [...prev, newDetails];

      // console.log("newValue:", newValue);
      return newValue;
    });
  };
  const deleteHandler = (index) => {
    console.log("index:", index);

    // valueArray.splice(index, 1); k duoc xoa
    // setValueArray([...valueArray]);
  };
  const handleSearch = () => {
    console.log("1:", 1);
    console.log("searchValue:", searchValue);
    const arrayList = valueArray.map((item) => {
      return item.name;
    });
    // console.log("arrayList:", arrayList);
    const result = arrayList.filter((item) => {
      return item.includes(searchValue);
    });
    console.log("result:", result);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    handleSearch();
  };
  return (
    <div>
      <h3 style={{ textDecoration: "underline" }}>search</h3>
      <input
        type="text"
        name="name"
        placeholder=" type your name"
        onChange={searchHandler}
      />
      <button onClick={handleSearch}>search</button>
      <hr />
      <button>1</button>
      <button>2</button>

      <form onSubmit={handleSubmit}>
        <h3>name</h3>
        <input
          type="text"
          name="name"
          placeholder=" type your name"
          onChange={handleChange}
        />
        <h3>phone</h3>
        <input
          type="number"
          name="phone"
          placeholder="type your phone"
          onChange={handleChange}
        />
        <h3>email</h3>
        <input
          type="email"
          name="email"
          placeholder="email@gmail.com"
          onChange={handleChange}
        />
        <h3>password</h3>
        <input
          type="password"
          name="password"
          placeholder="type your password"
          onChange={handleChange}
        />
        <h3>address</h3>
        <input
          type="text"
          name="address"
          placeholder="type your address"
          onChange={handleChange}
        />
        <h3>birthday</h3>
        <input
          type="date"
          name="birthday"
          placeholder="type your birthday"
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
      <ul>
        {valueArray.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                backgroundColor: "red",
                color: "#00ff00",
                border: "solid 1px black",
                borderRadius: "10px",
              }}
            >
              {item.name}
              <br />
              {item.phone}
              <br />
              {item.email}
              <br />
              {item.password}
              <br />
              {item.address}
              <br />
              {item.birthday}
              <br />
              {<button onClick={() => deleteHandler(index)}>delete</button>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoFormFullFunction;
