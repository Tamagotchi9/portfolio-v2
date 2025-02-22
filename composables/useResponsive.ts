import { ref, computed, onMounted, onUnmounted } from "vue";
import { breakpoints } from "~/constants/breakpoints";

export function useResponsive () {
    const screenWidth = ref(window?.innerWidth)
    const screenHeight = ref(window?.innerHeight)

    const xsDevice = computed(() => screenWidth.value < breakpoints.sm)
    const mdDevice = computed(() => screenHeight.value >= breakpoints.sm && screenWidth.value < breakpoints.md)
    const lgDevice = computed(() => screenHeight.value >= breakpoints.md && screenWidth.value < breakpoints.lg)
    const xlDevice = computed(() => screenHeight.value >= breakpoints.xl)

    const updateScreenSize = () => {
        screenWidth.value = window.innerWidth
        screenHeight.value = window.innerHeight
    };

    onMounted(() => {
        if (typeof window !== "undefined") {
            updateScreenSize();
            window.addEventListener("resize", updateScreenSize);
        }
    });

    onUnmounted(() => {
        if (typeof window !== "undefined") {
            window.removeEventListener("resize", updateScreenSize);
        }
    });

    return { xsDevice: xsDevice.value, mdDevice: mdDevice.value, lgDevice: lgDevice.value, xlDevice: xlDevice.value }
}