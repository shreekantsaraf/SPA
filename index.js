import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// I guess this project is the first simple example of single page app (SPA)
// press number 1 or 2 to toggle the list displays....

class List extends React.Component {
  render() {
  	console.log("List's render function"); // this should not happen if the exact same props are provided a second time
    const list = this.props.items.map(item => (<li key={item}>{item}</li>));

    return (
      <ul>
          {list}
      </ul>
    );
  }
}

const list1Items = ['Eggs', 'Bread', 'Artisinal cheese'];
const list2Items = ['Trains', 'Planes', 'Automobiles'];

const render = (items) => {
	console.log("outer render function");
  ReactDOM.render(
    <List items={items} />,
    document.getElementById('root')
  );
}

document.addEventListener('keydown', event => {
  // this checks if the 1 key is pressed
  console.log('keydown keycode= ' + event.keyCode);
  if (event.keyCode === 49) { 
		render(list1Items);  
  }
  // this checks if the 2 key is pressed
  else if (event.keyCode === 50) { 
	  render(list2Items);
  }
});

render(list1Items);