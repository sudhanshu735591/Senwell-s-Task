import React, { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  const apiData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/1");
      const resData = await response?.json();
      console.log("resData", resData);
    } 
    catch (error) {
      console.error(error); 
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div>
        <h2>Something went wrong:</h2>
        <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          console.log('Error boundary has been reset');
        }}
      >
      </ErrorBoundary>
    </div>
  );
}

export default App;
