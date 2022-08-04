import React from "react";

function Food ({name, picture}) {
  return 
  <div>
    <h3>I love {name}</h3>
    <img src={picture}></img>
  </div>
}

const foodLike = [
  {
    name : 'kimchi',
    image : 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png'
  },
  {
    name : 'tteokbokki',
    image : 'http://img4.tmon.kr/cdn3/deals/2021/07/15/4500036162/original_4500036162_front_f8dfd_1626343427production.jpg'
  },
  {
    name : 'bibimbap',
    image : 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg'
  },
  {
    name : 'sujebi',
    image : 'https://recipe1.ezmember.co.kr/cache/recipe/2018/12/25/fca55df6ed2e2363d5e99e96b4f2233e1.jpg'
  }
];

function App() {
  return (
    <div>
      {foodLike.map(dish => (
        <Food name={dish.name} picture ={dish.image} />
          
      ))}
    </div>
  );
}

export default App;
