<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'

const route = useRoute()
const router = useRouter()
const breed = route.params.name
const imageLoaded = ref(false)

const { data: imageUrl, isLoading, isError } = useQuery({
  queryKey: ['breed-image', breed],
  queryFn: async () => {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    const json = await res.json()
    return json.message
  }
})
</script>

<template>
  <div>
    <n-button text @click="router.push('/')">← Back to breeds</n-button>

    <h1 class="breed-title">{{ breed }}</h1>

    <div v-if="isLoading" class="loader-wrap">
      <n-spin size="large" />
    </div>

    <n-alert v-else-if="isError" type="error" title="Something went wrong">
      Could not load an image for this breed. Please try again.
    </n-alert>

    <div v-else class="image-container">
      <div class="image-wrap">
        <img
          :src="imageUrl"
          :alt="breed"
          class="breed-image"
          :class="{ visible: imageLoaded }"
          @load="imageLoaded = true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.breed-title {
  font-size: 2.2rem;
  font-weight: 700;
  text-transform: capitalize;
  margin: 1rem 0 1.5rem;
  color: #1a1a1a;
}

.loader-wrap {
  display: flex;
  justify-content: center;
  padding: 5rem;
}

.image-container {
  max-width: 600px;
}

.image-wrap {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  background-color: #e0e0e0;
  min-height: 300px;
}

.breed-image {
  width: 100%;
  height: auto;
  display: block;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.breed-image.visible {
  opacity: 1;
}
</style>
