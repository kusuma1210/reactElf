 import React from 'react';

 
class IngredientsList extends React.Component {

 
    render() {

 
        return React.createElement("ul", { className: "ingredients" },
            this.props.items.map(function (ingredient, i) {
                return React.createElement("li", { key: i }, ingredient)
            })
        )
    }
}
const items = [
    "1 lb Cool", "1 cup Pine Nuts", "2 cups Butter Lettuce",
    "1 Yellow Squash", "1/2 cup Olive Oil", "3 cloves of Garlic"
]

 
const list = React.createElement(IngredientsList, { items });

 
export default list;
