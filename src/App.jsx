import Input from "./components/User";
import Header from "./components/Header";
import Result from "./components/result";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 10,
    duration: 10,
  });

  function handleChange(identifier, newData) {
    setData((prevData) => {
      return {
        ...prevData,
        [identifier] : newData
      }
    });
  }

  const isValid = data.duration >= 1

  console.log(data);

  return (
    <>
      <Header />
      <Input update={handleChange} data={data}/>
      {isValid ? <Result data={data}/> : <p className="center">Please enter a duration greater than zero</p>}
    </>
  );
}

export default App;
