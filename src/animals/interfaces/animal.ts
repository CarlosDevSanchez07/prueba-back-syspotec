export type Status = 'ACTIVE' | 'INACTIVE'

export interface Animal {
    id: string
    description: string
    breed: string
    status: Status
}

export interface AnimalAllWithPagination{
    data: Animal[]
    page: number
    take: number
    nextPage: number
    prevPage: number
    lastPage: number
}