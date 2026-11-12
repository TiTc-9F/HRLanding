<script setup lang="ts">
// 示意用的虛構公司標誌（圖形 + 字樣），只在 site.mockProof 開啟時出現。
// 公司名稱都是編的，不是真實品牌；有真實客戶授權後，換成對方提供的 logo 檔。
const props = defineProps<{ name: string }>()

type Glyph = { paths: string[], fill?: boolean, circle?: { r: number, fill?: boolean } }
type Mark = { glyph: Glyph, text: string, font: string }

const marks: Record<string, Mark> = {
  'Harborline': { glyph: { paths: ['M3 14c3-4 6-4 9 0s6 4 9 0', 'M3 9c3-4 6-4 9 0s6 4 9 0'] }, text: 'Harborline', font: 'font-display font-semibold tracking-tight' },
  'Kitewave': { glyph: { paths: ['M12 3l7 9-7 9-7-9z'], fill: true }, text: 'kitewave', font: 'font-sans font-extrabold tracking-tighter' },
  'Mapleton Health': { glyph: { paths: ['M12 7v10M7 12h10'], circle: { r: 9 } }, text: 'Mapleton Health', font: 'font-serif font-semibold' },
  'Lumenfold': { glyph: { paths: ['M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2'], circle: { r: 4, fill: true } }, text: 'Lumenfold', font: 'font-display font-medium tracking-tight' },
  'Orbitra': { glyph: { paths: ['M4 15c-1.5-3 2.5-7.5 8-9.5s9.5-.5 8 2.5-5.5 7.5-11 9.5S5.5 18 4 15Z'], circle: { r: 2, fill: true } }, text: 'ORBITRA', font: 'font-sans font-bold tracking-[0.2em] text-[0.85em]' },
  'Atlasbay': { glyph: { paths: ['M12 4l9 16H3z'], fill: true }, text: 'atlasbay', font: 'font-mono font-semibold' },
  'Pinecrest Studio': { glyph: { paths: ['M12 3l6 8h-3l5 7H4l5-7H6z'], fill: true }, text: 'Pinecrest', font: 'font-serif italic font-semibold' },
  'Sora Logistics': { glyph: { paths: ['M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z'], fill: true }, text: 'SORA', font: 'font-display font-bold tracking-[0.15em]' },
  'Fernwood Labs': { glyph: { paths: ['M12 2l9 5v10l-9 5-9-5V7z'] }, text: 'Fernwood Labs', font: 'font-sans font-semibold tracking-tight' },
}

const mark = computed(() => marks[props.name] ?? { glyph: { paths: [] }, text: props.name, font: 'font-semibold' })
</script>

<template>
  <span
    class="inline-flex items-center gap-2 whitespace-nowrap"
    :aria-label="name"
    role="img"
  >
    <svg
      viewBox="0 0 24 24"
      class="size-[1.15em] shrink-0"
      :fill="mark.glyph.fill ? 'currentColor' : 'none'"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle
        v-if="mark.glyph.circle"
        cx="12"
        cy="12"
        :r="mark.glyph.circle.r"
        :fill="mark.glyph.circle.fill ? 'currentColor' : 'none'"
      />
      <path
        v-for="d in mark.glyph.paths"
        :key="d"
        :d="d"
      />
    </svg>
    <span
      :class="mark.font"
      aria-hidden="true"
    >{{ mark.text }}</span>
  </span>
</template>
