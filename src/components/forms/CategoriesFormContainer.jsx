import React from 'react';
import axios from 'axios';
import CategoriesForm from './CategoriesForms';
class CategoriesFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[],
        };
      }


    componentDidMount() {
        console.log("FormContainer page");
        let items=[];
        axios.get('http://localhost:3000/categories' /*+ DEFAULT_QUERY*/)
        .then(result =>{
            
            for(let i=0;i<result.data.length;i++){
                items.push(result.data[i].nom);
                console.log("i:"+result.data[i].nom);
            }
            this.setState({ categories: items });
        })
        .catch(error =>{
            console.log("error: "+error);
        });

    }

    handleSubmit(event) {
        alert('A name was submitted: ');
        event.preventDefault();
    }

    render() {
      return (
        <div>
            <CategoriesForm cats={this.state.categories} submit={this.handleSubmit} />
        </div>
      );
    }
  }
export default CategoriesFormContainer;