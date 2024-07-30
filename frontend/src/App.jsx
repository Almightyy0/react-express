import AddUser from "./component/AddUser";
import UpdateUser from "./component/UpdateUser";
import UserList from "./component/UserList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
