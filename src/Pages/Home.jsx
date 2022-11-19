import React from 'react'
import Hero from '../Components/Elements/Hero';
import OnlyCard from '../Components/Elements/OnlyCard';
import Table from '../Components/Elements/Table';
import EarnReward from '../Components/Elements/EarnReward';
import Trade from '../Components/Elements/Trade';
import Liquidity from '../Components/Elements/Liquidity';
import CryptoCurrency from '../Components/Elements/CryptoCurrency';

const Home = () => {
  return (
    <section className='home-sec'>
      <Hero/>
      <Table/>
      <OnlyCard/>
      <EarnReward/>
      <Trade/>
      <Liquidity/>
      <CryptoCurrency/>
    </section>
  )
}

export default Home;
