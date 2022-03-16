import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function reqListener () {
  console.log(this.responseText);
}

// fetch('http://128.2.205.119:8082/recommend/231204', {
//   mode: 'cors',
//   //credentials: 'true'
//   credentials: 'same-origin'
// }).then(response => response)
// .then(data => console.log(data));


var XMLHttpRequest = require('xhr2');

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://128.2.205.119:8082/recommend/231204");
oReq.send();

export default function Home() {

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
