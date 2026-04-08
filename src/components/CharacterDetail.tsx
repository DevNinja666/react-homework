import React from 'react'
import { Character } from '../types'

interface CharacterDetailProps {
  character: Character | null
  onBack: () => void
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ character, onBack }) => {

  if (!character) {
    return (
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border-2 border-gray-700">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          Character Details
        </h2>

        <div className="text-center py-8">
          <div className="text-6xl mb-4">👆</div>
          <p className="text-gray-400 text-lg">
            Select a character to see details
          </p>
        </div>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Alive':
        return 'text-green-400'
      case 'Dead':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border-2 border-green-500/50 sticky top-4">

      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
        Character Details
      </h2>

      <div className="text-center">

        <img
          src={character.image}
          alt={character.name}
          className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-green-400 shadow-2xl shadow-green-500/50 mb-4"
        />

        <h3 className="text-3xl font-bold mb-4 text-green-400">
          {character.name}
        </h3>

        <div className="space-y-3 text-left bg-gray-900/50 p-4 rounded-lg">
          <div className="flex justify-between">
            <span className="text-gray-300 font-semibold">Species:</span>
            <span className="text-green-400 font-bold">{character.species}</span>
          </div>

          <div className="flex justify-between">
            <span className={`font-semibold ${getStatusColor(character.status)}`}>
              Status:
            </span>

            <span className="text-white font-bold">
              {character.status}
            </span>
          </div>
        </div>

        <button
          onClick={onBack}
          className="mt-6 bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg transition"
        >
          Back
        </button>

      </div>
    </div>
  )
}

export default CharacterDetail
