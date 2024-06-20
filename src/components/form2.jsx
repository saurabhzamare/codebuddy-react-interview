import { Button, Container, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { FormsContext } from '../context/formsContext';

const Form2 = () => {
  const { step, setStep, firstName, setFirstName, lastName, setLastName, address, setAddress } =
    useContext(FormsContext);

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const findFormErrors = () => {
    const newErrors = {};
    // name errors
    if (!firstName.match(/^[A-Za-z]+$/) || firstName.length < 2 || firstName.length > 50)
      newErrors.firstName = 'Valid First Name is required.';
    else if (lastName.length > 0 && !lastName.match(/^[A-Za-z]+$/))
      newErrors.lastName = 'Valid Last Name is required.';
    else if (address.length < 10) newErrors.address = 'Address length should be minimum 10 chars';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:

    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      handleNext();
      setErrors({});
    }
  };

  const handleChangeFirstName = e => {
    setFirstName(e.target.value);
    setErrors({ ...errors, firstName: '' });
  };

  const handleChangeLastName = e => {
    setLastName(e.target.value);
    setErrors({ ...errors, lastName: '' });
  };

  const handleChangeAddress = e => {
    setAddress(e.target.value);
    setErrors({ ...errors, address: '' });
  };

  return (
    <Container>
      <div className="container">
        <div className="col-md-6 order-md-1 m-auto">
          <h4 className="mb-3">CODEBUDDY</h4>
          <Form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={e => handleChangeFirstName(e)}
                    isInvalid={!!errors.firstName}
                    placeholder="First Name"
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-md-6 mb-3">
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={e => handleChangeLastName(e)}
                    isInvalid={!!errors.lastName}
                    placeholder="Last Name"
                  />
                  <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-md-12 mb-3">
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={e => handleChangeAddress(e)}
                    isInvalid={!!errors.address}
                    placeholder="Address"
                  />
                  <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <Container className="col-md-6 d-flex justify-content-between">
        <div className="col-md-2">
          <Button type="button" className="btn btn-secondary ml-5" onClick={handleBack}>
            Back
          </Button>
        </div>

        <div className="col-md-6 text-end">
          <Button onClick={handleSubmit} className="mx-3">
            Save
          </Button>
          <Button onClick={handleSubmit}>Save & Next</Button>
        </div>
      </Container>
    </Container>
  );
};

export default Form2;