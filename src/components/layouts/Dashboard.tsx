import { Box, Button, Flex, Icon, Image } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { Link, useLocation } from 'react-router-dom'
import RdsLogo from '../../assets/rds-logo.png'
import { MdSettings } from 'react-icons/md'

const menus = [
  { name: 'HOME', path: '/home', icon: MdSettings },
  { name: 'OPEARASI', path: '/operasi', icon: MdSettings },
  { name: 'STOCK', path: '/stock', icon: MdSettings },
  { name: 'TRACKING STOCK MOVE', path: '/tracking-stock-move', icon: MdSettings },
  { name: 'STOCK OPNAME', path: '/stock-opname', icon: MdSettings },
  { name: 'INVENTORY ADJUSTMENT', path: '/inventory-adjusment', icon: MdSettings },
  { name: 'LOG STOCK MOVE', path: '/log-stock-move', icon: MdSettings },
  { name: 'MASTER', path: '/request-raw-material', icon: MdSettings },
  { name: 'INVENTORY TRANSFER', path: '/inventory-transfer', icon: MdSettings }
]

function Dashboard({ children }: PropsWithChildren) {
  const { pathname } = useLocation()

  return (
    <Flex gap={5}>
      <Flex direction='column' gap={20} w={300} h='100vh' p={8} boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 8px 0px'>
        <Image src={RdsLogo} alt='rds-logo' height='80px' objectFit='contain' />
        <Flex direction='column' gap={5}>
          {menus.map(({ name, path, icon }, idx) => {
            const selected = pathname === path

            return (
              <Button
                display='inline-flex'
                gap={2}
                justifyContent='flex-start'
                background={selected ? 'rgb(0,84,166)' : 'none'}
                color={selected ? 'rgb(255, 255, 255)' : 'none'}
                borderRadius={selected ? 5 : 0}
                fontWeight={selected ? 700 : 400}
                key={idx}
                to={path}
                as={Link}
                w='100%'
                py={4}
                px={15}
                fontSize={14}
              >
                <Icon as={icon} />
                {name}
              </Button>
            )
          })}
        </Flex>
      </Flex>
      <Box p={10} w='100%'>
        {children}
      </Box>
    </Flex>
  )
}

export default Dashboard
