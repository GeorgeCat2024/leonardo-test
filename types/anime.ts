export type AnimesQueryReturn = {
  data: {
    Page: { pageInfo: PageInfo, media: Anime[] },
  },
}


export type PageInfo = {
  currentPage: number
  hasNextPage: number
}

export type Anime = {
  id: number;
  coverImage: {
    large: string;
  };
  averageScore?: number;
  description: string;
  genres: string[];
  title: {
    userPreferred: string;
  }
}