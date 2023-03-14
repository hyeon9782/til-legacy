import Gallery from "./components/gallery/Gallery";
import { Modal } from "./components/modal/Modal";
import FilterableProductTable from "./components/product-table/FilterableProductTable";

function App() {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  return (
    <div className="App">
      {/* <FilterableProductTable products={PRODUCTS} /> */}
      <Modal.Header />
    </div>
  );
}

export default App;

/*
- 검색 입력어 -State- 
- 제고만 보여줄지 여부(필터) -State-
  => FilterableProductTable (현재까지는...)
  => 어쩌면 나중에 다른 기능때문에 App으로 올려야 할 수도 있다.
- (미래에 혹시) 상품목록 자체가 바뀔 가능성...? > 원본목록
- 보여질 목록 : 1 2 3번에 종속적인 데이터

1. UI를 컴포넌트 계층 구조로 나누기
2. React로 정적인 UI 만들기
3. 최소한의 완전한 UI state 찾기
4. state가 어디에 있어야 할지 파악하기
5. 역방향 데이터 흐름 추가하기
*/