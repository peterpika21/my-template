<template>
  <div>
    <p v-if="error.statusCode === 404">頁面不存在</p>
    <p v-else>頁面不存在</p>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    error: {
      type: Object
    }
  }
}
</script>
