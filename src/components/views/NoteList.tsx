import {
  Button,
  Flex,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react'
import OperationDescription from '../commons/OperationDesc'
import { MdEdit } from 'react-icons/md'
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import SelectInput from '../forms/Select'

const tableData = [
  { product: 'Mattres Pluss EOQ', soID: 'SO/231112/0005', createdAt: '21-11-2023', createdBy: 'admin' },
  { product: 'Mattres Pluss EON', soID: 'SO/231112/0005', createdAt: '21-11-2023', createdBy: 'admin' }
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

function NoteList() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Flex flexDir='column' gap={4}>
      <OperationDescription />
      <Flex justifyContent='flex-end'>
        <Button w='fit-content' alignSelf='flex-end' colorScheme='blue' fontSize={14} onClick={onOpen}>
          <Icon as={FaPlus} mr={2} />
          Add Notes
        </Button>
      </Flex>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>PRODUCT</Th>
              <Th>SO ID</Th>
              <Th>CREATED AT</Th>
              <Th>CREATED BY</Th>
              <Th>ACTION</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map(({ product, soID, createdAt, createdBy }, idx) => (
              <Tr key={idx} cursor='pointer' _hover={{ background: '#718096', color: 'white' }}>
                <Td fontSize={12}>{idx + 1}</Td>
                <Td fontSize={12}>{product}</Td>
                <Td fontSize={12}>{soID}</Td>
                <Td fontSize={12}>{createdAt}</Td>
                <Td fontSize={12}>{createdBy}</Td>
                <Td fontSize={12}>
                  <IconButton colorScheme='blue' mr={2} aria-label='edit-button' icon={<MdEdit />} />
                  <IconButton colorScheme='red' aria-label='delete-button' icon={<FaRegTrashAlt />} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent w={700} maxW='none'>
          <ModalHeader>ADD Notes</ModalHeader>
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
                Notes
              </Text>
              <Textarea placeholder='SPK' />
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

export default NoteList
