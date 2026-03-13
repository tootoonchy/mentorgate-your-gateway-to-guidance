import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          MentorGate
        </h1>
        <p className="text-gray-400 text-lg">
          Connecting Mentors and Mentees seamlessly.
        </p>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors cursor-pointer group">
          <h2 className="text-xl font-bold mb-2 group-hover:text-purple-400">For Mentors</h2>
          <p className="text-gray-400">Share your expertise and guide the next generation of talent.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-colors cursor-pointer group">
          <h2 className="text-xl font-bold mb-2 group-hover:text-pink-400">For Mentees</h2>
          <p className="text-gray-400">Find the right mentor and accelerate your career growth.</p>
        </div>
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        &copy; 2026 MentorGate. All rights reserved.
      </footer>
    </div>
  )
}

export default App
