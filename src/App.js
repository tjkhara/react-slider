// try-2 branch
import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft, FiChevronsLeft } from 'react-icons/fi'
import { FaChevronCircleLeft, FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(1)

  const plusClickHandler = () => {
    console.log(index)
    if (index === people.length - 1) {
      setIndex(0)
    } else {
      setIndex((prevState) => {
        return prevState + 1
      })
    }
  }

  const minusClickHandler = () => {
    console.log(index)
    if (index === 0) {
      setIndex(people.length - 1)
    } else {
      setIndex((prevState) => {
        return prevState - 1
      })
    }
  }

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

          // put all to the right
          let position = undefined

          // bring the pointed one to the center
          if (index === personIndex) {
            position = 'activeSlide'
          }

          // prev person
          if (index - 1 === personIndex) {
            position = 'lastSlide'
          }

          // next person
          // prev person
          if (index + 1 === personIndex) {
            position = 'nextSlide'
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
        <button className='prev' onClick={minusClickHandler}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={plusClickHandler}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
