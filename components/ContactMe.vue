<template>
  <div>
    <form action="https://getform.io/f/ae1658ac-b595-4be1-9013-ebf2a296b6b1" method="POST">
      <!-- boucle pour les champs du mail -->
      <div class="flex flex-col flex-wrap gap-5 items-center">
        <div v-for="input in inputs" :key="input._id">
          <p>
            {{ input.title }}:
          </p>
          <input
            :key="input._name"
            class="text-black last:h-8"
            :type="input.type"
            :name="input.name"
            :minlength="input.minlength"
          >
        </div>
        <p>Message :</p>
        <textarea
          class="text-black w-3/5"
          type="message"
          name="message"
          minlength="10"
          cols="7"
          rows="7"
        />
      </div>
      <div class="text-center">
        <button type="submit" class="p-1 rounded-md bg-cyan-400 text-black mt-4 w-24">
          Envoyer
        </button>
      </div>
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
          title: 'Nom ',
          minlength: '2'
        },
        {
          name: 'email',
          type: 'email',
          title: 'Email ',
          minlength: '5'
        },
        {
          name: 'objet',
          type: 'text',
          title: 'Objet ',
          minlength: '1'
        }
      ]
    }
  }
}
</script>
</template></template></template></template></template></template></template></template></template></template></template></template></template></template></template></template></template></template></template></template></template></template>
