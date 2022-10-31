import { Box, Button, Heading, HStack, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
const Footer = () => {
  return (
    <Box bg={"blackAlpha.900"} minW={"40"} p="16" color={"white"}>
        <Stack direction={["column","row"]}>
            <VStack alignItems={'stretch'} w="full" px={'4'}>
                <Heading size={"md"} textTransform="uppercase" textAlign={['center','left']}>
                    Subscribe to get Updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py="2">
                    <Input 
                    placeholder='put your email here... ' 
                    border={"none"} 
                    borderRadius={"none"} 
                    outline="none"
                    focusBorderColor='none'
                
                    />
                    <Button p="0"
                    colorScheme={"purple"}
                    variant="ghost"
                    borderRadius={"0 20px 20px 0"}
                    >
                        <AiOutlineSend size={"20"}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'}
            borderLeft={["none","1px solid white"]}
            borderRight={["none","1px solid white"]}
            >
                <Heading textTransform={'uppercase'} textAlign='center'>
                    VIDEO HUB
                </Heading>
                <Text>
                   All Rights Reserved
                </Text>

            </VStack>
            <VStack width={'full'}>
              <Heading size={'md'} textTransform='uppercase'>
                Social Media
              </Heading>
              <Button variant={'link'} colorScheme='white'>
                <a href='https://facebook.com/profile.php?id=100061316587296'>Facebook</a>
              </Button>
              <Button variant={'link'} colorScheme='white'>
                <a href='https://Instagram.com/_asif_ali45'>Instagram</a>
              </Button>
              <Button variant={'link'} colorScheme='white'>
                <a href='https://Youtube.com/channel/UCsSYDep4mWd9KGgoyObzS0g'>Youtube</a>
              </Button>
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer