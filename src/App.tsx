import { useState, useEffect } from 'react';

import { Body } from './components/Body';
import { Header } from './components/Header';

import { Container, GlobalStyle } from './styles/global';

import { Informations } from './@types/information';
import { api } from './lib/axios';

function App() {

  const [information, setInformation] = useState<Informations>();
  const [loading, setLoading] = useState(false);
  
  const getLastInformations = async () => {

    const response = await api.get('positions/last/test/test');

    setInformation(response.data);
    setLoading(true);

  }

  useEffect(() => {

    getLastInformations();

    const interval = setInterval(() => {

      getLastInformations();
  
      return () => clearInterval(interval);
    }, 10000);

  }, []);
  
  return (
    <>
      <GlobalStyle />
      <Container>
          <>
            <Header />
            <Body data={information!} />
          </>    
      </Container>
    </>
    
  )
}

export default App
