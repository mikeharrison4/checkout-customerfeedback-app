import React from 'react';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import Container from './components/Util/Container';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="App font-roboto">
      <Container className='bg-primary'>
        <FeedbackForm />
      </Container>
      <Container>
        <Comments />
      </Container>
    </div>
  );
}

export default App;
