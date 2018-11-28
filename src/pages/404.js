import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/Header/Header';

const NotFoundPage = () => (
  <div>
    <Header/>
    <h1>Nie ma takiej strony</h1>
    <Link to={'/'}>Wróć na start</Link>
  </div>
)

export default NotFoundPage
