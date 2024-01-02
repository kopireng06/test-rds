import { Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import OperationDescription from '../commons/OperationDesc'

const soInformations = [
  { id: 'SO/231112/0005', spkCount: 1, company: 'TSJ' },
  { id: 'SO/231112/0006', spkCount: 2, company: 'TSJ' }
]

function SoInformation() {
  const { pathname } = useLocation()

  return (
    <Flex flexDir='column' gap={4}>
      <OperationDescription />
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
              <Tr key={idx} cursor='pointer' _hover={{ background: '#718096', color: 'white' }}>
                <Td fontSize={12}>{idx + 1}</Td>
                <Td fontSize={12}>
                  <Text textDecoration='underline' as={Link} to={`${pathname}/${id.replaceAll('/', '-')}`}>
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
