<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'

import NotificationItem from './../components/NotificationItem.vue'
import TheNavbar from '../components/TheNavbar.vue'

const notifications = ref();

axios.get('http://localhost:3000/api/notifications').then((response) => {
  const data = response.data
  if (data.success) {
    notifications.value = data.data
  }
})

</script>

<template>
  <main>
    <TheNavbar />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12">
          <template v-if="notifications && notifications.length > 0">
            <table class="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Category</th>
                  <th>Channel</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <NotificationItem v-for="notification in notifications" :key="notification.id" :notification="notification"  />
              </tbody>
            </table>
          </template>
          <h3 class="text-center" v-else>There are not notification entries</h3>
        </div>
      </div>
    </div>
  </main>
</template>
