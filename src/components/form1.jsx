import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FormsContext } from '../context/formsContext';

const Form1 = () => {
  const { step, setStep, email, setEmail, password, setPassword } = useContext(FormsContext);
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const findFormErrors = () => {
    const newErrors = {};
    // name errors
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required.';
    else if (
      !password.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?!.*?[^A-Za-z0-9#?!@$%^&*-]).{8,63}$|^(?=.*?[A-Z])(?=.*?[0-9])(?!.*?[^A-Za-z0-9#?!@$%^&*-]).{8,63}$|^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])(?!.*?[^A-Za-z0-9#?!@$%^&*-]).{8,63}$|^(?=.*?[a-z])(?=.*?[0-9])(?!.*?[^A-Za-z0-9#?!@$%^&*-]).{8,63}$|^(?=.*?[a-z])(?=.*?[#?!@$%^&*-])(?!.*?[^A-Za-z0-9#?!@$%^&*-]).{8,63}$|^(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.*?[^A-Za-z0-9#?!@$%^&*-]).{8,63}$/,
      )
    )
      newErrors.password =
        'Password Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters.';
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

  const handleChangeEmail = e => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: '' });
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: '' });
  };

  return (
    <>
      <Container>
        <Form className="needs-validation" noValidate onSubmit={handleSubmit}>
          <div className="container">
            <div className="col-md-6 order-md-1 m-auto">
              <h4 className="mb-3">CODEBUDDY</h4>
              <div className="form-row">
                <div className="col-md-12 mb-3">
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      value={email}
                      onChange={e => handleChangeEmail(e)}
                      isInvalid={!!errors.email}
                      placeholder="Email"
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-12 mb-3">
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="text"
                      value={password}
                      onChange={e => handleChangePassword(e)}
                      isInvalid={!!errors.password}
                      placeholder="Password"
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
          <Container className="col-md-6 d-flex justify-content-end">
            <div className="col-md-12 text-end">
              <Button type="submit" className="mx-3">
                Save
              </Button>
              <Button type="submit">Save & Next</Button>
            </div>
          </Container>
        </Form>
      </Container>
    </>
  );
};

export default Form1;