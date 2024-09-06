import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const FirstName = e.target.first.value.trim();
    const LastName = e.target.last.value.trim();
    // Only set the full name if both first and last names are provided
    if (FirstName && LastName) {
      setFullName(`Full Name: ${FirstName} ${LastName}`);
    } else {
      setFullName(""); // Clear the full name if any field is empty
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first">First Name: </label>
          <input type="text" id="first" name="first" required />
        </div>
        <div>
          <label htmlFor="last">Last Name: </label>
          <input type="text" id="last" name="last" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Conditionally render the paragraph only if there's a full name */}
      {fullName && <p>{fullName}</p>}
    </div>
  );
}

export default App;
