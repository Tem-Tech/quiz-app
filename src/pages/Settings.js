import { useState } from "react";
const Settings = () => {
  const [inputs, setInputs] = useState({});
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const username = event.target.username;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [username]: value }));
    this.setState({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your username:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Amount of Questions:
        <select value={[10, 20, 30]} name="quiz-length">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
      <input type="submit" name="submit" value="Start Quiz" />
    </form>
  );
};

export default Settings;
