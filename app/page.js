import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import React from 'react'
import Image from 'next/image'
import Data from '@/data/Data'

const page = async () => {


  const HeroData = [
    { id: 1, title: "Man", img: "/hero-cate/1s.jpg" },
    { id: 2, title: "Woman", img: "/hero-cate/2s.jpg" },
    { id: 3, title: "Boy's", img: "/hero-cate/3s.jpg" },
    { id: 4, title: "Girl's", img: "/hero-cate/4s.jpg" },
    { id: 5, title: "Phone", img: "/hero-cate/6s.jpg" },
    { id: 6, title: "Electronic", img: "/hero-cate/10s.jpg" },
    { id: 7, title: "Beauty", img: "/hero-cate/7s.jpg" },
    { id: 8, title: "Stationery", img: "/hero-cate/5s.jpg" },
    { id: 9, title: "Toy's", img: "/hero-cate/8s.jpg" },
    { id: 10, title: "Furniture", img: "/hero-cate/9s.jpg" },
  ];

  return (
    <main>
      <Navbar />
      <div className='home-main'>
        <section className='hero-section'>
          <div className='hero-boxs'>
            {HeroData.map((item, index) => {
              return (
                <div key={index} className='hero-box'>
                  <Image
                    src={item.img}
                    alt="Laptop"
                    className='hero-box-img'
                    width={100}
                    height={100}
                  />
                  <p className='hero-box-title'>{item.title}</p>
                </div>
              )
            })}
          </div>
        </section>


      </div >

      <Welcome />
    </main >
  )
}

export default page