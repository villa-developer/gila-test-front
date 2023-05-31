<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'

const category = ref("")
const message = ref("")
const categories = localStorage.getItem('categories')?.split(',')

const resetForm = () => {
    category.value = '';
    message.value = '';
}

const onSubmit = () => {
    if (!category.value || !message.value) {
        alert("You should specified the category and message")
        return
    }

    const data = {
        category: category.value,
        message: message.value
    }
    
    axios.post("http://localhost:3000/api/notifications", data).then(response => {
        const data = response.data;
        if (data.sucess) {
            alert(data.message);
        } 

        resetForm()
        alert(data.message);

    }).catch(error => {
        const errorResponse = error.response.data
        let message = error.message;
        if (errorResponse.message) {
            message = errorResponse.message
        }
        alert(message)
    })
}
</script>

<template>
    <form action="" method="post" class="channel-form" @submit.prevent="onSubmit">
        <div class="mb-3">
            <h3>Send Notifications</h3>
        </div>
        <div class="mb-3">
            <select v-model="category" class="form-select" placeholder="Default select example">
                <option value="" selected>Select Category</option>
                <option v-for="item in categories" :value="item" :key="item">{{ item.toUpperCase() }}</option>
                <option value="fake">Fake</option>
            </select>
        </div>
        <div class="mb-3">
            <textarea v-model="message" class="form-control" rows="5" placeholder="Hi, ....."></textarea>
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-outline-primary w-100">Send</button>
        </div>
    </form>
</template>