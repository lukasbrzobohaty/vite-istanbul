<script>
export default {
  name: 'HelloWorld2',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button data-cy="hello-world-2-button" type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld2.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
