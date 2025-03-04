<template>
  <div class="space-y-2 w-full">
    <label :for="id" class="block text-sm font-medium text-gray-700 mt-2">{{ label }}</label>
    <div class="mt-2">
      <div class="relative">
        <input
          v-model="inputValue"
          :type="type"
          :name="name"
          :id="id"
          :placeholder="placeholder"
          :class="[
            'w-full py-2 px-3 border rounded-md text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500',
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          ]"
          @blur="validateInput"
        />
        <p v-if="error" class="text-xs text-red-500 mt-1">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Digite aqui'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    validationRules: {
      type: Array,
      default: () => []
    }
  });

  const inputValue = ref('');
  const error = ref(false);
  const errorMessage = ref('');

  const validateInput = () => {
    error.value = false;
    errorMessage.value = '';

    for (let rule of props.validationRules) {
      const { valid, message } = rule(inputValue.value);
      if (!valid) {
        error.value = true;
        errorMessage.value = message;
        break;
      }
    }
  };
</script>
