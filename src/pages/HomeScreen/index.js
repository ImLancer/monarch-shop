import Header from 'components/Header';
import Banner from 'components/Banner';
import React from 'react';
import "./HomeScreen.css";
import Category from 'components/Category';

function HomeScreen() {
  return (
    <div className="home" >

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />
      <Category />

      {/* product */}

    </div>
  )
}

export default HomeScreen;
