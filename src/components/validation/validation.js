let validateStringOnly = (anything) => {
    let stringCheck = /[0-9]/;
    return stringCheck.test(anything);
  };

export default validateStringOnly;