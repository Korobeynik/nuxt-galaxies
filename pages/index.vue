<template>
  <div class="wrapper">
    <Aside />
    <main>
      <Header v-model="search" />
      <ul class="galaxies__list">
        <li class="galaxies__item items-titles">
          <div class="galaxies__item__name galaxies__name__sort"
               @click="sortByName()"
          >
            <span>Galaxy Name</span>
            <div class="sort__icon" :class="{'sort' : enableSort}">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z"/>
              </svg>
            </div>
          </div>
          <div class="galaxies__item__constellation">Constellation</div>
          <div class="galaxies__item__originOfName">Origin of name	</div>
        </li>
        <li class="galaxies__item" v-for="galaxy of galaxies" :key="galaxy.id">
          <div class="galaxies__item__name">
            <img :src="galaxy.img" alt="">
            <span>{{galaxy.name}}</span>
          </div>
          <div class="galaxies__item__constellation">{{galaxy.constellation}}</div>
          <div class="galaxies__item__originOfName">{{galaxy.originOfName}}</div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Aside from '@/components/Aside'
  export default {
    async fetch({store}) {
      if (store.getters['galaxies/galaxies'].length === 0) {
        await store.dispatch('galaxies/fetch')
      }
    },
    components: {
      Header,
      Aside
    },
    data: () => ({
      search: ''
    }),
    computed: {
      galaxies() {
        return this.$store.getters['galaxies/galaxies'].filter(galaxy => {
          return galaxy.name.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      enableSort() {
        return this.$store.getters['galaxies/enableSort']
      }
    },
    methods: {
      sortByName() {
        console.log("sort")
        this.$store.dispatch('galaxies/sortGalaxies')
      }
    }
  }
</script>

<style lang="sass">
.wrapper
  display: flex
  background: #F9FAFB
aside
  min-width: 300px
  height: auto
  background: #1a7cdd
main
  padding-left: 60px
  padding-right: 60px
  min-height: 100vh
  width: 100%
.galaxies__list
  list-style: none
  width: 100%
  padding: 0
.galaxies__item
  display: flex
  border: 1px solid #E0E0E0
  justify-content: space-between
  border-bottom: none
  &:hover
    background: rgba(97, 128, 239, 0.2)
  &:last-child
    border-bottom: 1px solid #E0E0E0
  &.items-titles
    border: none
    &:hover
      background: none
    div
      text-transform: uppercase
      padding-left: 0
      color: #263238
    .galaxies__item__name
      font-weight: bold
    .galaxies__item__constellation
      border-left: none
    .galaxies__item__originOfName
      border-left: none
  div
    padding: 20px
  .galaxies__item__name
    width: 25%
    display: flex
    align-items: center
    &.galaxies__name__sort:hover
      cursor: pointer
    img
      width: 30px
      height: 30px
      display: inline-block
      margin-right: 20px
  .galaxies__item__constellation
    width: 20%
    display: flex
    align-items: center
    border-left: 1px solid #E0E0E0
  .galaxies__item__originOfName
    width: 55%
    display: flex
    align-items: center
    border-left: 1px solid #E0E0E0

.sort__icon
  position: relative
  right: -3px
  top: 3px
  transform: rotate(180deg)
  padding: 0px !important
  &.sort
    transform: rotate(0deg)
    top: -2px


@media only screen and (max-width: 600px)
  body, html
    overflow-x: hidden
  aside
    width: 100%
    height: 70px
  .wrapper
    width: 100%
    flex-wrap: wrap
  header
    flex-wrap: wrap
    padding-top: 10px
    align-items: center
    justify-content: center
    margin-bottom: 20px
    h1
      margin-bottom: 20px
    .search__block
      width: 300px

  main
    padding: 15px
  .galaxies__item.items-titles
    display: none
  .galaxies__item
    flex-wrap: wrap
    margin-bottom: 20px
    .galaxies__item__name
      width: 100%
      border-bottom: 1px solid #E0E0E0
    .galaxies__item__constellation
      width: 100%
      border-left: none
      border-bottom: 1px solid #E0E0E0
    .galaxies__item__originOfName
      width: 100%
      border-left: none
      border-bottom: 1px solid #E0E0E0

</style>


