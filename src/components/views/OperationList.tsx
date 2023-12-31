import {
  Box,
  Flex,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import SelectInput from '../forms/Select'

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

function OperationList() {
  return (
    <Box>
      <Flex justify='space-between' align='center'>
        <Heading as='h1' fontSize={18}>
          OPERASI
        </Heading>
        <Input w={350} placeholder='search here' p={5} borderRadius={8} border='2px solid rgb(224, 224, 224)' />
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
        width='100%'
        my={30}
        boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 8px 0px'
        p={6}
        borderRadius={8}
      >
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  )
}

export default OperationList
