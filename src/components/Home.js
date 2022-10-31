import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.png"


const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform:"translate(-50%,-50%)",
    textTransform: "upperCase",
    p: "4",
    size:"4xl"
    
}

const Home = () => {
  return (
    <Box>
    <MyCarousel/>
     <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
      <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"}
      m="auto"
      >
        Services
      </Heading>
      <Stack
      h={"full"}
      p={"4"}
      alignItems={"center"}
      direction={["column","row"]}
      >
      <Image src={img5}
      h={["40","400"]}
      filter={"hue-rotate(-130deg)"}
      />
      <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur dolor repellendus labore quibusdam enim ipsum perspiciatis autem deserunt magnam ad debitis eveniet laudantium nemo, harum nesciunt expedita obcaecati praesentium voluptatem architecto itaque minima maxime. Optio alias explicabo voluptates obcaecati veniam quas maiores enim aliquid qui distinctio dignissimos necessitatibus eveniet voluptas quaerat, doloribus ut voluptatum aliquam laudantium similique natus, voluptatem ad ducimus. Suscipit quo, nihil quod vero totam, dolor esse impedit ipsum molestiae, enim et natus ipsam vitae ullam? Perferendis aperiam fuga magni voluptatum dicta sapiente adipisci cumque expedita pariatur veniam molestiae iusto rem, ad eum, repellendus rerum asperiores velit, deleniti eaque error laudantium. Quod voluptate iusto, rem, temporibus neque velit quaerat eveniet veniam, quis eaque fuga quos commodi aspernatur quam molestias sint sapiente molestiae ipsa soluta culpa corrupti fugit mollitia? Laborum enim fuga, exercitationem, fugit, quia est recusandae commodi cupiditate nam consequuntur fugiat excepturi officia voluptate odit voluptatibus delectus! Sit voluptatibus est tempora! Expedita odit molestiae aut consequatur asperiores id deserunt cupiditate quas eveniet, sed qui voluptate cumque quos cum fugit dolorum, reiciendis ab molestias ullam magnam? Amet tempore similique earum, dicta, fugit deleniti voluptatem recusandae numquam odio facere, ratione expedita. Vero dolorem, omnis suscipit excepturi consectetur ad recusandae magni iste maiores natus itaque quia quae earum aperiam consequatur non illo eligendi quos quibusdam qui? Similique repellendus velit ratione quos quisquam quo nostrum, inventore maiores culpa tenetur, sit, laudantium ad facilis quidem? Dolores quidem sed consectetur neque necessitatibus dignissimos odio. Similique, fugit beatae? Labore minus necessitatibus dolore dolor eveniet explicabo delectus reprehenderit adipisci facilis vero in autem, soluta ducimus architecto voluptates hic quam vitae ab dignissimos id inventore exercitationem! Aliquid vitae incidunt ea ut sunt laborum exercitationem nesciunt quod, atque autem nihil aut hic nostrum labore odit ad est provident magni nam ipsam veniam suscipit facilis ipsa perferendis. Veritatis!
      </Text>
      </Stack>
     </Container>
    </Box>
  )
  
};



const MyCarousel = () => {
     return (
        <Carousel
     autoPlay
     infiniteLoop
     interval={1000}
     showStatus={false}
     showThumbs={false}
     showArrows={false}
    >
    <Box w={"full"} h={"100vh"}>
        <Image src={img1}/>
        <Heading
        bgColor={"blackAlpha.600"}
        color={"white"}
        
      {...headingOptions}
        >
            Watch The Future
        </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
        <Image src={img2}/>
        <Heading
        bgColor={"blackAlpha.900"}
        color={"white"}
        {...headingOptions}
        >
            Future is Gaming
        </Heading>
    </Box>

    <Box w={"full"} h={"100vh"}>
        <Image src={img3}/>
        <Heading
        bgColor={"whiteAlpha.600"}
        color={"black"}
        {...headingOptions}
        >
            Gaming on Console
        </Heading>
    </Box>

    <Box w={"full"} h={"100vh"}>
        <Image src={img4}/>
        <Heading
        bgColor={"whiteAlpha.600"}
        color={"black"}
        {...headingOptions}
        >
            Night life is Cool
        </Heading>
    </Box>


    </Carousel>
     )
    
}
export default Home

