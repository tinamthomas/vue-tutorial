import { useApi } from '@/composables/useApi'

export function usePokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const { data, fetchData } = useApi(url)

  return { data, fetchData }
}
