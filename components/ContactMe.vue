<template>
  <div>
    <!-- contact form I implemented with getform -->
    <form action="https://getform.io/f/ae1658ac-b595-4be1-9013-ebf2a296b6b1" method="POST" enctype="multipart/form-data">
      <div class="flex flex-col flex-wrap gap-5 items-center mt-5">
        <div v-for="input in inputs" :key="input._id" class="flex">
          <p class="pr-1">
            {{ input.title }}:
          </p>
          <input
            :key="input._name"
            class="text-black last:h-8 last:w-60 bg-gray-300 rounded-md p-1 text-lg"
            :type="input.type"
            :name="input.name"
            :minlength="input.minlength"
            required
          >
        </div>
        <div class="flex flex-col items-center">
          <p>
            Fichier(s) :
          </p>
          <input title="Fichier" type="file" name="files[]" multiple class="text-black last:h-8 last:w-60 bg-gray-300 rounded-md p-1 text-sm">
          <i>5 Mo max</i>
        </div>
        <p>Message :</p>
        <textarea
          class="text-black w-3/5 bg-gray-300 rounded-md p-1 text-lg"
          type="message"
          name="message"
          minlength="10"
          cols="7"
          rows="7"
          required
        />
        <div class="g-recaptcha" data-sitekey="6LcZYVkjAAAAAGQMCYXMgHXmqikh4gC8K6LxUqAk" />
      </div>
      <div class="text-center">
        <i>NB: Si le captcha ne s'affiche pas, désactivez vos bloqueurs de pub et relancez la page</i>
        <br>
        <button type="submit" class="p-1 rounded-md bg-cyan-400 text-black mt-4 w-24 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
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
