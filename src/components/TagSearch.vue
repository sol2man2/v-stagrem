<template>
  <div>
    <md-input-container>
      <label>태그 검색</label>
      <md-input @input.native="tagName=$event.target.value" @keydown.native.enter="search"></md-input>
    </md-input-container>
      <label>{{tagName}}</label>

      <feed v-for="feed in feeds" :key="feed.id"
        v-if="feed.caption"
        :image-url="feed.images.standard_resolution.url"
        :full-name="feed.caption.from.full_name"
        :username="feed.caption.from.username"
        :contents="feed.caption.text">
      </feed>

  </div>
</template>

<script>
import jsonp from 'jsonp'
import Feed from './Feed'

export default {
  name: 'TagSearch',
  data () {
    return {
      isLoading: true,
      tagName: '',
      feeds: []
    }
  },
  methods: {
    search () {
      if (this.tagName === '') {
        return
      }

      const token = localStorage.getItem('token')
      jsonp(`https://api.instagram.com/v1/tags/${this.tagName}/media/recent?access_token=${token}`, null,
        (_, res) => {
          this.isLoading = false
          this.feeds = res.data
          console.log('searched: ', res.data)
        })
    }
  },
  components: {
    Feed
  }
}
</script>