import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/CardList/CardList'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {

    const url = "https://swapi.py4e.com/api/people"

    const fetchData = async () => {
      try {
        //*  res starts with an await HTTP request to the url. Once res is complete it will go on to the next step */
        const res = await fetch(url);
        const json = await res.json();
        setData(json.results)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()

  }, [])

  console.log(data)

  return (
    <div className='flex flex-row flex-wrap justify-center items-center w-full h-full gap-10 '>
      {data.map((person) => (
        <CardList key={person.name} person={person} />
      ))}
    </div>
  )
}

export default App
