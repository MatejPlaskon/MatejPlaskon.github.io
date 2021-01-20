import { Box, Stack, Heading, Image } from '@chakra-ui/react';
import mainIcon from './images/northgard_icon.png';

const MainHeader = () => {
  return (
    <div id="mainHeader">
      <Stack direction="row" alignItems="center">
        <Box>
          <Image boxSize="50px" src={mainIcon} alt="Northgard" />
        </Box>
        <Box>
          <Heading size="lg">Northgard </Heading>
        </Box>
      </Stack>
    </div>
  );
};

export default MainHeader;
