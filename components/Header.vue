<template>
  <header class="header">
    <h1 class="header__title">Named galaxies</h1>
    <form class="search">
      <div class="search__block">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
        </svg>
        <input type="text" placeholder="Search galaxies"
           :value="value"
           @input="$emit('input', $event.target.value)"
        >
      </div>
    </form>
  </header>
</template>

<script>
  export default {
    props: ['value']
  };
</script>

<style lang="sass">
header
  padding-top: 70px
  display: flex
  justify-content: space-between
  align-items: center

.search__block
  position: relative
  width: 270px
  height: 36px
  display: flex
  align-items: center
  svg
    position: absolute
    left: 15px
    z-index: 2
  input
    position: absolute
    width: 100%
    height: 100%
    padding-left: 45px
    color: #909597
    border: 1px solid #E0E0E0
    border-radius: 4px
</style>


