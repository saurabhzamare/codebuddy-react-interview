import { createContext, useState } from 'react';

export const FormsContext = createContext({
  step: 0,
  setStep: () => {},
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
  firstName: '',
  setFirstName: () => {},
  lastName: '',
  setLastName: () => {},
  address: '',
  setAddress: () => {},
  countryCode: '+91',
  setCountryCode: () => {},
  phoneNumber: '',
  setPhoneNumber: () => {},
  termsAndConditionsAccepted: '',
  setTermsAndConditionsAccepted: () => {},
});

export const FormsContextProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] = useState(false);

  return (
    <FormsContext.Provider
      value={{
        step,
        setStep,
        email,
        setEmail,
        password,
        setPassword,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        address,
        setAddress,
        countryCode,
        setCountryCode,
        phoneNumber,
        setPhoneNumber,
        termsAndConditionsAccepted,
        setTermsAndConditionsAccepted,
      }}
    >
      {children}
    </FormsContext.Provider>
  );
};