import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free'
import HomePage from './HomePage'

export default function Index() {
  return (
    <div className="container col-md-10">
      <Head>
        <title>Noon Favourites</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <HomePage />
    </div>
  )
}
