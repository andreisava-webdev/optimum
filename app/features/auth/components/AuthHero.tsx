import { BackgroundImage, Box, Overlay } from '@mantine/core';

export const AuthHero = () => {
  return (
    <Box sx={{ height: '100%', width: '60%' }} pos="relative">
      <BackgroundImage src="./auth.jpg" h="100%">
        <Overlay color="#0958d9" />
      </BackgroundImage>
    </Box>
  );
};
