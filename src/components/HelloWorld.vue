<script setup lang="ts">
defineProps<{
  msg: string
}>()

const headers = [
  { text: 'Name', value: 'name' },
  { text: 'Age', value: 'age' },
]

const items = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
]
</script>

<template>
  <div class="greetings">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Why hello there</v-card-title>
            <v-card-text> Hello world! </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="m-0 w-1/2 m-auto">
      <v-data-table :headers="headers" :items="items"></v-data-table>
    </div>
  </div>
</template>
<style scoped>
.table-container {
  max-width: 600px; /* Adjust the width as needed */
  margin: 0 auto; /* Center the table */
}
</style>
