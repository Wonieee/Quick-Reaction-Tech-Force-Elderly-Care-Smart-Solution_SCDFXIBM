import React from 'react';
import "./PersonalInfoTable.css";

class ShoppingList extends React.Component {

  render() {
    return (
      <div style={{margin: "50px", fontSize: "24px"}}>
        <table>
            <tr>
              <td>Name</td>
              <td>Mr Lim</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>65</td>
            </tr>
            <tr>
              <td>Medical Records</td>
              <td>Diabetes</td>
            </tr>
        </table>
      </div>
    );
  }
}
  
export default ShoppingList;