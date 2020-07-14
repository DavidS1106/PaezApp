import React from 'react';
import axios from 'axios';
import CategoriesForm from './CategoriesForms';
//import ModalImage from "react-modal-image";
//import FacebookLogin from 'react-facebook-login';
import { Modal } from 'react-bootstrap';
import ImgContainer from '../images/ImgContainer';
import { Button} from 'react-bootstrap';
import UpdateFormComponent from './UpdateFormComponent';
import AddFormComponent from './AddFormComponent';
import logo from '../../imgs/add_image.png';
class CategoriesFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[],
            supports:[],
           rendered_images:[],
           show :false,
           img_focused:null,
           img_focused_src:null,
           delete_show:false,
           update_show:false,
           add_show:false,
        };
        this.images=[];
        this.should_be_updated=true;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleCloseDelete = this.handleCloseDelete.bind(this);
        this.handleShowDelete = this.handleShowDelete.bind(this);
        this.handleCloseUpdate = this.handleCloseUpdate.bind(this);
        this.handleShowUpdate = this.handleShowUpdate.bind(this);
        this.handleCloseAdd = this.handleCloseAdd.bind(this);
        this.handleShowAdd = this.handleShowAdd.bind(this);
      }
      handleClose(){
        this.setState({show:false});
      }
      handleShow=param=> e=>{
        this.setState({show:true,img_focused:param.name,img_focused_src:param.uri_img});

      }
      handleCloseDelete(){
        this.setState({delete_show:false});
      }
      handleShowDelete(){
        this.setState({show:false,delete_show:true});
      }
      handleCloseUpdate(){
        this.setState({update_show:false});
      }
      handleShowUpdate(){
        //fetch data
        this.setState({show:false,update_show:true});
      }
      handleCloseAdd(){
        this.setState({add_show:false});
      }
      handleShowAdd(){
        //fetch data
        this.setState({add_show:true});
      }
    componentDidMount() { 
        let items_cat=[];
        //categories
        axios.get('http://localhost:3000/categories' /*+ DEFAULT_QUERY*/)
        .then(result =>{
            
            for(let i=0;i<result.data.length;i++){
                //items.push(result.data[i].nom);
                items_cat.push({object_id:result.data[i]._id,id: i,bool: true,nom :result.data[i].nom});
            }
           
            this.setState({ categories: items_cat,});  
            
        })
        .catch(error =>{
            console.log("error: "+error);
        });
        //supports
        let items_sup=[];
        axios.get('http://localhost:3000/categories/supports/' /*+ DEFAULT_QUERY*/)
        .then(result =>{
            
            for(let i=0;i<result.data.length;i++){
                //items.push(result.data[i].nom);
                items_sup.push(result.data[i]);
            }
           
            this.setState({ supports: items_sup,});  
            
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
            <img onClick={this.handleShowAdd}className='logo_add_image' src={logo} alt="add"/>
            {
                            
                            this.images.map((item,i) => {
                                return (
                                    <div className="tableaux" onClick={this.handleShow(item)} key={i}
                                    >
                                      <ImgContainer  nom={item.name}/>
                                    </div>
                                );
                            })
                            
            }
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>{this.state.img_focused}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img className="focus" src ={this.state.img_focused_src} alt={this.state.img_focused}/>
                </Modal.Body>
                <Modal.Footer>
                          <Button variant="primary" onClick={this.handleShowUpdate}>
                            Modifier
                          </Button>
                          <Button variant="danger" onClick={this.handleShowDelete}>
                              Supprimer
                          </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={this.state.delete_show} onHide={this.handleCloseDelete}>
                <Modal.Header closeButton>  
                </Modal.Header>
                <Modal.Body>Etes-vous sûr de vouloir continuer ?
                </Modal.Body>
                <Modal.Footer>
                          <Button variant="success" onClick={this.handleCloseDelete}>
                           Oui
                          </Button>
                          <Button variant="danger" onClick={this.handleCloseDelete}>
                             Non
                          </Button>
                </Modal.Footer>
            </Modal>
            <UpdateFormComponent cats={this.state.categories} supports={this.state.supports} show={this.state.update_show} onHide={this.handleCloseUpdate}/>
            <AddFormComponent cats={this.state.categories} supports={this.state.supports} show={this.state.add_show} onHide={this.handleCloseAdd}/>   
        </div>
      );
    }
  }
export default CategoriesFormContainer;