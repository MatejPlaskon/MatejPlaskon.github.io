import React from 'react';
import { Button } from "@chakra-ui/react"

class OpenButton extends React.Component {
    handleClick() {
        console.log('hi');
        }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={() => this.handleClick()}>
          Text me
        </button>
      );
    }
  }

  export default OpenButton;