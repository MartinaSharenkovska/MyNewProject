import React from 'react';
import './App.css';
import CardCont from './Components/CardCont';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Toolbar from './Components/Navbar/Toolbar';
import SideDrawer from './Components/Navbar/SideDrawer';
import Backdrop from './Components/Navbar/Backdrop';


class App extends React.Component {

  state ={
    sideDrawerOpen: false,
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: ! prevState.sideDrawerOpen}
    });

  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render(){
    let sideDrawer;
    let backDrop;

    if(this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop =  <Backdrop click={this.backdropClickHandler} />;
    }
  return (
    <div className="app" style={{height: '100%'}}>
      <Toolbar drawerClickHandler ={this.drawerToggleClickHandler} />
      {sideDrawer}
      {backDrop}
     
      <Header />
      <CardCont></CardCont>
      <Footer />
      
    </div>
  )
  }
}

export default App;
