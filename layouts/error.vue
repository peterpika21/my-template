<template lang="pug">
    div
        p(v-if="error.statusCode === 404") 頁面不存在
        p(v-else) 應用程式異常
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
