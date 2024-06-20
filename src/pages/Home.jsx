import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Form1 from '../components/form1';
import Form2 from '../components/form2';
import Form3 from '../components/form3';
import { FormsContext } from '../context/formsContext';


const Home = () => {
  const { step } = useContext(FormsContext);

  const getStepContent = activeStep => {
    switch (activeStep) {
      case 0:
        return <Form1 />;
      case 1:
        return <Form2 />;
      case 2:
        return <Form3 />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <main>
      <Container className="d-flex justify-content-center flex-column h-100">
        <div className="p-1 border border-primary w-100 m-auto py-5">{getStepContent(step)}</div>
      </Container>
    </main>
  );
};

export default Home;