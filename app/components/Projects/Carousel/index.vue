<script setup lang="ts">
const Carousel = defineAsyncComponent(() => import("@/components/ui/carousel/Carousel.vue"));
const CarouselContent = defineAsyncComponent(() => import("@/components/ui/carousel/CarouselContent.vue"));
const CarouselItem = defineAsyncComponent(() => import("@/components/ui/carousel/CarouselItem.vue"));
const CarouselNext = defineAsyncComponent(() => import("@/components/ui/carousel/CarouselNext.vue"));
const CarouselPrevious = defineAsyncComponent(() => import("@/components/ui/carousel/CarouselPrevious.vue"));

import type { Project } from "@/components/ProjectCard/types";
interface Props {
  projectsList?: Project[];
}

defineProps<Props>();

const api = ref<any>(null);
const current = ref(0);

onMounted(() => {
  if (!api.value) return;

  current.value = api.value.selectedScrollSnap() + 1;

  api.value.on("select", () => {
    current.value = api.value.selectedScrollSnap() + 1;
  });
});
</script>

<template>
  <Carousel
    class="w-full m-0"
    :opts="{
      align: 'center'
    }"
  >
    <CarouselContent>
      <CarouselItem
        v-for="(project, index) in projectsList"
        :key="index"
        class="pl-1 basis-1/2"
      >
        <LazyProjectCard
          :project
          :class="'p-1' + {
            'transition-transform duration-500': true,
            'scale-[0.6]': index !== current - 1,
          }"
        />
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>