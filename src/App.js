import React from 'react';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import Container from './components/Util/Container';
import LatestComments from './components/LatestComments/LatestComments';

function App() {
  return (
    <div className="App font-roboto">
      <Container className='bg-primary'>
        <FeedbackForm />
      </Container>
      <Container>
        <LatestComments />
      </Container>
    </div>
  );
}

export default App;
