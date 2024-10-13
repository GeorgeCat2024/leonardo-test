'use client'
import { useState } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { Anime } from '@/types/anime'

import { AnimeCard } from './Information.AnimeCard'
import { InformationModal } from './Information.Modal'

type AnimeCardProps = {
  animes: Anime[]
}

export function AnimeCardsGrid({ animes }: AnimeCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedAnime, setSelectedAnime] = useState<Anime | undefined>()

  const handleCardClicked = (anime: Anime) => {
    setSelectedAnime(anime)
    onOpen()
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2 p-4 md:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            onClick={() => handleCardClicked(anime)}
          />
        ))}
      </div>
      <InformationModal
        key={selectedAnime?.id}
        anime={selectedAnime}
        open={isOpen}
        onclose={onClose}
      />
    </>
  )
}
