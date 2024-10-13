import Image from 'next/image'
import { Card, CardBody, Heading, Stack } from '@chakra-ui/react'

type AnimeCardProps = {
  anime: any
  onClick: () => void
}

export function AnimeCard({ anime, onClick }: AnimeCardProps) {
  return (
    <Card maxW="md" onClick={onClick} className="cursor-pointer">
      <CardBody>
        <Stack spacing={4}>
          <Image
            src={anime.coverImage.large}
            alt={anime.title.userPreferred}
            width={200}
            height={400}
          />
          <Heading size="xs" className="max-w-[200px]">
            {anime.title.userPreferred}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  )
}
