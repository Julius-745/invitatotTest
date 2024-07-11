import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  return (
    <Grid templateColumns={"7fr 3fr"} minW={"100vw"} minH={"100vh"}>
      <GridItem 
        position={"sticky"}
        top={0}
        overflow={"hidden"} 
        borderRight={"10px solid #E2E8F0"}
        height={"100vh"} // Ensures the first GridItem doesn't get bigger
      >
        <Box 
          backgroundImage={"https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539"} 
          backgroundSize={"cover"} 
          backgroundPosition={"center"} 
          backgroundRepeat={"no-repeat"} 
          position="absolute" 
          top={0} 
          left={0} 
          width="100%" 
          height="100%" 
          zIndex={0}
        />
        <Box 
          backgroundColor="rgba(0, 0, 0, 0.5)" 
          height="100%" 
          width="100%" 
          position="absolute" 
          top={0} 
          left={0} 
          zIndex={1}
        />
        <Stack 
          gap={10} 
          p={"42px"} 
          position="relative" 
          zIndex={2} 
          color={"white"}
        >
          <Heading fontSize={"xl"}>Wedding Announcement</Heading>
          <Heading size={"4xl"} fontFamily={"Butler,sans-serif"} fontWeight={"light"} maxW={"20rem"}>
            Tiffany & Jared
          </Heading>
          <Box>
            <Text fontWeight={"light"} fontStyle={"italic"} maxW={"40rem"}>
              "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."
            </Text>
            <Text fontWeight={"light"} fontStyle={"italic"} maxW={"40rem"}>
              - Sapardi Djoko Damono
            </Text>
          </Box>
        </Stack>
      </GridItem>
      <GridItem overflow={"auto"} pos={"relative"} display={"flex"} flexDir={"column"} minH={"100vh"}>
        <Box>
          {props.children}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Layout;