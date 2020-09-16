import React, {Component} from 'react';
import FoodiesHeader from '../../components/Header/FoodiesHeader';
import FoodiesMenu from '../../components/Menu/Menu';
import "./Home.css";

class Home extends Component {

  renderMenu(){
    return (
      <div>
        <FoodiesMenu />
      </div>
    )
  }

 renderHeader(){
     return (
   <div className ={"wrapper"} >
      <FoodiesHeader 
      title={"Un nuevo sabor esta en"} 
      subtitle={"la ciudad"}
      description ={"Estamos a punto de descubrir un mundo llenode sabores y de emociones inigualables"}
      />
   </div>
     );
 }
    render() {
      return (
       <div> 
         { this.renderMenu() } 
         { this.renderHeader()}
       </div> 
       
      ); 
    }
  }
  export default Home;