import React, { useState } from "react";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Components/Character";
import AssignmentSharpIcon from "@mui/icons-material/AssignmentSharp";
import Alert from "./Components/Alert";
const App = () => {
  const [alert, setAlert] = useState("");
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState(false);

    // Setting alert components
    const showAlert = (msg, type) => {
     
           setAlert({
      msg : msg,
      type: type
     })
    
    setTimeout(() => {
     setAlert(null)
   }, 4000);
    } 

   
  // Generating Password
  const generatePassword = () => {
    if (
      !includeLowerCase &&
      !includeUpperCase &&
      !includeSpecialCharacters &&
      !includeNumber
    ) {
      showAlert("please select atleast one checkbox", "danger");
    } else {
      let characterList = "";
      if (includeUpperCase) {
        characterList += upperCaseLetters;
      }
      if (includeNumber) {
        characterList += numbers;
      }
      if (includeLowerCase) {
        characterList += lowerCaseLetters;
      }
      if (includeSpecialCharacters) {
        characterList += specialCharacters;
      }
      console.log(characterList)
      setPassword(createPassword(characterList));
      showAlert("Password generated successfully", "success");
    }
  };

  const createPassword = (characterList) => {
    let password = "";
    let characterLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      let characterIndex = Math.round(Math.random() * characterLength);
  
      password += characterList.charAt(characterIndex);
    
    }
    return password;
  };
  const copyToClipboard = (password) => [
   
   navigator.clipboard.writeText(password)
  ]

  const copyPasswordHandler = () => {
   if (password === ""){
    showAlert("To copy the text you need to select atleast one checkbox", "danger")
   }
  else{
   copyToClipboard(password)
   showAlert("Password copied to clipboard successfully", "success")
  }
  }

  return (
    <>
      <Alert alert={alert} />
      <div
        style={{
          fontFamily: "cursive",
          border: "1px solid black",
          boxShadow: "0.3rem 0.2rem 0.4rem black",
        }}
        className="container my-4 text-center"
      >
        <h1 className="text-success">Password Generator</h1>

        <div>
          <div className="actualPassword d-flex">
            <input
              className="container-fluid text-center"
              style={{
                height: "50px",
                backgroundColor: "transparent",
                border: "none",
              }}
              type="text"
              value={password}
            />
            <button onClick={copyPasswordHandler} type="button position-absolute" 
             style={{ right: "20px", top: "13px",
             border: "none", backgroundColor: "transparent" }}>
                <AssignmentSharpIcon
            /> 
            </button>
        
          </div>
     
        </div>
        <div className="my-4">
          <div className="form-group">
            <label htmlFor="passwordLength" className="mx-3">
              Password Length :{" "}
            </label>
            <input
              style={{ width: "45px" }}
              type="number"
              
              defaultValue={passwordLength}
              maxLength={2}
              onChange={(e) => setPasswordLength(e.target.value)}
              id="passwordLength"
              name="passwordLength"
            />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase" className="mx-3">
              Add UpperCase
            </label>
            <input
              type="checkbox"
              checked={includeUpperCase}
              name="uppercase"
              id="uppercase"
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase" className="mx-3">
              Add LowerCase
            </label>
            <input
              type="checkbox"
              checked={includeLowerCase}
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
              name="lowercase"
              id="lowercase"
            />
          </div>
          <div className="form-group">
            <label htmlFor="numbers" className="mx-3">
              Add Number
            </label>
            <input
              type="checkbox"
              checked={includeNumber}
              onChange={(e) => setIncludeNumber(e.target.checked)}
              name="numbers"
              id="numbers"
            />
          </div>
          <div className="form-group">
            <label htmlFor="symbols" className="mx-3">
              Add Special Characters
            </label>
            <input
              type="checkbox"
              checked={includeSpecialCharacters}
              onChange={(e) => setIncludeSpecialCharacters(e.target.checked)}
              name="symbols"
              id="symbols"
            />
          </div>
          <hr />
          <button
            type="button"
            onClick={generatePassword}
            className="btn btn-success"
            style={{ boxShadow: "0.3rem 0.2rem 0.4rem black" }}
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
