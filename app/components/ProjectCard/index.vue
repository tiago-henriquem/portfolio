<script setup lang="ts">
const Card = defineAsyncComponent(() => import('@/components/ui/card/Card.vue'));
const CardContent = defineAsyncComponent(() => import('@/components/ui/card/CardContent.vue'));
const CardDescription = defineAsyncComponent(() => import('@/components/ui/card/CardDescription.vue'));
const CardFooter = defineAsyncComponent(() => import('@/components/ui/card/CardFooter.vue'));
const CardHeader = defineAsyncComponent(() => import('@/components/ui/card/CardHeader.vue'));
const CardTitle = defineAsyncComponent(() => import('@/components/ui/card/CardTitle.vue'));

const Button = defineAsyncComponent(() => import("@/components/ui/button/Button.vue"));

import { ArrowRight, Shapes } from "lucide-vue-next";
import type { Project } from "@/components/ProjectCard/types";
defineProps<{ project: Project }>();
</script>

<template>
  <Card class="w-full max-w-lg shadow-none gap-0 pt-0 pb-2">
    <CardHeader class="py-4 px-3 flex flex-row items-center gap-3 font-semibold">
      <div class="h-8 w-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
        <Shapes class="h-5 w-5" />
      </div>
      <CardTitle>{{ project.title }}</CardTitle>
    </CardHeader>
    <CardContent class="mt-1 text-[15px] text-muted-foreground px-5">
      <CardDescription v-if="project.description">{{project.description}}</CardDescription>
      <div class="mt-5 w-full aspect-video bg-muted rounded-xl" />
    </CardContent>
    <CardFooter>
      <Button variant="secondary" class="w-full" :as="'a'" :href="project.projectData.url" :target="project.projectData.redirectType ?? '_self'">
        Visualizar projeto <ArrowRight />
      </Button>
    </CardFooter>
  </Card>
</template>
