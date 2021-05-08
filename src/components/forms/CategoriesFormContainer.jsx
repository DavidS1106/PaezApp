import React from 'react';
import axios from 'axios';
import CategoriesForm from './CategoriesForms';
import { Modal } from 'react-bootstrap';
import ImgContainer from '../images/ImgContainer';
import { Button} from 'react-bootstrap';
import UpdateFormComponent from './UpdateFormComponent';
import AddFormComponent from './AddFormComponent';
import logo from '../../imgs/add_image2.png';
import {Container,Row,Col, Image , Tabs, Tab} from 'react-bootstrap';

class CategoriesFormContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           categories:[true,true,true],
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
           id_artist:localStorage.getItem('artist_id'),
           catsDict:['ACRYLIQUE','HUILE','AUTRE']
        };
        this.headers= {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('Token')}` }
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
        this.choseArtist = this.choseArtist.bind(this);
      }

      componentDidMount() {
        this.fetchingImages();
        
      }
      checkCategoriesToGet(){
        let tab=["","",""];
        if(this.state.categories[0]===true){
          tab[0]="ACRYLIQUE";
        }
        if(this.state.categories[1]===true){
          tab[1]="HUILE";
        }
        if(this.state.categories[2]===true){
          tab[2]="AUTRE";
        }
        return tab;
      }
      fetchingImages= async()=>{
        console.log(this.headers);
        this.images=[];
        let categories=this.checkCategoriesToGet(); 
        if(this.state.id_artist!==undefined){      
            await axios.post('http://localhost:8080/tableaux/allById/'+this.state.id_artist,categories)
            .then(result =>{
                  this.images=result.data;
                  this.arrayToMatrice(3);
            })
            .catch(error =>{
                  console.log("error: "+error);
            });
          }
          else{
            await axios.get('http://localhost:8080/tableaux/all/')
            .then(result =>{
                  this.images=result.data;
                  this.arrayToMatrice(3);
            })
            .catch(error =>{
                  console.log("error: "+error);
            });
          }
    }
    arrayToMatrice(numberInArray){
      const rows = this.images.reduce(function (rows, key, index) { 
        return (index % numberInArray === 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);

      this.setState({ rendered_images:rows});
    }

    deleteImg(){  
        if(this.state.id_image_focused!==null){   
          axios.delete('http://localhost:8080/tableaux/delete/'+this.state.id_image_focused,this.headers)
          .then(result =>{
            this.setState({delete_show:false});
            this.fetchingImages();
            
          })
          .catch(error =>{
              console.log("error: "+error);
          });
          
        }
      }
      handleClose(){
        this.setState({show:false});
    }
      handleShow= param=>e=>{

        this.setState({ support_id_image_focused:param.support,cat_id_image_focused:param.cat,annee_image_focused:param.year,
          price_image_focused:param.price,id_image_focused:param.id,show:true,img_focused:param.name,img_focused_src:param.imgUri});

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
        this.setState({show:false,update_show:true});
    }
    handleCloseAdd(){
        this.setState({add_show:false});
    }
    handleShowAdd(){
        this.setState({add_show:true});
    }
    handleForm(e){
        let form=e.target

        axios.put('http://localhost:8080/tableaux/update/', {id:this.state.id_image_focused,author:{id:this.state.id_artist},cat:form.categorie.value,support:form.support.value, imgUri:'',name:form.titre.value,year:form.annee.value,price:form.prix.value},this.headers)
        .then(result =>{
         this.fetchingImages();
        })
        .catch(error =>{
            console.log("error: "+error);
        });
    }
      
    async handleFormAdd(e){
        let form=e.target
        
        //transform to base64
        const toBase64 = file => new Promise((resolve, reject) => {
          const reader = new FileReader();
          //resize img
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
        let base64=await toBase64(e.target.img.files[0]);
        axios.post(
        'http://localhost:8080/tableaux/create',{author:{id:this.state.id_artist},cat:form.categorie.value,support:form.support.value,imgUri:base64,name:form.titre.value,year:form.annee.value,price:0},this.headers)
        .then(result =>{
          console.log(result)
          this.fetchingImages();
        })
        .catch(error =>{
            console.log("error: "+error);
        });
        
    }
    handleCatsSubmit(event) {
        let target = event.target;
        let value = (target.id)-1;
        let tab= this.state.categories;

        if(tab[value]===true){
          tab[value]=false;
        }
        else{
          tab[value]=true;
        }
        this.setState({categories:tab});
        this.fetchingImages();
    }
    choseArtist(artistId){
      this.setState({
        id_artist:artistId,rendered_images: []
      }, () => {
          this.fetchingImages();
      });
    }

    render() {
      return (
          <Container  fluid>
            <Row className="overlay">
            <Col>
              <Tabs  onSelect={(k) => this.choseArtist(k)} activeKey={this.state.id_artist}>
                <Tab  eventKey="5" title="Carna">
                </Tab>
                <Tab  eventKey="4" title="Pepita">
                </Tab>
              </Tabs>
            </Col>
            </Row>
            <Row>
            <Col className="cats">             
              <CategoriesForm cats={this.state.categories} submit={this.handleCatsSubmit} />
            </Col>
            </Row>
            <Row >
            <Col>
                  {
                  this.props.isLoggedIn ? <div> <Image fluid onClick={this.handleShowAdd}className='logo_add_image' src={logo} alt="add"/> </div> : null
                  }
            </Col>
            </Row>
           
            {
                            this.state.rendered_images.map( (row,k) => (
                              <Row className ="padding" key={k}>
                                {
                                  row.map( (item,i) =>(
                                    <Col   key={i}>
                                      <div  className="tableaux" onClick={this.handleShow(item)} >
                                        <ImgContainer  img={item}/>
                                      </div>
                                    </Col>
                                  ))
                                }
                              </Row>
                            ))
            }
            
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                <Modal.Body ><img className="focus" src ={this.state.img_focused_src} alt={this.state.img_focused}/>
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
          </Container>
      );
    }
  }
export default CategoriesFormContainer;