import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'
import { Anime } from '@/types/anime'

type InformationModalProps = {
  anime?: Anime
  open: boolean
  onclose: () => void
}

export function InformationModal({
  anime,
  open,
  onclose,
}: InformationModalProps) {
  if (!anime) return

  return (
    <Modal isOpen={open} onClose={onclose}>
      <ModalOverlay />
      <ModalContent margin={4}>
        <ModalHeader>{anime.title.userPreferred}</ModalHeader>
        <ModalBody>
          <Stack gap={6}>
            <Stack direction="row">
              <Text as="b">Score:</Text>
              <Text as="b" color="tomato">
                {anime.averageScore ? `${anime.averageScore}/100` : 'unknown'}
              </Text>
            </Stack>
            <Stack>
              <Text as="b">Description:</Text>
              {/* // trust on source data, otherwise use better way handle description that includes html tag */}
              <Text dangerouslySetInnerHTML={{ __html: anime.description }} />
            </Stack>
            <Stack direction="column" gap={2}>
              <Text as="b">Genres:</Text>
              <Stack direction="row" gap={2} wrap="wrap">
                {anime.genres.map((genre) => (
                  <Button
                    key={genre}
                    id={genre}
                    colorScheme="orange"
                    borderRadius="50vw"
                    size="xs"
                  >
                    {genre}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onclose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
