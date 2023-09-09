import React, { useState } from "react";
import "./style.css";
import swal from "sweetalert";

function MyForm() {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: "",
    salaryRange: "",
  });

  // const [isDisabled, setDisabled]=useState(true);

  //  console.log(inputs);

  const handleSubmit = (event) => {
    event.preventDfaule();
  
  };

  const handleNumber=()=>
  {

    if (
      (inputs.phoneNumber.length < 8 ||
      inputs.phoneNumber.length > 10) 
    ) {
      swal("Please enter your phone number correctly");
     
    }
    else if( isNaN(inputs.phoneNumber))
    {
      swal("Phone Number Format Is Incorrect");
      
    }
    
    
  };


  const handleAge=()=>
  {
    if (inputs.age > 65 || inputs.age < 18) {
      swal("Age is not Allowed");
      
    } 
    else if(isNaN(inputs.age))
    {
      swal("Please enter your age correctly")
      
    }
    

  };
  const handleName=()=>
  {
    if(inputs.name.length===0)
    {
      swal("You should fill yoyr name")
      
    }
    
  }
  const SubmitSucc=()=>
  {
    swal("Your Form Has Been Submitted Successfully")
  }

  return (
    <div>
      <div className="container">
        <form className="myForm" onSubmit={handleSubmit}>
          <h2>Requesting a Loan</h2>
          <hr></hr>
          <span className="inputFiled">
            <label>Name:</label>
            <input
            onBlur={handleName}
            required
            type="text"
              value={inputs.name}
              onChange={(event) => {
                setInputs({ ...inputs, name: event.target.value });
              }}
            />
          </span>
          <span className="inputFiled">
            <label>Phone Number:</label>
            <input
            required
            onBlur={handleNumber}
              value={inputs.phoneNumber}
              onChange={(event) => {
                setInputs({ ...inputs, phoneNumber: event.target.value });
                
              }}
            />
          </span>
          <span className="inputFiled">
            <label>Age:</label>
            <input
            required
            onBlur={handleAge}
              value={inputs.age}
              onChange={(event) => {
                setInputs({ ...inputs, age: event.target.value });
                
              }}
            />
          </span>
          <span className="inputFiled">
            <label>Are you an employee?</label>
            <input
              type="checkbox"
              checked={inputs.isEmployee}
              onChange={(event) => {
                setInputs({ ...inputs, isEmployee: event.target.checked });
              }}
            />
          </span>
          <span className="inputFiled">
            <label>Salary:</label>
            <select
              value={inputs.salaryRange}
              onChange={(event) => {
                setInputs({ ...inputs, salaryRange: event.target.value });
              }}
            >
              <option>Less than 500$</option>
              <option>Between 500$ and 2000$</option>
              <option>Above 2000$</option>
            </select>
          </span>

          <span className="inputFiled">
            <button  onSubmit={SubmitSucc} >Submit</button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default MyForm;
