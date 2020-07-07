import React from 'react';
import axios from 'axios';
import CategoriesForm from './CategoriesForms';
class CategoriesFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[],
        };
        this.images=[];
       // const [todos, setTodos] = useState([{ checked: false }]);
       this.handleSubmit = this.handleSubmit.bind(this); 
      }


    componentDidMount() { 
        let items=[];
        axios.get('http://localhost:3000/categories' /*+ DEFAULT_QUERY*/)
        .then(result =>{
            
            for(let i=0;i<result.data.length;i++){
                //items.push(result.data[i].nom);
                items.push({object_id:result.data[i]._id,id: i,bool: false,nom :result.data[i].nom});
            }
          
            this.setState({ categories: items });           
        })
        .catch(error =>{
            console.log("error: "+error);
        });

    }
    componentDidUpdate(){
      console.log("update ");
      let tab=this.state.categories;
      let items=[];
      for(let value of tab.entries()){
        if(value[1].bool===true){
            axios.get('http://localhost:3000/images/id/'+value[1].object_id)
            .then(result =>{
              console.log("reussi:" +result);
              if(items.length!==0){
                for(let i=0;i<result.data.length;i++){
                  items[items.length+i]=result.data[i];
                  console.log("i: "+result.data[i]);
                }
              }
              else if(items.length===0){
                console.log("0: "+result.data[0].name);
                items=result.data;
              }
            })
            .catch(error =>{
                console.log("error: "+error);
            });
        }
      }
      this.images=items;
      console.log("tableaux: "+this.images);
    }
    handleSubmit(event) {
        let target = event.target;
        let value = target.value;
        let tab= this.state.categories;

        if(tab[value].bool===true){
          tab[value].bool=false;
        }
        else{
          tab[value].bool=true;
        } 
        console.log("bool: "+tab[value].bool)
        this.setState({ categories: tab }); 
        //event.preventDefault();
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