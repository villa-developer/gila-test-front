<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue';

const router = useRouter()
const name = ref()
name.value = localStorage.getItem('name');
const logout = () => {
    localStorage.removeItem('fakeToken')
    localStorage.removeItem('categories')
    localStorage.removeItem('name')
    name.value = ''
    router.push({name: 'login'})
}

</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">Gila Software</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" v-if="name">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/notifications" class="nav-link">Notifications</router-link>
                    </li>
                </ul>
                <span class="me-2 text-body-tertiary">{{ name }}</span>
                <button class="btn btn-link nav-link" @click="logout">Logout</button>
            </div>
        </div>
    </nav>
</template>