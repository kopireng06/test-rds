import {
  Button,
  Flex,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import SelectInput from '../forms/Select'

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

function CreateOperation() {
  const { isOpen, onClose, onOpen } = useDisclosure()

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
            OPR-0021
          </Text>
        </Flex>
        <Flex gap={4} alignItems='center'>
          <Text as='span' fontSize={14} fontWeight={700} minW={200}>
            Operation Date
          </Text>
          <Input w='fit-content' type='date' />
        </Flex>
        <Flex gap={4} alignItems='center'>
          <Text as='span' fontSize={14} fontWeight={700} minW={200}>
            Finish Operation Date
          </Text>
          <Input w='fit-content' type='date' />
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
          <Icon as={FaPlus} mr={2} />
          Save
        </Button>
      </Flex>
      <Flex gap={3}>
        <Button fontSize={14} colorScheme='green'>
          Informasi SO
        </Button>
        <Button fontSize={14}>Material</Button>
        <Button fontSize={14}>Catatan</Button>
        <Button w='fit-content' alignSelf='flex-end' colorScheme='blue' fontSize={14} onClick={onOpen}>
          <Icon as={FaPlus} mr={2} />
          Add SO ID
        </Button>
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
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={700} maxW='none'>
          <ModalHeader>ADD SO ID</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' flexDirection='column' gap={4}>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700} minW={200}>
                Operation ID
              </Text>
              <SelectInput options={soIdOptions} />
              <Button colorScheme='blue' onClick={onClose} flexShrink={0} fontSize={14}>
                <Icon as={FaPlus} mr={2} /> ADD SO ROW
              </Button>
            </Flex>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700} minW={200}>
                Product
              </Text>
              <SelectInput options={soIdOptions} />
            </Flex>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700} minW={200}>
                Dimention
              </Text>
              <Text>3x4</Text>
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

export default CreateOperation
