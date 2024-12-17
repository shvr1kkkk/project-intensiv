import Home from "./components/Navbar"
import Card from "./components/Card"
import Button from "./components/Button"
import React from "react"
import Button2 from "./components/Button2"

const App = () => {
  
    return (
      <div>
          <Home />
          <main>
              <Cards>
              
              </Cards>
          </main>
      </div>
  )
}
export default App

const Cards  = () => {
  return (
      <div>
          <h1>Пример компонента с бордером</h1>
          <Card />
          <Button></Button>
          <Buttons></Buttons>
      </div>
  );
};

const Buttons: React.FC = () => {
  return (
       <Buttons2></Buttons2>
  );
};

const Buttons2: React.FC = () => {

return(
<Button2></Button2>
);
};










