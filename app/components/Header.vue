<template>
	<header
		class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
	>
		<div
			class="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-6"
		>
			<NuxtLink to="#" class="flex items-center gap-2">
				<Code class="h-6 w-6 text-primary" />
				<span class="font-bold text-lg">CodeCraft</span>
			</NuxtLink>
			<nav class="hidden md:flex items-center gap-6 text-sm font-medium">
				<NuxtLink
					v-for="link in navLinks"
					:key="link.href"
					:to="link.href"
					class="text-foreground/60 transition-colors hover:text-foreground"
				>
					{{ link.label }}
				</NuxtLink>
			</nav>
			<div class="md:hidden">
				<Button @click="toggleMenu" variant="ghost" size="icon">
					<component :is="isOpen ? X : Menu" class="h-6 w-6" />
				</Button>
			</div>
		</div>
		<div v-if="isOpen" class="md:hidden bg-background">
			<nav class="flex flex-col items-center gap-4 py-4">
				<NuxtLink
					v-for="link in navLinks"
					:key="link.href"
					:to="link.href"
					@click="toggleMenu"
					class="text-foreground/80 hover:text-foreground"
				>
					{{ link.label }}
				</NuxtLink>
			</nav>
		</div>
	</header>
</template>

<script setup lang="ts">
import { Code, Menu, X } from "lucide-vue-next";
const Button = defineAsyncComponent(
	() => import("@/components/ui/button/Button.vue")
);

const isOpen = ref(false);

const toggleMenu = () => {
	isOpen.value = !isOpen.value;
};

const navLinks = [
	{ href: "#projetos", label: "Projetos" },
	{ href: "#sobre", label: "Sobre" },
	{ href: "#contato", label: "Contato" },
];
</script>
