import React from 'react';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import Container from './components/Util/Container';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <main className="App font-roboto">
      <Container className='bg-primary'>
        <div className="absolute w-12 top-5 right-5">
          <img
            src="checkout-logo_transparent.png"
            alt="Checkout Logo"
          />
        </div>
        <FeedbackForm />
      </Container>
      <Container>
        <Comments />
      </Container>
    </main>
  );
}

export default App;
