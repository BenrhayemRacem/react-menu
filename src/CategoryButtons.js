import {Button, ButtonGroup} from "react-bootstrap";


const CategoryButtons = (props)=> {
    const menu = props.menu;

    const handleCategory= props.handleCategory ;
    const categories = ['all' , ... new Set(menu.map((item)=>item.category))  ];
    const buttonGroup = categories.map((category ,index)=> {
        return (
            <Button variant="outline-success" key={index} onClick={()=>handleCategory(category)}> {category}</Button>
        )
    });
     return(
         <ButtonGroup size="sm" className="mb-2">
             {buttonGroup}
         </ButtonGroup>
     )


}

export default CategoryButtons;