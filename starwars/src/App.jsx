import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/CardList/CardList'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = "https://swapi.py4e.com/api/people"

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data.results)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()

  }, [])

  console.log(data)

  return (
    <>
      {data.map((person) => (
        <CardList key={person.name} person={person} />
      ))}
    </>
  )
}

export default App
