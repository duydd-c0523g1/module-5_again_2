import logo from './logo.svg';
import './App.css';
import BookList from './components/Books';
import {Route, Routes} from "react-router-dom";
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import NavBar from './components/Nav';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="add/" element={<AddBook />} />
      <Route path="update/:id" element={<EditBook />} />
    </Routes>
  );
}

export default App;
