import Head from 'next/head'
import { Container } from '../styles/pages/Landing'
import typing from '../assets/typing.jpg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Next Typescript Template</title>
      </Head>

      <Container>
        <h1>Start editing index.tsx...</h1>
        <img src={typing} alt="typing"></img>
      </Container>
    </div>
  )
}

export default Home