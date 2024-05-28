<template>
      <personal-assistant/>
</template>

<script lang="ts" setup>
import {PersonalAssistant} from './pages'
</script>

<style lang="scss">
@font-face {
  font-family: 'Inter';
  src: url('@/app/assets/fonts/Inter/Inter.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

html{
  scroll-behavior: smooth;
}

*{
  font-family: Inter;
}
</style>