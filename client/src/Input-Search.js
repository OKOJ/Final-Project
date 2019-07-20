import React from 'react'; 

class InputSearch extends React.Component{
    state = {product: ''}
    inputChange = (event) => {
let value = event.target.value;

this.setState({product: value})
    } 
    onSubmit = (event)=>  {
        event.preventDefault();
//sending productName to the API 

console.log(this.state.product) 
this.setState({product: ''})
    }
render() {
    return(
        <form>
            <input value={this.state.product} name='product' onChange={this.inputChange} type='text' placeholder='Product Name'/>

           
            <button onClick={this.onSubmit}>
            submit
            </button>
        </form>
    ) 

}
}
export default InputSearch;