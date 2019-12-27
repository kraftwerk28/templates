<script>
  let name = 'Hello, world!';
  const click = () => {
    name = name.split('').reverse().join('');
  }
</script>
<style lang="scss">
  :global(body) {
    code {
      user-select: none;
    }
  }
</style>
<code on:click={click}>{name}</code>
