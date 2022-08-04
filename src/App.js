
import React from "react";
import PropType from "prop-types";

function Food ({name, picture, rating}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt ={name}/>
    </div>
  );
}

const foodLike = [
  {
    key : 1,
    name : 'kimchi',
    image : 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
    rating : 3.2
  },
  {
    key : 2,
    name : 'tteokbokki',
    image : 'http://img4.tmon.kr/cdn3/deals/2021/07/15/4500036162/original_4500036162_front_f8dfd_1626343427production.jpg',
    rating : 4.8,
  },
  {
    key : 3,
    name : 'bibimbap',
    image : 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
    rating : 4.3
  },
  {
    key : 4,
    name : 'sujebi',
    image : 'https://recipe1.ezmember.co.kr/cache/recipe/2018/12/25/fca55df6ed2e2363d5e99e96b4f2233e1.jpg',
    rating : 4.7
  },
  {
    key : 5,
    name : 'samsekkkochijeon',
    image : 'https://recipe1.ezmember.co.kr/cache/recipe/2018/09/21/79fcc4aef3357b01275fb15288edf6f61.jpg',
    rating : 5.0
  }
];


function App() {

  return (
    <div>
      {foodLike.map(dish => (
          <Food key={dish.key} name ={dish.name} picture = {dish.image} rating = {dish.rating}/>
      ))}
    </div>
  );
}

//prop-type : props의 이름과 자료형을 검사
Food.propTypes = {
  name : PropType.string.isRequired,
  picture : PropType.string.isRequired,
  rating: PropType.number.isRequired
}
export default App;
