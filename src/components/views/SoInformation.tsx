import { Button, Flex, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { BsPencilFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const soInformations = [
  { id: 'SO/231112/0005', spkCount: 1, company: 'TSJ' },
  { id: 'SO/231112/0006', spkCount: 2, company: 'TSJ' }
]

function SoInformation() {
  const params = useParams()

  return (
    <Flex flexDir='column' gap={4}>
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
        <Button fontSize={14} colorScheme='green'>
          Informasi SO
        </Button>
        <Button fontSize={14}>Material</Button>
        <Button fontSize={14}>Catatan</Button>
        <Button fontSize={14}>Penggunaan Foam</Button>
      </Flex>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>SO ID</Th>
              <Th>TOTAL SPK</Th>
              <Th>COMPANY</Th>
            </Tr>
          </Thead>
          <Tbody>
            {soInformations.map(({ id, company, spkCount }, idx) => (
              <Tr key={idx} cursor='pointer' _hover={{ background: 'rgb(0,84,166)', color: 'white' }}>
                <Td fontSize={12}>{idx + 1}</Td>
                <Td fontSize={12}>
                  <Text textDecoration='underline' as={Link} to={`/operation/${id}`}>
                    {id}
                  </Text>
                </Td>
                <Td fontSize={12}>{spkCount}</Td>
                <Td fontSize={12}>{company}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}

export default SoInformation
