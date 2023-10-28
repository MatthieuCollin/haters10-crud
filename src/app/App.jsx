import { Routes, Route } from "react-router"
import Homepage from "../pages/homepage"
import Bags from "../pages/bags"
import Hats from "../pages/hats"
import Companies from "../pages/companies"
import Types from "../pages/types"
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTemplate from "../components/forms"

function App() {

  return (
    <>
      <Routes>
        <Route  path='/' element={<Homepage></Homepage>}>  </Route>
        <Route path="/bags" element={<Bags></Bags>}></Route>
        <Route path="/bag/add" element={  <FormTemplate data={{name: "daada"}} title={"Ajout SAC"} labels={["name"]}></FormTemplate>}></Route>
        <Route path="/companies" element={<Companies></Companies>}></Route>
        <Route path="/hats" element={<Hats></Hats>}></Route>
        <Route path="/types" element={<Types></Types>}></Route>
      </Routes>
    </>
  )
}

export default App
