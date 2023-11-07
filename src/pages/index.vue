<template>
    <div class="application-container">
        <router-view></router-view>
    </div>

</template>

<script setup>
import {ref,watch} from 'vue'
import {useRoute} from 'vue-router'
const route=useRoute()
let path=ref('')
</script>
