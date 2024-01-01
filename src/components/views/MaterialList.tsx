import {
  Button,
  Flex,
  Icon,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react'
import OperationDescription from '../commons/OperationDesc'
import SelectInput from '../forms/Select'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'

const tableData = [
  {
    product: 'Mattres Pluss EOQ',
    productGroup: 'BSA',
    material: 'EOQ20010020',
    soID: 'SO/231112/0005',
    demand: 2,
    company: 'TSJ'
  },
  {
    product: 'Mattres Pluss EON',
    productGroup: 'BSA',
    material: 'EON20010030',
    soID: 'SO/231112/0005',
    demand: 4,
    company: 'TSJ'
  }
]

const soIdOptions = Array.from(Array(8).keys()).map((val) => {
  const id = `OPR-000${val}`

  return {
    label: id,
    value: id
  }
})

const productOptions = [
  { label: 'Car', value: 'car' },
  { label: 'Laptop', value: 'laptop' }
]

const materialOptions = [
  {
    label: 'Mattres Pluss EOQ',
    value: 'mattress-pluss-eoq'
  },
  {
    label: 'Mattres Pluss EON',
    value: 'mattress-pluss-eon'
  }
]

const filterByOptions = [
  {
    label: 'SO',
    value: 'so'
  },
  { label: 'Product', value: 'product' }
]

function MaterialList() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [value, setValue] = useState<'TSJ' | 'INNOAC' | string>()

  return (
    <Flex flexDir='column' gap={4}>
      <OperationDescription />
      <Flex py={5} justifyContent='space-between' alignItems='center'>
        <Flex gap={4}>
          <Flex gap={4} alignItems='center' w={300}>
            <Text as='span' fontWeight={700} whiteSpace='nowrap' fontSize={14}>
              Filter By
            </Text>
            <SelectInput options={filterByOptions} />
          </Flex>
          <Flex gap={4} alignItems='center'>
            <Text as='span' fontWeight={700} whiteSpace='nowrap' fontSize={14}>
              Search
            </Text>
            <Input placeholder='search here' />
          </Flex>
        </Flex>
        <Button w='fit-content' alignSelf='flex-end' colorScheme='blue' fontSize={14} onClick={onOpen}>
          <Icon as={FaPlus} mr={2} />
          Add New Material
        </Button>
      </Flex>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>PRODUCT</Th>
              <Th>PRODUCT GROUP</Th>
              <Th>MATERIAL</Th>
              <Th>SO ID</Th>
              <Th>DEMAND</Th>
              <Th>COMPANY</Th>
              <Th>ACTION</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[...tableData, ...tableData, ...tableData].map(
              ({ product, productGroup, material, soID, demand, company }, idx) => (
                <Tr key={idx} cursor='pointer' _hover={{ background: 'rgb(0,84,166)', color: 'white' }}>
                  <Td fontSize={12}>{idx + 1}</Td>
                  <Td fontSize={12}>{product}</Td>
                  <Td fontSize={12}>{productGroup}</Td>
                  <Td fontSize={12} fontWeight={700}>
                    {material}
                  </Td>
                  <Td fontSize={12}>{soID}</Td>
                  <Td fontSize={12}>{demand}</Td>
                  <Td fontSize={12}>{company}</Td>
                  <Td fontSize={12}>
                    <IconButton colorScheme='blue' mr={2} aria-label='edit-button' icon={<MdEdit />} />
                    <IconButton colorScheme='red' aria-label='delete-button' icon={<FaRegTrashAlt />} />
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent w={700} maxW='none'>
          <ModalHeader>ADD NEW MATERIAL</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' flexDirection='column' gap={4}>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700} minW={200}>
                SO ID
              </Text>
              <SelectInput options={soIdOptions} />
            </Flex>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700} minW={200}>
                Product
              </Text>
              <SelectInput options={productOptions} />
            </Flex>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700} minW={200}>
                Material
              </Text>
              <SelectInput options={materialOptions} />
            </Flex>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700} minW={200}>
                Demand
              </Text>
              <Text>100</Text>
            </Flex>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700} minW={200}>
                Company
              </Text>
              <Text>RDS</Text>
            </Flex>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700} minW={200}>
                Source
              </Text>
              <Input placeholder='WH Source' />
            </Flex>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700} minW={200}>
                Foam Source
              </Text>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row'>
                  <Radio value='TSJ'>TSJ</Radio>
                  <Radio value='INNOAC'>INNOAC</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default MaterialList
