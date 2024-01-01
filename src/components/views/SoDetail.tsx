import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'

const tableData = [
  { id: 'SPK/231112/0006 ', product: 'MATTRESPLUS EOQ 20016030', demand: 1, company: 'TSJ' },
  { id: 'SPK/231112/0007 ', product: 'Sliced Foam EOM 20010020', demand: 2, company: 'TSJ' }
]

function SoDetail() {
  return (
    <TableContainer py={6}>
      <Text as='h1' py={6} textAlign='center' fontWeight={700}>
        Informasi SO Detail
      </Text>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>SPK ID</Th>
            <Th>PRODUCT</Th>
            <Th>DEMAND</Th>
            <Th>COMPANY</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map(({ id, product, demand, company }, idx) => (
            <Tr key={idx} cursor='pointer' _hover={{ background: 'rgb(0,84,166)', color: 'white' }}>
              <Td fontSize={12}>{idx + 1}</Td>
              <Td fontSize={12}>
                <Text>{id}</Text>
              </Td>
              <Td fontSize={12}>{product}</Td>
              <Td fontSize={12}>{demand}</Td>
              <Td fontSize={12}>{company}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default SoDetail
