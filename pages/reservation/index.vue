<template>
  <div>
    <h1 class="text-center">
      Réservation
    </h1>
    <ReservationCard :services="getServices" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ReservationPage',
  computed: {
    ...mapGetters(['getServices'])
  }
}
</script>
