<script setup lang="ts">
import NotificaionForm from '../components/NotificationForm.vue';
import TheNavbar from '../components/TheNavbar.vue'
</script>

<template>
  <main>
    <TheNavbar />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-5">
          <NotificaionForm></NotificaionForm>
        </div>
      </div>
    </div>
  </main>
</template>
