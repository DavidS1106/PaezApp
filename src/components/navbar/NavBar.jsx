import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
const NavBar = () => {
    return (
      <div classname="menu">
            <SideNav
                    onSelect={(selected) => {
                        // Add your code here
                    }}
                    style={{backgroundColor: '#000000'}}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Accueil
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="pep">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em'}} />
                        </NavIcon>
                        <NavText>
                            Pepita
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                acrylique
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                huile
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="carna">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Carna
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                acrylique
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                huile
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

      </div>
    )
  }
  
  export default NavBar;