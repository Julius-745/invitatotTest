import { Box, Stack, Heading, Button } from "@chakra-ui/react";

const Banner = () => {
    return (
        <Stack 
            backgroundImage={"https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920"} 
            overflow={"hidden"} 
            position={"relative"}
            textAlign={"center"}
            height={"100vh"} // Keep the height fixed
        >
            <Box 
                backgroundColor="rgba(0, 0, 0, 0.5)" 
                height="100%" 
                width="100%" 
                position="absolute" 
                top={0} 
                left={0}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"space-between"}
            />
            <Stack
                gap={10}
                p={"42px"} 
                position="relative" 
                zIndex={1} 
                color={"white"}
                textAlign={"center"}
            >
                <Heading fontSize={"xl"}>Wedding Announcement</Heading>
                <Box>
                    <Heading size={"xl"} fontFamily={"Butler,sans-serif"} fontWeight={"light"}>
                        Tiffany & Jared
                    </Heading>
                    <Heading size={"xl"} fontFamily={"Butler,sans-serif"} fontWeight={"light"}>
                        #TImetoshaRE
                    </Heading>
                </Box>
                <Button size={"md"}>Open</Button>
            </Stack>
        </Stack>
    );
}

export default Banner;
