// try-2 branch
import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft, FiChevronsLeft } from 'react-icons/fi'
import { FaChevronCircleLeft, FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // get last index
    const lastIndex = people.length - 1
    // if index negative, set equal to last index
    if (index < 0) {
      setIndex(lastIndex)
    }
    // if we run out of items
    if (index > lastIndex) {
      // go back to start
      setIndex(0)
    }
  }, [index, people])

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1)
  //   }, 3000)
  //   return () => {
  //     clearInterval(slider)
  //   }
  // }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          // Move all to the right
          let position = 'nextSlide'

          // Move this one in the center
          if (personIndex === index) {
            position = 'activeSlide'
          }

          // Move the one before this to the left
          // If the current one is 0
          // Move the one before to the end
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
