
import React from "react";

class App extends React.Component {
  //클래스형 컴포넌트가 호출될 때 실행
  constructor(props) {
    super(props);
    console.log('hello')
  }

  state = {
    count : 0,
  };
  
  //setState() : 바뀐 state의 데이터를 업데이트
  add = () => {
    this.setState(current => (
      {count : current.count +1 }
    ))
  };

  minus = () => {
    this.setState(current => (
      {count : current.count -1}
    ))
  };

  //컴포넌트가 처음 화면에 그러질 때 실행 : Mount
  componentDidMount() {
    console.log('component rendered')
  }

  //화면이 업데이트(새로 그려질 때)할 때 실행 : Update
  componentDidUpdate() {
    console.log('I just updated')
  }

  //컴포넌트가 죽을 때, 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용, :Unmount
  componentWillUnmount() {
    console.log('Goodbye, cruel world')
  }

  //화면 업데이트
  render() {
    console.log('I am rendering');
    return(
      <div>
        <h1> The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
