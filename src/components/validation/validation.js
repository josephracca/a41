

let validateStringOnly = (anything) => {
    let stringCheck = /[0-9]/;
    // console.log(stringCheck.test("Hello there."));
    return stringCheck.test(anything);
  };
  
//   validateStringOnly();


export default validateStringOnly;
  