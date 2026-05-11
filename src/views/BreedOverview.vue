<script setup>
import { useQuery } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'

const router = useRouter()

const { data: breeds, isLoading, isError } = useQuery({
  queryKey: ['breeds'],
  queryFn: async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const json = await res.json()
    return Object.keys(json.message)
  }
})

function goToBreed(breed) {
  router.push(`/breed/${breed}`)
}
</script>

<template>
  <div>
    <h1 class="page-title">All Dog Breeds</h1>

    <div v-if="isLoading" class="loader-wrap">
      <n-spin size="large" />
    </div>

    <n-alert v-else-if="isError" type="error" title="Something went wrong">
      Could not load the breed list. Please try again later.
    </n-alert>

    <div v-else class="breeds-grid">
      <n-card
        v-for="breed in breeds"
        :key="breed"
        hoverable
        class="breed-card"
        @click="goToBreed(breed)"
      >
        <div class="breed-content">
          <span class="breed-name">{{ breed }}</span>
        </div>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

.loader-wrap {
  display: flex;
  justify-content: center;
  padding: 5rem;
}

.breeds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.breed-card {
  cursor: pointer;
  transition: transform 0.2s ease !important;
  border-left: 3px solid #2d8a4e !important;
}

.breed-card:hover {
  transform: translateY(-5px);
}

.breed-content {
  padding: 0.3rem 0;
  text-align: center;
}

.breed-name {
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: capitalize;
  color: #2d8a4e;
}
</style>
