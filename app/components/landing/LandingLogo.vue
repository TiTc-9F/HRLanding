<script setup lang="ts">
// Orca 標誌。dark：黑字版（淺色底）；light：白字版（深色底）；mark：只有虎鯨圖形。
// 圖檔由品牌素材的 logo_black.png 去背整理而來（白字版從黑字版轉出，避開原白字檔的雜點）；
// 拿到設計師的 SVG 後，換掉 app/assets/brand/ 裡的檔案即可。
import logoDark from '~/assets/brand/orca-logo-dark.png'
import logoLight from '~/assets/brand/orca-logo-light.png'
import mark from '~/assets/brand/orca-mark.png'

const props = withDefaults(defineProps<{ variant?: 'dark' | 'light' | 'mark' }>(), { variant: 'dark' })
const { site } = useAppConfig()

const src = computed(() => ({ dark: logoDark, light: logoLight, mark })[props.variant])
</script>

<template>
  <img
    :src="src"
    :alt="site.productName"
    decoding="async"
    class="block w-auto"
  >
</template>
