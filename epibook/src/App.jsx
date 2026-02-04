import "bootstrap/dist/css/bootstrap.min.css";
import Epinav from "./components/Navbarm";
import MyFooter from "./components/Myfooter";
import AlertDismissible from "./components/Welcome";
import Cardbook from "./components/Allthebooks";
import BookList from "./components/BookList";
//in mezzo
function App() {
  return (
    <>
      <Epinav />
      <AlertDismissible className="align-item-end" />
      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
