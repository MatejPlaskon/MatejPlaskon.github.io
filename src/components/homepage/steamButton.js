import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaSteamSquare } from 'react-icons/fa';

class SteamButton extends React.Component {
  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <Button
        background="#171a21"
        color="#ffffff"
        size="lg"
        leftIcon={<FaSteamSquare />}
        onClick={() =>
          window.open(
            'https://store.steampowered.com/app/466560/Northgard/',
            '_blank'
          )
        }
      >
        Download on Steam
      </Button>
    );
  }
}

export default SteamButton;
