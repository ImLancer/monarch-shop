import Header from 'components/Header';
import Banner from 'components/Banner';
import React from 'react';
import "./HomeScreen.css";
import Category from 'components/Category';
import Row from 'components/Row';

function HomeScreen() {
  return (
    <div className="home" >

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/*Category */}
      <Category />

      {/* product */}
      <Row />

      {/*Footer */}

    </div>
  )
}

export default HomeScreen;
