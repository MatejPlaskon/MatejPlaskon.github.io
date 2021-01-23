import React from 'react';
import {
  Menu,
  MenuItem,
  MenuList,
  Button,
  MenuButton,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <Menu id="mobileMenu">
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mx={1} my={1}>
        Menu
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link id="menuLink" to="/">
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link id="menuLink" to="/clans">
            Clans
          </Link>
        </MenuItem>
        <MenuItem>
          <Link id="menuLink" to="/resources">
            Resources
          </Link>
        </MenuItem>
        <MenuItem>
          <Link id="menuLink" to="/victory">
            Victory
          </Link>
        </MenuItem>
        <MenuItem>
          <Link id="menuLink" to="/faq">
            FAQ
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
