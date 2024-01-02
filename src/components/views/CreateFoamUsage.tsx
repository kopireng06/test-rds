import {
  Button,
  Checkbox,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const tabs = [
  { title: 'Summary Kebutuhan Foam', tab: 'summary' },
  { title: 'List Sipot', tab: 'sipot-list' },
  { title: 'List Block', tab: 'block-list' }
] as const

const tableData = [
  { material: 'EON', dimention: '200 x 160 x 20', qty: 5, m3: 3.2, stock: 1 },
  { material: 'EON', dimention: '200 x 160 x 20', qty: 5, m3: 3.2, stock: 1 },
  { material: 'EON', dimention: '200 x 160 x 20', qty: 5, m3: 3.2, stock: 1 },
  { material: 'EON', dimention: '200 x 160 x 20', qty: 5, m3: 3.2, stock: 1 }
]

function CreateFoamUsage() {
  const [activeTab, setActiveTab] = useState<'summary' | 'sipot-list' | 'block-list'>(tabs[0].tab)
  const [selectedData, setSelectedData] = useState<(typeof tableData)[0] | null>(null)

  return (
    <Flex flexDir='column' gap={4} py={6}>
      <Flex gap={3}>
        {tabs.map(({ title, tab }) => (
          <Button
            onClick={() => setActiveTab(tab)}
            key={tab}
            fontSize={14}
            colorScheme={tab === activeTab ? 'green' : undefined}
          >
            {title}
          </Button>
        ))}
      </Flex>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>
                {(() => {
                  if (activeTab === 'summary') return 'MATERIAL'
                  if (activeTab === 'block-list') return 'BLOCK'
                  return 'SIPOT'
                })()}
              </Th>
              <Th>DIMENSI</Th>
              <Th>QTY</Th>
              <Th>M3</Th>
              <Th>STOCK</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map(({ material, dimention, qty, m3, stock }, idx) => (
              <Tr key={idx} cursor='pointer' _hover={{ background: '#718096', color: 'white' }}>
                <Td fontSize={12}>
                  {idx + 1}{' '}
                  {(() => {
                    if (activeTab === 'sipot-list') return <Checkbox ml={3} colorScheme='green' />
                    if (activeTab === 'block-list')
                      return (
                        <IconButton
                          colorScheme='green'
                          ml={3}
                          height={6}
                          w={6}
                          minW='fit-content'
                          aria-label='plus-icon'
                          onClick={() => setSelectedData({ material, dimention, qty, m3, stock })}
                          icon={<FaPlus />}
                        />
                      )
                    return null
                  })()}
                </Td>
                <Td fontSize={12}>{material}</Td>
                <Td fontSize={12}>{dimention}</Td>
                <Td fontSize={12}>{qty}</Td>
                <Td fontSize={12}>{m3}</Td>
                <Td fontSize={12}>{stock}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={!!selectedData} onClose={() => setSelectedData(null)} isCentered>
        <ModalOverlay />
        <ModalContent w={700} maxW='none'>
          <ModalHeader>ADD BALOK EON</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' flexDirection='column' gap={4}>
            <Flex gap={4} alignItems='center'>
              <Text as='span' fontWeight={700}>
                Quantity
              </Text>
              <NumberInput min={0} flexGrow={1}>
                <NumberInputField />
              </NumberInput>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={() => setSelectedData(null)}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default CreateFoamUsage
