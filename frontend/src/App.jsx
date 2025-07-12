import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [member, setMember] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/member")
      .then((res) => {
        console.log(res.data);
        setMember(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Family Members {member.length}</h1>
      {member.map((memb, index) => {
        return (
          <div key={index}>
            <h3>{memb.title}</h3>
            <p>{memb.name}</p>
            <p>{memb.age}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
