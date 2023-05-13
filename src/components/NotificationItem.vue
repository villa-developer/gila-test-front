<script setup lang="ts">

import { type NotificationEntry } from './../types'

const props = defineProps<{
  notification: NotificationEntry
}>()

</script>

<template>
    <tr>
        <td>{{ props.notification.id }}</td>
        <td>{{ props.notification.userName }}</td>
        <td class="text-uppercase">{{ props.notification.category }}</td>
        <td class="text-uppercase">{{ props.notification.channel }}</td>
        <td>{{ props.notification.created_at }}</td>
    </tr>
</template>