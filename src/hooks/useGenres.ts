import useData from './useData'

export interface Genre {
	id: string
	name: string
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres
