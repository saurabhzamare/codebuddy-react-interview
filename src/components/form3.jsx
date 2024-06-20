import { Button, Container, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormsContext } from '../context/formsContext';
import SubmitInfo from '../services/submitInfo';

const Form3 = () => {
  const navigate = useNavigate();
  const {
    step,
    setStep,
    email,
    password,
    firstName,
    lastName,
    address,
    countryCode,
    setCountryCode,
    phoneNumber,
    setPhoneNumber,
    termsAndConditionsAccepted,
    setTermsAndConditionsAccepted,
  } = useContext(FormsContext);

  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const menuClass = `dropdown-menu${isOpen ? ' show' : ''}`;

  const countryCodes = ['+91', '+1'];

  const handleBack = () => {
    setStep(step - 1);
  };

  const findFormErrors = () => {
    const newErrors = {};
    // name errors
    if (phoneNumber.length !== 10) newErrors.phoneNumber = 'Valid Phone Number is required.';
    else if (!termsAndConditionsAccepted)
      newErrors.termsAndConditionsAccepted = 'Terms and Conditions are required.';

    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:

    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      setErrors({});
      const submitInfoRes = await SubmitInfo({
        emailId: email,
        password,
        firstName,
        lastName,
        address,
        countryCode,
        phoneNumber,
      });
      if (submitInfoRes.message === 'Success') {
        navigate('/posts');
      } else {
        alert('server error');
      }
    }
  };

  const handleChangeCountryCode = code => {
    setCountryCode(code);
    setIsOpen(false);
  };

  const handleChangePhoneNumber = e => {
    setPhoneNumber(e.target.value);
    setErrors({ ...errors, phoneNumber: '' });
  };

  return (
    <>
      <form className="needs-validation" onSubmit={handleSubmit}>
        <Container>
          <div className="container">
            <div className="col-md-6 order-md-1 m-auto">
              <h4 className="mb-3">CODEBUDDY</h4>
              <div className="row">
                <div className="col-md-2 col-sm-3 col-3  mb-3">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {countryCode}
                    </button>
                    <div className={menuClass} aria-labelledby="dropdownMenuButton">
                      {countryCodes.map(code => (
                        <Button
                          key={code}
                          className="dropdown-item"
                          onClick={() => handleChangeCountryCode(code)}
                        >
                          {code}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-10 col-sm-9 col-9 mb-3">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      value={phoneNumber}
                      onChange={e => handleChangePhoneNumber(e)}
                      isInvalid={!!errors.phoneNumber}
                      placeholder="Phone Number"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-md-1 col-sm-2 col-3 mb-3">
                  <input
                    required
                    type="checkbox"
                    name="checkbox"
                    className="form-check-input"
                    id="acceptTermsAndConditions"
                    checked={termsAndConditionsAccepted}
                    onChange={() => setTermsAndConditionsAccepted(!termsAndConditionsAccepted)}
                  />
                </div>
                <div className="col-md-11 col-sm-10 col-9 mb-3">
                  <label className="form-check-label" htmlFor="acceptTermsAndConditions">
                    Accept terms and conditions
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container className="col-md-6 d-flex justify-content-between">
          <div className="col-md-2">
            <Button type="button" className="btn btn-secondary ml-5 " onClick={handleBack}>
              Back
            </Button>
          </div>

          <div className="col-md-6 text-end">
            <Button type="submit">Save</Button>
          </div>
        </Container>
      </form>
    </>
  );
};

export default Form3;