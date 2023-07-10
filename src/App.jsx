import { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppStyle>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />

          </Routes>
        </BrowserRouter>
      </AppStyle>

    </>
  )
}

const AppStyle = styled.div`
font-family: 'Poppins', sans-serif;
`;

export default App
