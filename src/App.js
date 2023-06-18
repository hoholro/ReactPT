import MYBOX from "./components/MYBOX";
import YourBox from "./components/YourBox";
// JS파일에 외부 파일을 불러오는 것이기 때문에 "import" 키워드를 사용한다.
// 같은 JS파일은 확장자를 사용하지 않는다.
function App() {
  return (
    <div>
      세상을 바꾸는건 꿈을꾸는 사람들의 몫이다.
      <MYBOX />
      <MYBOX />
      <MYBOX />
      <MYBOX />
      <YourBox />
    </div>
  );
}

export default App;
//다른 JS파일에서 불러올 수 있도록 내보내주기
