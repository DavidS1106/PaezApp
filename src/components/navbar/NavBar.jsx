import React from 'react';
import {Link} from "react-router-dom";
import SideNav, { /*Toggle, Nav,*/ NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import LoginContainer from '../facebook/LoginContainer';
const NavBar = () => {
    return (
      <div>
            <SideNav
                    onSelect={(selected) => {
                        // Add your code here
                    }}
                    style={{backgroundColor: '#000000'}}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/home"><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/home">Accueil</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="pep">
                        <NavIcon>
                           {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em'}} />*/}
                        </NavIcon>
                        <NavText>
                            Pepita                     
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="carna">
                         <NavIcon>
                            {/*<i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />*/}
                        </NavIcon>
                        <NavText>
                            Carna
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavText>
                            <LoginContainer/>
                        </NavText>
                        <NavIcon>
                           {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em'}} />*/}
                        </NavIcon>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

      </div>
    )
  }
  
  export default NavBar;