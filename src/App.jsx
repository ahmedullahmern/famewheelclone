import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box display={"flex"} alignItems={"center"}>
      <Button variant="contained">Helo Ahmed Gand Phate Wanju baba</Button>
    </Box>
    // <h1>
    //   hi
    // </h1>
  )
}

export default App
