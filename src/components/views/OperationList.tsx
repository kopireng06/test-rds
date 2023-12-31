import {
  Box,
  Button,
  Flex,
  NumberInput,
  NumberInputField,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'
import SelectInput from '../forms/Select'
import TablePagination from '../commons/Pagination'
import { Link } from 'react-router-dom'

const defaultOption = { label: 'ALL', value: 'ALL' }

const companyOptions = [defaultOption, { label: 'RDS', value: 'RDS Group' }]

const statusOptions = [
  defaultOption,
  { label: 'DRAFT', value: 'DRAFT' },
  { label: 'ON PROCESS', value: 'ON_PROCESS' },
  { label: 'DONE', value: 'DONE' }
]

const dateOptions = Array.from(Array(10).keys()).map((val) => {
  const date = new Date(`2024-01-${val}`)

  return val
    ? {
        label: date.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }),
        value: date.toISOString()
      }
    : defaultOption
})

const soIdOptions = Array.from(Array(8).keys()).map((val) => {
  const id = `OPR-000${val}`

  return val
    ? {
        label: id,
        value: id
      }
    : defaultOption
})

const tableData = soIdOptions
  .map(({ value }) => ({
    id: value,
    status: 'DRAFT',
    operationDate: new Date('2023-10-05'),
    company: 'VITA'
  }))
  .filter((val) => val.id !== 'ALL')

function OperationList() {
  return (
    <Box>
      <Flex
        direction='column'
        gap={5}
        width='100%'
        my={30}
        boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 8px 0px'
        p={6}
        borderRadius={8}
      >
        <Text fontWeight={700}>Filter</Text>
        <Flex gap={5} w='100%' flexWrap='wrap'>
          <Flex gap={4} align='center' flexGrow={1}>
            <Text whiteSpace='nowrap'>Line</Text>
            <NumberInput defaultValue={15} min={10} max={20} w='100%'>
              <NumberInputField p={4} borderRadius={8} border='2px solid rgb(224, 224, 224)' />
            </NumberInput>
          </Flex>
          <Flex gap={4} align='center' flexGrow={1}>
            <Text whiteSpace='nowrap'>Company</Text>
            <SelectInput options={companyOptions} defaultValue={companyOptions[0]} />
          </Flex>
          <Flex gap={4} align='center' flexGrow={1}>
            <Text whiteSpace='nowrap'>Status</Text>
            <SelectInput options={statusOptions} defaultValue={statusOptions[0]} />
          </Flex>
        </Flex>
        <Flex gap={5} w='100%' flexWrap='wrap'>
          <Flex gap={4} align='center' flexGrow={1}>
            <Text whiteSpace='nowrap'>Operation Date</Text>
            <SelectInput options={dateOptions} defaultValue={dateOptions[0]} />
          </Flex>
          <Flex gap={4} align='center' flexGrow={1}>
            <Text whiteSpace='nowrap'>SO ID</Text>
            <SelectInput options={soIdOptions} defaultValue={soIdOptions[0]} />
          </Flex>
          <Flex gap={4} align='center' flexGrow={1}>
            <Text whiteSpace='nowrap'>Kebutuhan Busa</Text>
            <SelectInput options={[defaultOption]} defaultValue={defaultOption} />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction='column'
        gap={5}
        width='100%'
        my={30}
        boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 8px 0px'
        p={6}
        borderRadius={8}
      >
        <Button
          as={Link}
          to='/operation/create'
          display='flex'
          gap={2}
          alignItems='center'
          fontSize={13}
          colorScheme='blue'
          w='fit-content'
        >
          <FiPlus /> Create New Operation
        </Button>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>OPERATION ID</Th>
                <Th>STATUS</Th>
                <Th>OPERATION DATE</Th>
                <Th>COMPANY</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map(({ id, company, operationDate, status }, idx) => (
                <Tr key={idx} cursor='pointer' _hover={{ background: 'rgb(0,84,166)', color: 'white' }}>
                  <Td fontSize={12}>{idx + 1}</Td>
                  <Td fontSize={12}>
                    <Text textDecoration='underline' as={Link} to={`/operation/${id}/so-information`}>
                      {id}
                    </Text>
                  </Td>
                  <Td fontSize={12}>{status}</Td>
                  <Td fontSize={12}>{operationDate.toLocaleDateString()}</Td>
                  <Td fontSize={12}>{company}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <TablePagination />
      </Flex>
    </Box>
  )
}

export default OperationList
