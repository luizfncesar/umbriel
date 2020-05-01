import React from 'react';

import GlobalStyle from './styles/global';
import Alert from './components/Alert';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Alert>
        <h1>Sucesso</h1>
      </Alert>
    </>
  );
};

export default App;
