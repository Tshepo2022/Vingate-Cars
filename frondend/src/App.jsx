import React from 'react'
import './App.css'
import Cards from './assets/components/Cards'

function App() {

  const product = [
    { name: '1929 Packard Model 640', price: 'R195 000', image: 'https://0.cdn.autotraderspecialty.com/1929-Packard-Model_640-Antiques--Car-101846874-347c2709410f3fed158afad3f6c068f0.jpg?r=pad&w=735&h=551&c=%23f5f5f5' },
    { name: '1959 Jaguar XK 150', price: 'R175 000', image: 'https://1.cdn.autotraderspecialty.com/1959-Jaguar-XK_150-Import%20Classics--Car-101852421-19f945b8fce5d00b4036ae809ab1df65.jpg?r=pad&w=735&h=551&c=%23f5f5f5' },
    { name: '1948 Plymouth Special Deluxe', price: 'R89 500', image: 'https://0.cdn.autotraderspecialty.com/1948-Plymouth-Special_Deluxe-American%20Classics--Car-101875597-15781ad3965fca01cd436183cceb29dd.jpg?r=pad&w=735&h=551&c=%23f5f5f5' },
    { name: '1965 Ford Thunderbird', price: 'R42 500', image: 'https://1.cdn.autotraderspecialty.com/1959-Ford-Thunderbird-american-classics--Car-101875598-b8dbeb28862bedd0b832f73a0939bef3.jpg?r=fit&c=%23f5f5f5&w=289&h=217' },
    { name: 'Ford Thunderbird', price: 'R62,900.00', image: 'https://1.cdn.autotraderspecialty.com/1955-Ford-Thunderbird-American%20Classics--Car-101824538-1780ead2e0f8b3cc12856a67a8433acf.jpg?rot=0&r=pad&w=735&h=551&c=%23f5f5f5' },
    { name: '1938 BMW 327', price: 'R139 500', image: 'https://0.cdn.autotraderspecialty.com/1938-BMW-327-Antiques--Car-101846881-f7e021ce24d8bb13dd413f1d7f3e009e.jpg?r=pad&w=735&h=551&c=%23f5f5f5'},
    { name: 'CE Approved Electric', price: 'R186 422', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3UaHDXTAYKRhCXCw3hFW405mYKKwke2zVtqrDuEFLtOAdvwoYbBk6v1Gli28b3sNEyb-ShlbOC632WVPNUZJYi-0d9i2koVSeUCHop_A&usqp=CAE'},
    { name: 'Electric Vintage Car UTV', price: 'R144 005', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTkIVWMDlqGmLn7pgJfzx0yAoK2VMNKOdnjjPbV7wKF0uB2-rreP62i5ZeYr2LBAjFzbR5GL_3mPB6NCTp4Nop-i4F-79AtzpgoVKG4zhs&usqp=CAE'},
]

  return (



    <div>
      <index />
      <Cards item={product}/>
   
    </div>
  )
}


export default App
