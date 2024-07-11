import { Box, Stack, Heading, Button, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import font from "../font/Butler_Light-0737d51bdc90202fe832aaed043a2798.otf";
import music from "../music/music.mp3"

const Banner = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [audio] = useState(new Audio(music));

    
    const handlePlay = () => {
      audio.play();
      setIsOpen(true)
    }
       
      

    return (
        <Stack 
            backgroundImage={"https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920"} 
            alignSelf={"center"}
            overflow={"hidden"} 
            position={"relative"}
            height={"100vh"}
        >
            <Box 
                backgroundColor="rgba(0, 0, 0, 0.5)" 
                height="100%" 
                width="100%" 
                position="absolute" 
                top={0} 
                left={0}
            />
            <Stack
                gap={"25vh"}
                p={"42px"} 
                mt={20}
                w={"100%"}
                position="relative" 
                zIndex={1}
                color={"white"}
                textAlign={"center"}
                alignItems={"center"}
                mb={""}
            >
                <Heading fontSize={"xl"}>Wedding Announcement</Heading>
                <Box>
                    <Heading size={"2xl"} fontFamily={font} fontWeight={"light"}>
                        Tiffany & Jared
                    </Heading>
                    <Heading size={"xl"} fontFamily={"inheirit"} fontWeight={"light"} fontStyle={"italic"}>
                        #TImetoshaRE
                    </Heading>
                </Box>
                {isOpen ?
                  <Flex flexDir={"row"} justifyContent={"space-between"} minW={"50vh"}>
                    <Stack>test</Stack>
                    <Stack>
                      <Text fontWeight={"bold"} fontFamily={"Poppins,serif"}>SCROLL TO BEGIN <ChevronDownIcon boxSize={10}/> </Text>
                    </Stack>
                  </Flex>
                  :
                  <Button size={"md"} variant={"solid"} color={"black"} bgColor={"white"} w={"20%"} onClick={() => handlePlay()}>Open</Button>
                }
            </Stack>
        </Stack>
    );
}

export default Banner;
