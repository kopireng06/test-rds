import { Button, Flex, Icon, Text } from '@chakra-ui/react'
import { BsPencilFill } from 'react-icons/bs'
import { Link, useLocation, useParams } from 'react-router-dom'

function OperationDescription() {
  const params = useParams()
  const location = useLocation()

  return (
    <>
      <Flex
        direction='column'
        gap={5}
        width='100%'
        my={30}
        boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 8px 0px'
        p={6}
        borderRadius={8}
      >
        <Flex gap={4}>
          <Text as='span' fontSize={14} fontWeight={700} minW={200}>
            Operation ID
          </Text>
          <Text as='span' fontSize={14}>
            {params?.operationID}
          </Text>
        </Flex>
        <Flex gap={4}>
          <Text as='span' fontSize={14} fontWeight={700} minW={200}>
            Operation Date
          </Text>
          <Text as='span' fontSize={14}>
            21 November 2023
          </Text>
        </Flex>
        <Flex gap={4}>
          <Text as='span' fontSize={14} fontWeight={700} minW={200}>
            Finish Operation Date
          </Text>
          <Text as='span' fontSize={14}>
            -
          </Text>
        </Flex>
        <Flex gap={4}>
          <Text as='span' fontSize={14} fontWeight={700} minW={200}>
            Status
          </Text>
          <Text as='span' fontSize={14}>
            Draft
          </Text>
        </Flex>
        <Flex gap={4}>
          <Text as='span' fontSize={14} fontWeight={700} minW={200}>
            PRIORITY
          </Text>
          <Text as='span' fontSize={14}>
            YES
          </Text>
        </Flex>
        <Button w='fit-content' alignSelf='flex-end' colorScheme='blue' fontSize={14}>
          <Icon as={BsPencilFill} mr={2} />
          Edit
        </Button>
      </Flex>
      <Flex gap={3}>
        <Button
          fontSize={14}
          as={Link}
          to={`/operation/${params?.operationID}/so-information`}
          colorScheme={location.pathname.includes('so-information') ? 'green' : undefined}
        >
          Informasi SO
        </Button>
        <Button
          fontSize={14}
          colorScheme={location.pathname.includes('materials') ? 'green' : undefined}
          as={Link}
          to={`/operation/${params?.operationID}/materials`}
        >
          Material
        </Button>
        <Button
          fontSize={14}
          colorScheme={location.pathname.includes('notes') ? 'green' : undefined}
          as={Link}
          to={`/operation/${params?.operationID}/notes`}
        >
          Catatan
        </Button>
        <Button
          fontSize={14}
          colorScheme={location.pathname.includes('foam-usages') ? 'green' : undefined}
          as={Link}
          to={`/operation/${params?.operationID}/foam-usages`}
        >
          Penggunaan Foam
        </Button>
      </Flex>
    </>
  )
}

export default OperationDescription
