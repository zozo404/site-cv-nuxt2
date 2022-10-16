<template>
  <div>
    <form action="https://getform.io/f/ae1658ac-b595-4be1-9013-ebf2a296b6b1" method="POST">
      <!-- boucle pour les champs du mail -->
      <div v-for="input in inputs" :key="input._id">
        <p>
          {{ input.title }}:
        </p>
        <input :key="input._name" class="text-black" :type="input.type" :name="input.name">
      </div>
      <button type="submit" class="text-gray-50">
        Envoyer
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data () {
    return {
      inputs: [
        {
          name: 'name',
          type: 'text',
          title: 'Nom '
        },
        {
          name: 'email',
          type: 'email',
          title: 'Email '
        },
        {
          name: 'objet',
          type: 'text',
          title: 'Objet '
        },
        {
          name: 'message',
          type: 'text',
          title: 'Message '
        }
      ]
    }
  }
}
</script>
