import React from 'react';
import { Input } from '@chakra-ui/react';

class Faq extends React.Component {
  constructor() {
    super();

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }

  render() {
    return (
      <div>
        <Input id="myInput" placeholder="Search" onKeyUp={this.handleClick} />
        <ul id="myUL">
          <li>
            <a href="#">New text</a>
          </li>
          <li>
            <a href="#">Agnes</a>
          </li>

          <li>
            <a href="#">Billy</a>
          </li>
          <li>
            <a href="#">Bob</a>
          </li>

          <li>
            <a href="#">Calvin</a>
          </li>
          <li>
            <a href="#">Christina</a>
          </li>
          <li>
            <a href="#">Cindy</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Faq;
