import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const FirstName = e.target.first.value;
    const LastName = e.target.last.value;
    setFullName(`${FirstName} ${LastName}`);
  };
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first">First Name : </label>
          <input type="text" id="first" name="first" required />
        </div>
        <div>
          <label htmlFor="last">Last Name : </label>
          <input type="text" id="last" name="last" required />
        </div>
        <button>Submit</button>
      </form>
      {fullName && <p>Full Name : {fullName}</p>}
    </div>
  );
}

export default App;
