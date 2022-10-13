<template>
  <div>
    <div class="p-4 mt-4">
      <div class="container">
        <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
          <!-- for ici -->
          <div
            v-for="parcour in parcours"
            :key="parcour._id"
            class="flex md:contents"
          >
            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 border border-1 border-pink-400 bg-pink-400 rounded-xl pointer-events-none" />
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3  border border-1 border-pink-400 bg-pink-800 rounded-xl shadow text-center">
                <i class="fas fa-check-circle text-white" />
              </div>
            </div>
            <div class="border border-1 border-pink-400 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 class="font-semibold text-lg mb-1">
                {{ parcour.name }}
              </h3>
              <p class="leading-tight text-justify w-full">
                {{ parcour.date }}
              </p>
            </div>
          </div>
          <!-- fin for ici -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParcoursMe',
  props: {
    parcours: {
      default: null,
      type: Array
    }
  }
}
</script>
