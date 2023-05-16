export type Status = 'ACTIVE' | 'INACTIVE'

export interface Breed {
    id: string
    description: string
    status: Status
}

export interface BreedAllWithPagination{
    data: Breed[]
    page: number
    take: number
    nextPage: number
    prevPage: number
    lastPage: number
}