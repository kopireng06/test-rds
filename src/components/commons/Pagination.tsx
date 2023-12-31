import { Box, Flex, Text } from '@chakra-ui/react'

const arr = [1, 2, 3, 4, 5]
const defaultActive = 1

function TablePagination() {
  return (
    <Flex justifyContent='space-between'>
      <Text fontSize={12}>Showing 1 to 10 of 57 entries</Text>
      <Flex gap={3}>
        {arr.map((v) => (
          <Box
            key={v}
            as='span'
            cursor='pointer'
            display='inline-flex'
            justifyContent='center'
            alignItems='center'
            background={defaultActive === v ? 'rgb(0,84,166)' : 'initial'}
            color={defaultActive === v ? 'rgb(255,255,255)' : 'initial'}
            w={6}
            h={6}
            borderRadius='50%'
            border={defaultActive === v ? 'none' : '2px solid   rgb(224, 224, 224)'}
            fontSize={12}
          >
            {v}
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default TablePagination
