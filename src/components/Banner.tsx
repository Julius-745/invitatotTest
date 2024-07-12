import { Box, Stack, Heading, Button, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import font from "../font/Butler_Light-0737d51bdc90202fe832aaed043a2798.otf";
import music from "../music/music.mp3"
import { IMAGE_CAROUSEL } from "../constant/ImageCarousel";

const Banner = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [audio] = useState(new Audio(music));
    const [isChange, setIsChange] = useState<boolean>(false)
    const [activeImage, setActiveImage] = useState<number>(0)



    const handlePlay = () => {
      audio.play();
      setIsOpen(true)
    }

    useEffect(() => {
        if (isOpen) {
            const interval = setInterval(() => {
                setIsChange(true);
                setTimeout(() => {
                    setActiveImage((prevActiveImage) => 
                        (prevActiveImage + 1) % IMAGE_CAROUSEL.length
                    );
                    setIsChange(false);
                }, 500); // Time to fade out
            }, 5000); // Change image every 5 seconds

            return () => clearInterval(interval);
        }
    }, [isOpen === true]);



    return (
        <Stack 
            backgroundImage={IMAGE_CAROUSEL[activeImage].src}
            backgroundSize={"cover"}
            alignSelf={"center"}
            position={"relative"}
            height={"100vh"}
            style={{
                filter: isChange ? "blur(10px)" : "none",
                transition: "filter 0.5s ease-in-out"
            }}
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
                      <Text fontWeight={"bold"} fontFamily={"Poppins,serif"} mt={20}>SCROLL TO BEGIN <ChevronDownIcon boxSize={10}/> </Text>
                    </Stack>
                  </Flex>
                  :
                  <Button size={"md"} variant={"solid"} color={"black"} bgColor={"white"} w={"20%"} onClick={() => handlePlay()}>Open Invitation</Button>
                }
            </Stack>
        </Stack>
    );
}

export default Banner;
