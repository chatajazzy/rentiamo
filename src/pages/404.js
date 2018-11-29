import React from 'react'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from '../components/Header/Header';

const NotFoundPage = () => (
  <PageTransition transitionTime={1200}>
    <div>
      <Header/>
      <h1>Nie ma takiej strony</h1>
      <Link to={'/'}>Powrót</Link>
    </div>
  </PageTransition>
)

export default NotFoundPage
