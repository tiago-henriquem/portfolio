<template>
	<div class="bg-background text-foreground dark">
		<Header />

		<main class="pt-16">
			<section
				class="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 py-20 overflow-hidden"
			>
				<GridPattern />
				<div class="relative z-10 max-w-4xl mx-auto">
					<h1
						class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
					>
						Desenvolvedor Web Focado em Performance e Escalabilidade
					</h1>
					<p class="mt-6 max-w-[700px] mx-auto text-foreground/80 md:text-xl">
						Sólida experiência em
						<span class="text-[#4FC08D] font-mono">Vue.js</span> e
						<span class="text-[#00DC82] font-mono">Nuxt 3</span> (CSR/SSR), com
						foco em otimização. Especializado em
						<span class="text-primary font-mono">TypeScript</span>,
						<span class="text-primary font-mono">Tailwind</span>, APIs
						<span class="text-primary font-mono">REST</span> e arquitetura
						<span class="text-primary font-mono">BFF</span> para criar
						aplicações modernas, rápidas e estáveis.
					</p>
					<div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
						<NuxtLink to="#projetos">
							<Button size="lg" class="w-full sm:w-auto">Ver Projetos</Button>
						</NuxtLink>
						<Button size="lg" variant="outline" class="w-full sm:w-auto">
							Baixar CV <ArrowDown class="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			</section>

			<LazyTechStack />

			<section id="projetos" class="py-20 md:py-32 bg-secondary">
				<div class="container mx-auto max-w-screen-xl px-4 md:px-6">
					<h2
						class="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12"
					>
						Projetos em Destaque
					</h2>
					<div class="text-center text-foreground/80">
						<p>(Em breve: Projetos do GitHub aparecerão aqui)</p>
					</div>
				</div>
			</section>

			<section id="sobre" class="py-20 md:py-32">
				<div class="container mx-auto max-w-screen-xl px-4 md:px-6">
					<h2
						class="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12"
					>
						Sobre Mim
					</h2>
					<div class="max-w-3xl mx-auto grid gap-8 md:grid-cols-3 items-center">
						<div class="md:col-span-1 flex justify-center md:order-last">
							<div
								class="w-48 h-48 bg-secondary rounded-full flex items-center justify-center"
							>
								<span class="text-foreground/50">Sua foto aqui</span>
							</div>
						</div>
						<div
							class="md:col-span-2 text-left text-foreground/80 space-y-4 md:order-first"
						>
							<p>
								Desde cedo tive contato com computadores e fui aprendendo a
								mexer conforme a necessidade surgia. Minha paixão por jogos me
								levou a ter o primeiro contato com programação no
								<i>MTA, uma modificação do jogo GTA San Andreas para PC</i>,
								onde comecei a ter uma noção do que era possível criar.
							</p>
							<p>
								Em 2020, ingressei na faculdade de Sistemas de Informação e me
								apeguei rapidamente pelo desenvolvimento web. Hoje, aplico essa
								paixão e conhecimento como líder técnico na empresa onde
								trabalho, sempre buscando construir soluções eficientes e
								escaláveis.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>

		<LazyFooter />
	</div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { ArrowDown } from "lucide-vue-next";
</script>
