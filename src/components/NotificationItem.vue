<script setup lang="ts">

import { type NotificationEntry } from './../types'
import moment from 'moment';

const props = defineProps<{
  notification: NotificationEntry
}>()

const getDate = (createdAt: Date) => {
  const date = moment(createdAt)
  return date.format('YYYY-MM-DD HH:mm:ss')
}

</script>

<template>
    <tr>
        <td>{{ props.notification.userName }}</td>
        <td class="text-uppercase">{{ props.notification.category }}</td>
        <td class="text-uppercase">{{ props.notification.channel }}</td>
        <td>{{ getDate(props.notification.createdAt) }}</td>
    </tr>
</template>