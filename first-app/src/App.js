import React, {createRef, useState} from 'react';
import Toolbar from './Toolbar';

// class Item extends React.Component{
//   render(){
//     return (
//       <li>
//         {this.props.name},
//         ${this.props.price}
//       </li>
//     );
//   }
// }

// const Item = (props) => {
//   return (
//           <li>
//             {props.name},
//             ${props.price}
//           </li>
//         );
// }

class AddForm extends React.Component{
  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    //add method from app parent
    this.props.add(name, price);
  }
  
  render(){
    return (
      <div>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type='text' ref={this.nameRef} />
          </div>
          <div class="mb-3">
            <label class="form-label">Price</label>
            <input type='text' ref={this.priceRef} />
          </div>
          
          <button onClick={this.add}>Add</button>
        
      </div>
    )
  }
}

// class App extends React.Component { 
//   state = {
//     items: [
//       { id: 1, name: 'Apple', price: 0.99},
//       { id: 2, name: 'Orange', price: 0.89},
//     ]
//   };

//   // nameRef = React.createRef();
//   // priceRef = React.createRef();

//   add = (name, price) => {
//     let id = this.state.items.length + 1;
    

//     this.setState({
//       items: [
//         ...this.state.items,
//         { id, name, price}
//       ]
//     });
//   };

//     render() {
//       return (
//         <div>
//           <Toolbar>
//             <h1>Hello React</h1> 
//             <h1>Component Composition</h1> 
//           </Toolbar>
          
//           <ul>
//             {this.state.items.map(i => {
//               return (
//                 <Item key={i.id} name={i.name} price={i.price}/>
//               )
//             })}
//           </ul>
//           <AddForm add = {this.add} />
//       </div>
//       );     
//     }
//   }


const Item = ({name, price}) => (
  <li>{name}, ${price}</li>
)

const App = props => {
  //*** */
  let [ items, setItems ] = useState([
    { id: 1, name: 'Apple', price: 0.99},
    { id: 2, name: 'Orange', price: 0.89},
  ]);

  let nameRef = createRef();
  let priceRef = createRef();

  let add = () =>{
    let id = items.length + 1;
    let name = nameRef.current.value;
    let price = priceRef.current.value;

    setItems([
      ...items,
      { id, name, price}
    ])
  }

  return (
    <div>

      <Toolbar>
             <h1>Hello React</h1> 
             <h1>Component Composition</h1> 
      </Toolbar>
      <ul>
        {items.map(i => <Item key={i.id} name={i.name} price={i.price}/>)}
      </ul>
      <div class="mb-3">
            <label class="form-label">Name</label>
            <input type='text' ref={nameRef} />
          </div>
          <div class="mb-3">
            <label class="form-label">Price</label>
            <input type='text' ref={priceRef} />
          </div>
          
        <button onClick={add}>Add</button>
    </div>
  )
}
  export default App;