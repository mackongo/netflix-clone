import React from 'react'
import './HomeScreen.css'
import Nav from './Nav';
import Banner from './Banner';
import requests from '../Requests';
import Row from './Row';

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* nav */}
      <Nav />

      {/* banner */}
      <Banner />

      <Row
        title='NETFLIX ORIGNALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} />

      <Row
        title='Trending Movies'
        fetchUrl={requests.fetchTrending}
        isLargeRow={false} />

      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
        isLargeRow={false} />

      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false} />

      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false} />

      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false} />

      <Row
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false} />

      <Row
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false} />

      {/* row */}

    </div>
  )
}

export default HomeScreen
