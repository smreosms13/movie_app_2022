
import React from "react";

function Food ({name, picture}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={picture} alt ={name}/>
    </div>
  );
}

const foodLike = [
  {
    key : 1,
    name : 'kimchi',
    image : 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png'
  },
  {
    key : 2,
    name : 'tteokbokki',
    image : 'http://img4.tmon.kr/cdn3/deals/2021/07/15/4500036162/original_4500036162_front_f8dfd_1626343427production.jpg'
  },
  {
    key : 3,
    name : 'bibimbap',
    image : 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg'
  },
  {
    key : 4,
    name : 'sujebi',
    image : 'https://recipe1.ezmember.co.kr/cache/recipe/2018/12/25/fca55df6ed2e2363d5e99e96b4f2233e1.jpg'
  }
];


function App() {

  return (
    <div>
      {foodLike.map(dish => (
          <Food key={dish.key} name ={dish.name} picture = {dish.image}/>
      ))}
    </div>
  );
}

export default App;
