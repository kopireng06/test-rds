import { Button, Flex, Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import OperationDescription from '../commons/OperationDesc'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const tableData = [
  { product: 'BSA001', uom: 'UOM 001', demand: 1, m3: 8000 },
  { product: 'BSA002', uom: 'UOM 001', demand: 1, m3: 8000 },
  { product: 'BSA003', uom: 'UOM 001', demand: 1, m3: 8000 }
]

function FoamUsageList() {
  return (
    <Flex flexDir='column' gap={4}>
      <OperationDescription />
      <Button as={Link} w='fit-content' alignSelf='flex-end' colorScheme='blue' fontSize={14}>
        <Icon as={FaPlus} mr={2} />
        Add Foam
      </Button>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>PRODUCT</Th>
              <Th>UOM</Th>
              <Th>DEMAND</Th>
              <Th>M3</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map(({ product, uom, demand, m3 }, idx) => (
              <Tr key={idx} cursor='pointer' _hover={{ background: 'rgb(0,84,166)', color: 'white' }}>
                <Td fontSize={12}>{idx + 1}</Td>
                <Td fontSize={12}>{product}</Td>
                <Td fontSize={12}>{uom}</Td>
                <Td fontSize={12}>{demand}</Td>
                <Td fontSize={12}>{m3}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}

export default FoamUsageList
