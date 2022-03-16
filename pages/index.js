import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  var XMLHttpRequest = require('xhr2');
  const xhr = new XMLHttpRequest()
  //open a get request with the remote server URL
  xhr.open("GET", "http://localhost:8010/proxy/recommend/231204")
  //send the Http request
  xhr.send()

  //EVENT HANDLERS

  //triggered when the response is completed
  xhr.onload = function() {
    if (xhr.status === 200) {
      //parse JSON datax`x
      var data = xhr.responseText
      console.log(data);
    } else if (xhr.status === 404) {
      console.log("No records found")
    }
  }
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
