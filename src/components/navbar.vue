<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
    name: 'Navbar',
    setup() {
        const isNavbarVisible = ref(false)
        const isMobileMenuOpen = ref(false)
        const activeSection = ref('#home')
        const isScrolling = ref(false)

        const navItems = ref([
            { name: 'About', href: '#about' },
            { name: 'Experiences', href: '#experiences' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' }
        ])

        // Enhanced smooth scrolling with easing
        const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        }

        const smoothScrollTo = (targetPosition, duration = 1000) => {
            const startPosition = window.pageYOffset
            const distance = targetPosition - startPosition
            const startTime = performance.now()

            const animateScroll = (currentTime) => {
                const timeElapsed = currentTime - startTime
                const progress = Math.min(timeElapsed / duration, 1)
                const easedProgress = easeInOutCubic(progress)

                window.scrollTo(0, startPosition + distance * easedProgress)

                if (progress < 1) {
                    requestAnimationFrame(animateScroll)
                } else {
                    isScrolling.value = false
                }
            }

            isScrolling.value = true
            requestAnimationFrame(animateScroll)
        }

        const handleScroll = () => {
            isNavbarVisible.value = window.scrollY > 100

            // Don't update active section while programmatically scrolling
            if (isScrolling.value) return

            // Update active section based on scroll position
            const sections = navItems.value.map(item => item.href)
            const navbarHeight = 80 // Account for navbar height

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.querySelector(sections[i])
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= navbarHeight) {
                        activeSection.value = sections[i]
                        break
                    }
                }
            }
        }

        const toggleMobileMenu = () => {
            isMobileMenuOpen.value = !isMobileMenuOpen.value
        }

        const handleMobileNavClick = (href) => {
            isMobileMenuOpen.value = false
            smoothScroll(href)
        }

        const smoothScroll = (href) => {
            const element = document.querySelector(href)
            if (element) {
                const navbarHeight = 80 // Height of fixed navbar
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - navbarHeight

                // Use custom smooth scroll with longer duration for better feel
                smoothScrollTo(offsetPosition, 1200)

                // Update active section immediately for better UX
                activeSection.value = href
            }
        }

        const handleResize = () => {
            if (window.innerWidth > 768) {
                isMobileMenuOpen.value = false
            }
        }

        // Throttle scroll events for better performance
        let scrollTimeout
        const throttledHandleScroll = () => {
            if (scrollTimeout) return
            scrollTimeout = setTimeout(() => {
                handleScroll()
                scrollTimeout = null
            }, 16) // ~60fps
        }

        onMounted(() => {
            window.addEventListener('scroll', throttledHandleScroll, { passive: true })
            window.addEventListener('resize', handleResize)

            // Set initial active section
            handleScroll()
        })

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', throttledHandleScroll)
            window.removeEventListener('resize', handleResize)
            if (scrollTimeout) {
                clearTimeout(scrollTimeout)
            }
        })

        return {
            isNavbarVisible,
            isMobileMenuOpen,
            activeSection,
            navItems,
            toggleMobileMenu,
            handleMobileNavClick,
            smoothScroll
        }
    }
}
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-out"
        :class="isNavbarVisible ? 'translate-y-0' : '-translate-y-full'">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
            <a href="#home" @click.prevent="smoothScroll('#home')" class=" text-xl font-bold text-white relative overflow-hidden group transition-all duration-300
                hover:scale-105">
                <span class="relative z-10">Shivam</span>
                <div
                    class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                </div>
            </a>

            <ul class="hidden md:flex items-center space-x-1">
                <li v-for="(item, index) in navItems" :key="item.name" class="relative">
                    <a :href="item.href" @click.prevent="smoothScroll(item.href)"
                        class="text-lg font-medium text-white/70 relative overflow-hidden group transition-all duration-300 hover:text-blue-300 px-4 py-2 block"
                        :class="{ 'text-blue-300': activeSection === item.href }">
                        <span class="relative z-10">{{ item.name }}</span>
                        <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform transition-transform duration-300"
                            :class="activeSection === item.href ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'">
                        </div>
                    </a>
                </li>
            </ul>

            <button @click="toggleMobileMenu"
                class="md:hidden p-2 text-white rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                <div class="w-6 h-6 flex flex-col justify-center items-center">
                    <span class="block w-5 h-0.5 bg-white transform transition-all duration-300"
                        :class="isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'"></span>
                    <span class="block w-5 h-0.5 bg-white transition-opacity duration-300"
                        :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
                    <span class="block w-5 h-0.5 bg-white transform transition-all duration-300"
                        :class="isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'"></span>
                </div>
            </button>
        </div>

        <div class="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-white/10 transition-all duration-300 ease-out"
            :class="isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'">
            <ul class="py-4">
                <li v-for="(item, index) in navItems" :key="item.name">
                    <a :href="item.href" @click.prevent="handleMobileNavClick(item.href)"
                        class="block px-6 py-3 text-white/70 font-medium transition-all duration-300 hover:text-blue-300 hover:pl-8 relative group"
                        :class="{ 'text-blue-300 pl-8': activeSection === item.href }">
                        <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 transform transition-transform duration-300 origin-top"
                            :class="activeSection === item.href ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'">
                        </div>
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
@keyframes slideDown {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}

.slide-down {
    animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.1);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #2563eb, #7c3aed);
}
</style>