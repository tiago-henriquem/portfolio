<template>
	<div class="bg-background text-foreground">
		<Header />

		<main class="pt-16">
			<section
				class="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 py-20 overflow-hidden"
			>
				<GridPattern />
				<div class="relative z-10 max-w-4xl mx-auto">
					<h1
						class="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#e46a69] to-[#4a0487]"
					>
						Transformando ideias em sites performáticos e que geram resultados
					</h1>
					<h5 class="mt-6">
						Olá, visitante!
						<img
							src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f44b.gif"
							alt="Mão acenando"
							class="inline-block w-6 h-6"
						/>
						<br />
						Minhas redes sociais estão logo abaixo:
					</h5>
					<!-- <p class="mt-2 max-w-[700px] mx-auto text-foreground/80 md:text-xl">
						Sou o Tiago Martins, desenvolvedor Front-end Web com especialidade
						em
						<span class="text-[#4FC08D] font-mono">Vue.js</span>
						<span> e </span>
						<span class="text-[#00DC82] font-mono">Nuxt</span> (CSR/SSR) e atuo
						em projetos de Checkout e landing pages white label otimizados.
					</p> -->
					<!-- <p class="mt-2 max-w-[700px] mx-auto text-foreground/80 md:text-xl">
						<span class="mt-4">Sólida experiência com </span>
						<span class="text-primary font-mono">TypeScript</span>,
						<span class="text-primary font-mono">Tailwind</span>, APIs
						<span class="text-primary font-mono">REST</span> e arquitetura
						<span class="text-primary font-mono">BFF</span> para criar
						aplicações modernas, rápidas e estáveis.
					</p> -->
					<div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
						<NuxtLink
							to="https://www.linkedin.com/in/tiago-henrique-pereira-martins-62a8871b5/"
						>
							<Button
								size="lg"
								variant="outline"
								class="w-full sm:w-auto border-[#0072b1]"
							>
								<Linkedin color="#0072b1" />
								LinkedIn
							</Button>
						</NuxtLink>
						<NuxtLink to="https://github.com/tiago-henriquem">
							<Button
								size="lg"
								variant="outline"
								class="w-full sm:w-auto border-[#15191E]"
							>
								<Github color="#15191E" />
								GitHub
							</Button>
						</NuxtLink>
						<NuxtLink>
							<Button
								size="lg"
								variant="outline"
								class="w-full sm:w-auto border-gray-400"
							>
								<Download color="var(--color-gray-400)" />
								Baixar CV
							</Button>
						</NuxtLink>
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
import { Linkedin, Github, Download } from "lucide-vue-next";
</script>
