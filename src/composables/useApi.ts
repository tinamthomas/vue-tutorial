import { ref } from 'vue'
import axios from 'axios'

export function useApi(url: string) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetchData = async () => {
    loading.value = true
    try {
      const response = await axios.get(url)
      data.value = response.data
    } catch (err) {
      console.log('Error fetching data', err)
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, fetchData }
}
