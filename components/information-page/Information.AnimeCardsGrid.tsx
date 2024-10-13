'use client'
import { useState } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { AnimeCard } from './Information.AnimeCard'
import { InformationModal } from './Information.Modal'

type AnimeCardProps = {
  animes: any
}

export function AnimeCardsGrid({ animes }: AnimeCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedAnime, setSelectedAnime] = useState()

  const handleCardClicked = (anime) => {
    setSelectedAnime(anime)
    onOpen()
  }

  return (
    <>
      <div className="flex gap-4 md:gap-8 flex-wrap p-8 justify-between">
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            onClick={() => handleCardClicked(anime)}
          />
        ))}
      </div>
      <InformationModal
        key={animes.id}
        anime={selectedAnime}
        open={isOpen}
        onclose={onClose}
      />
    </>
  )
}
