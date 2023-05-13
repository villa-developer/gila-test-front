<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'

const submited = ref(false);
const email = ref("");
const password = ref("");
const router = useRouter()

function doLogin() {
    submited.value = true;
    const request = {
        email: email.value,
        password: password.value
    }

    axios.post('http://localhost:3000/api/auth/signin', request).then(response => {
        const data = response.data;
        localStorage.setItem('fakeToken', data.token)
        localStorage.setItem('categories', data.categories)
        localStorage.setItem('name', data.name)
        submited.value = false;
        router.push({name: 'notifications'})
    }).catch(error => {
        const errorResponse = error.response.data
        let message = error.message;
        submited.value = false;
        if (errorResponse.message) {
            message = errorResponse.message
        }
        alert(message)
    })
}

</script>

<template>
    <form action="" method="post" class="channel-form" @submit.prevent="doLogin()">
        <div class="mb-3 text-center">
            <img src="@/assets/images/gila.png" alt="Gila Software">
        </div>
        <div class="mb-3">
            <label for="email">Email</label>
            <input v-model="email" type="text" class="form-control" name="email" id="email" :disabled="submited" required>
        </div>
        <div class="mb-3">
            <label for="password">Password</label>
            <input v-model="password" type="password" class="form-control" name="password" id="password" :disabled="submited" required>
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-outline-primary w-100" :disabled="submited">Login</button>
        </div>
    </form>
</template>