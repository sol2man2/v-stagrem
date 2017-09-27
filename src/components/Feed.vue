<template>

    <md-card>
      <md-card-media>
        <img :src="imageUrl">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{fullName}}</div>
        <div class="md-subhead">{{username}}</div>
      </md-card-header>

      <md-card-content>
        {{contents}}
      </md-card-content>
    </md-card>

</template>

<script>
import jsonp from 'jsonp'

export default {
  name: 'Feed',
  props: [
    'imageUrl', 'fullName', 'username', 'contents'
  ],
  data () {
    return {
      isLoading: true,
      feeds: []
    }
  },
  mounted () {
    const token = localStorage.getItem('token')
    jsonp(`https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`, null,
    (_, res) => {
      this.isLoading = false
      this.feeds = res.data
      console.log('feeds: ', res.data)
    })
  }
}
</script>