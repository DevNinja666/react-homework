//task1//
export interface Character {
  id: number
  name: string
  image: string
  status: string
  species: string
}
import { useEffect, useState } from 'react'
import { Character } from './types'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
function App() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [selected, setSelected] = useState<Character | null>(null)
  const [clickCount, setClickCount] = useState(0) // ← ЗАДАНИЕ 1
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fetchCharacters = () => {
    setLoading(true)
    setError(null)
//task2//
    import { Character } from '../types'
interface Props {
  character: Character
  onBack: () => void
}
export default function CharacterDetail({ character, onBack }: Props) {
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-gray-500 text-white"
      >
        ← Назад
      </button>
      <h2 className="text-xl font-bold">{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  )
}
    //task3//
    const [error, setError] = useState<string | null>(null)
    {error && (
  <div>
    <p className="text-red-500">{error}</p>
    <button
      onClick={fetchCharacters}
      className="mt-2 px-4 py-2 bg-blue-500 text-white"
    >
      Повторить
    </button>
  </div>
)}
catch {
  setError('Не удалось загрузить персонажей')
}
//task4//
    setTimeout(async () => {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        if (!res.ok) throw new Error('Ошибка загрузки')
        const data = await res.json()
        setCharacters(data.results)
      } catch (e) {
        setError('Не удалось загрузить персонажей')
      } finally {
        setLoading(false)
      }
    }, 1500)
  }
  useEffect(() => {
    fetchCharacters()
  }, [])
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Rick & Morty Characters
      </h1>
      <p className="mb-4">
        Кликов: <b>{clickCount}</b>
      </p>
      {loading && <p>Загрузка...</p>}
      {error && (
        <div>
          <p className="text-red-500">{error}</p>
          <button
            onClick={fetchCharacters}
            className="mt-2 px-4 py-2 bg-blue-500 text-white"
          >
            Повторить
          </button>
        </div>
      )}

      {!loading && !error && !selected && (
        <CharacterList
          characters={characters}
          onSelect={(char) => {
            setSelected(char)
            setClickCount(prev => prev + 1)
          }}
        />
      )}
      {selected && (
        <CharacterDetail
          character={selected}
          onBack={() => setSelected(null)} 
        />
      )}
    </div>
  )
}
export default App
