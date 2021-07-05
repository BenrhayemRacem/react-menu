import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data";
import SingleMenuItem from "./SingleMenuItem";
import {Container, Row} from "react-bootstrap";
import {useState} from "react";
import CategoryButtons from "./CategoryButtons";

function App() {

    const [items, setItems] = useState(data);
    const menuItems = items.map((singleItem)=> {
        return <SingleMenuItem item={singleItem} key={singleItem.id}/>
    });

    const filteringItems =(category) => {
        if(category==='all') {
            setItems(data);
            return;
        }
        const newItems = data.filter((item)=>item.category===category) ;
        setItems(newItems);
    }
  return (

      <Container>
          <Row><h1>Our menu ...</h1></Row>
          <Row>
              <CategoryButtons handleCategory={filteringItems} menu={data}/>
          </Row>
          <Row >
          {menuItems}
          </Row>
      </Container>
      )

}

export default App;
