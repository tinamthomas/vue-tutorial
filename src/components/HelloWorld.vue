<script setup lang="ts">
import { usePokemon } from '@/composables/usePokemon'

const { data, fetchData } = usePokemon()
fetchData()
defineProps<{
  msg: string
}>()

const headers = [{ text: 'Name', value: 'name' }]
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Welcome to the world of Pokemon</v-card-title>
          <v-card-text> Gotta catch em all </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div class="m-0 w-1/2 m-auto">
    <v-data-table :headers="headers" :items="data ? data.results : []"></v-data-table>
  </div>
</template>
<style scoped>
.table-container {
  max-width: 600px; /* Adjust the width as needed */
  margin: 0 auto; /* Center the table */
}
</style>
