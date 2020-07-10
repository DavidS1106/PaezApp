import React from 'react';
import axios from 'axios';
import CategoriesForm from './CategoriesForms';
import ImgContainer from '../images/Image';
//import LoginFacebook from '../facebook/LoginFacebook';
class CategoriesFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[],
           rendered_images:[]
        };
        this.images=[];
        this.should_be_updated=true;
       // const [todos, setTodos] = useState([{ checked: false }]);
       this.handleSubmit = this.handleSubmit.bind(this); 
       //this.promiseFunction=this.promiseFunction.bind(this);
      }


    componentDidMount() { 
        let items=[];
        axios.get('http://localhost:3000/categories' /*+ DEFAULT_QUERY*/)
        .then(result =>{
            
            for(let i=0;i<result.data.length;i++){
                //items.push(result.data[i].nom);
                items.push({object_id:result.data[i]._id,id: i,bool: true,nom :result.data[i].nom});
            }
           
            this.setState({ categories: items,});  
            
        })
        .catch(error =>{
            console.log("error: "+error);
        });
    }
    fetchingImages= async()=>{
      let tab=this.state.categories;
      this.images=[];
        for(let value of tab.entries()){
          if(value[1].bool===true){
             await axios.get('http://localhost:3000/images/id/'+value[1].object_id)
              .then(result =>{
                if(  this.images.length!==0){
                  for(let i=0;i<result.data.length;i++){
                    this.images[ this.images.length+i]=result.data[i];
                  }
                }
                else if(  this.images.length===0){
                  this.images=result.data;
                }
              })
              .catch(error =>{
                  console.log("error: "+error);
              });
          }
        }
        this.setState({ rendered_images:this.images});  
    }
    componentDidUpdate(){
     if ( this.should_be_updated===true) {
        this.should_be_updated=false;
        console.log("update ");
        this.fetchingImages();
      }
     
    }
    handleSubmit(event) {
        this.should_be_updated=true;
        let target = event.target;
        let value = target.value;
        let tab= this.state.categories;

        if(tab[value].bool===true){
          tab[value].bool=false;
        }
        else{
          tab[value].bool=true;
        } 
        this.setState({ categories: tab }); 
        //event.preventDefault();
    }

    render() {
      return (
        <div>
            <CategoriesForm cats={this.state.categories} submit={this.handleSubmit} />
            {
                            this.images.map((item,i) => {
                                return (
                                        <ImgContainer name={item.name} img={item.uri_img} key={i} />
                                );
                            })
            }
        </div>
      );
    }
  }
export default CategoriesFormContainer;