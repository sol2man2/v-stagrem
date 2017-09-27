<template>
  <div>
    <md-button class="md-raised md-primary" href="https://www.instagram.com/oauth/authorize/?client_id=d90083b5277d464d8ebc08fcba6f1279&redirect_uri=http://localhost:8080&response_type=token&scope=public_content">
      인스타그램 로그인
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>