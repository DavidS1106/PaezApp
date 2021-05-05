import React from 'react';
import axios from 'axios';
import CategoriesForm from './CategoriesForms';
import { Modal } from 'react-bootstrap';
import ImgContainer from '../images/ImgContainer';
import { Button} from 'react-bootstrap';
import UpdateFormComponent from './UpdateFormComponent';
import AddFormComponent from './AddFormComponent';
import logo from '../../imgs/add_image.png';
import { Container,Row,Col } from 'react-bootstrap';

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
           id_image_focused:null,
           price_image_focused:null,
           annee_image_focused:null,
           cat_id_image_focused:null,
           support_id_image_focused:null,
        };
        
        this.images=[];
        this.should_be_updated=true;
        this.handleCatsSubmit = this.handleCatsSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleCloseDelete = this.handleCloseDelete.bind(this);
        this.handleShowDelete = this.handleShowDelete.bind(this);
        this.handleCloseUpdate = this.handleCloseUpdate.bind(this);
        this.handleShowUpdate = this.handleShowUpdate.bind(this);
        this.handleCloseAdd = this.handleCloseAdd.bind(this);
        this.handleShowAdd = this.handleShowAdd.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.handleFormAdd = this.handleFormAdd.bind(this);
        this.deleteImg = this.deleteImg.bind(this);
      }
      arrayToMatrice(numberInArray){
        const rows = this.images.reduce(function (rows, key, index) { 
          return (index % numberInArray === 0 ? rows.push([key]) 
            : rows[rows.length-1].push(key)) && rows;
        }, []);

        console.log("rows");
        
        this.setState({ rendered_images:rows});
        console.log(this.state.rendered_images);
      }
      deleteImg(){  
        if(this.state.id_image_focused!==null){   
          axios.delete('http://localhost:3000/images/delete/'+this.state.id_image_focused)
          .then(result =>{
            this.setState({delete_show:false});
            this.fetchingImages();
            
          })
          .catch(error =>{
              console.log("error: "+error);
          });
          //this.handleCloseDelete();
          
        }
      }
      handleClose(){
        this.setState({show:false});
      }
      handleShow= param=>e=>{
        
        this.setState({ support_id_image_focused:param.support,cat_id_image_focused:param.cat_id,annee_image_focused:param.annee,
          price_image_focused:param.prix,id_image_focused:param._id,show:true,img_focused:param.name,img_focused_src:param.uri_img});
          console.log(this.state.annee_image_focused);

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
      handleForm(e){
        let form=e.target
        let tab_json={_id:this.state.id_image_focused,name:form.titre.value,cat_id:form.categorie.value,annee:form.annee.value,prix:form.prix.value,support_id:form.support.value};
        console.log(form.categorie.value);
        //e.preventDefault();
        // update 
        axios.post('http://localhost:3000/images/update/'+this.state.id_image_focused, {body:tab_json})
        .then(result =>{
         this.fetchingImages();
        })
        .catch(error =>{
            console.log("error: "+error);
        });
      }
      
      async handleFormAdd(e){
        let form=e.target
        e.preventDefault();
        
        //transform to base64
        const toBase64 = file => new Promise((resolve, reject) => {
          const reader = new FileReader();
          //resize img
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
        
        let base64=await toBase64(e.target.img.files[0]);
        let tab_json={auteur:localStorage.getItem('id_artist'), img:base64,id:this.state.id_image_focused,name:form.titre.value,cat_id:form.categorie.value,annee:form.annee.value,prix:form.prix.value,support_id:form.support.value};
       
        
        axios.post('http://localhost:3000/images/post/', {body:tab_json})
        .then(result =>{
          
          this.fetchingImages();
        })
        .catch(error =>{
            console.log("error: "+error);
        });
        
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
            this.fetchingImages();
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
             await axios.get('http://localhost:3000/images/id/'+localStorage.getItem('id_artist')+'/'+value[1].object_id)
              .then(result =>{               
                if(this.images.length!==0){
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
        this.arrayToMatrice(3);
    }
    
    handleCatsSubmit(event) {
        let target = event.target;
        let value = target.value;
        let tab= this.state.categories;

        if(tab[value].bool===true){
          tab[value].bool=false;
        }
        else{
          tab[value].bool=true;
        } 
        this.fetchingImages();
    }
    render() {
      return (
        <div>
          <Container>
            <Row>
            <Col>
              <CategoriesForm cats={this.state.categories} submit={this.handleCatsSubmit} />
            </Col>
            </Row>
            <Row className="padding_bot">
            <Col>
            {
              this.props.isLoggedIn ? <div><img onClick={this.handleShowAdd}className='logo_add_image' src={logo} alt="add"/> </div> : null
            }
            </Col>
            </Row>
            {
                             
                            this.state.rendered_images.map( (row,k) => (
                              <Row className ="padding_top" key={k}>
                                {
                                  row.map( (item,i) =>(
                                    <Col md={{offset:i}} key={i}>
                                      <div  className="tableaux" onClick={this.handleShow(item)} >
                                        <ImgContainer  className="img_displayed"  img={item}/>
                                      </div>
                                    </Col>
                                  ))
                                }
                              </Row>
                            ))
                            
            }
          </Container>
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>{this.state.img_focused}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img className="focus" src ={this.state.img_focused_src} alt={this.state.img_focused}/>
                </Modal.Body>
                <Modal.Footer>
                          {
                            this.props.isLoggedIn ?
                            <Button variant="primary" onClick={this.handleShowUpdate}>
                              Modifier
                            </Button> : null
                          }
                          {
                            this.props.isLoggedIn ?
                            <Button variant="danger" onClick={this.handleShowDelete}>
                                Supprimer
                            </Button> :null
                            
                          }
                </Modal.Footer>
            </Modal>
            <Modal show={this.state.delete_show} onHide={this.handleCloseDelete}>
                <Modal.Header closeButton>  
                </Modal.Header>
                <Modal.Body>Etes-vous sûr de vouloir continuer?
                </Modal.Body>
                <Modal.Footer>
                          <form >
                            <Button variant="danger" onClick={this.deleteImg}>
                              Supprimer
                            </Button>
                            <Button variant="primary" onClick={this.handleCloseDelete}>
                              Non
                            </Button>
                            </form>
                </Modal.Footer>
            </Modal>
            <UpdateFormComponent submit={this.handleForm}  cats={this.state.categories} supports={this.state.supports} show={this.state.update_show} onHide={this.handleCloseUpdate}/>
            <AddFormComponent cat_id ={this.state.cat_id_image_focused} support_id={this.state.support_id_image_focused} year={this.state.annee_image_focused} price={this.state.price_image_focused} submit={this.handleFormAdd} cats={this.state.categories} supports={this.state.supports} show={this.state.add_show} onHide={this.handleCloseAdd}/>   
        </div>
      );
    }
  }
export default CategoriesFormContainer;