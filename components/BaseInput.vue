<template>
  <textarea
    v-if="type === 'textarea'"
    v-model="inputValue"
    :id="id || elementId"
    class="base-input base-input--textarea"
    :disabled="disabled"
    @change="handleChange(($event.target as HTMLInputElement).value)"
  />
  <input
    v-else-if="mask"
    :id="id || elementId"
    ref="input"
    class="base-input"
    type="text"
    :disabled="disabled"
    @blur="handleChange(imaskInstance?.unmaskedValue || '')"
  >
  <input
    v-else
    v-model="inputValue"
    :id="id || elementId"
    class="base-input"
    :type="type"
    :disabled="disabled"
    @change="handleChange(($event.target as HTMLInputElement).value)"
  >
</template>

<script lang="ts" setup>
import IMask, { type InputMask } from 'imask';

const elementId = useId();

const emit = defineEmits(['change', 'update:modelValue']);
const props = withDefaults(defineProps<{
  modelValue?: string | number;
  disabled?: boolean;
  id?: string;
  type?: 'text' | 'email' | 'password' | 'textarea';
  mask?: string | RegExp | ((...args: unknown[]) => unknown);
  maskOptions?: Record<string, unknown>;
  modelModifiers?: { lazy?: boolean };
}>(), {
  modelValue: '',
  disabled: false,
  id: '',
  type: 'text',
  mask: '',
  maskOptions: () => ({}),
  modelModifiers: () => ({}),
});

const inputValue = computed({
  get: () => props.modelValue,
  set(value: string | number) {
    if (!props.modelModifiers.lazy) {
      emit('update:modelValue', value);
    }
  },
});

function handleChange(value: string) {
  if (props.modelModifiers.lazy) {
    emit('update:modelValue', value);
  }
}

// IMask setup
const input = ref<HTMLInputElement | null>(null);
let imaskInstance: InputMask<{ mask: string }> | null = null;

function setupIMask() {
  if (!props.mask || !input.value) return;

  imaskInstance = IMask(input.value, {
    mask: props.mask as string,
    ...props.maskOptions,
  });

  imaskInstance.value = props.modelValue as string;

  if (!props.modelModifiers.lazy) {
    imaskInstance.on('accept', () => {
      emit('update:modelValue', imaskInstance?.unmaskedValue);
    });
  }
}

onMounted(setupIMask);

// Update IMask value when prop modelValue changes
function resetImaskValue() {
  if (imaskInstance) {
    imaskInstance.unmaskedValue = props.modelValue as string;
  }
}

watch(() => props.modelValue, resetImaskValue);

// Update IMask options when mask changes
watch(() => props.mask, () => {
  if (!imaskInstance) return;
  imaskInstance.updateOptions({ mask: props.mask as string });
  resetImaskValue();
});
</script>

<style scoped>
@reference '@/assets/css/main.css';

.base-input {
  @apply w-full min-h-[3.75rem] px-1.5 bg-white text-dark rounded-full
    border border-neutral-2 transition-colors hover:border-neutral-3 placeholder:text-neutral-3
  ;

  &.base-input--textarea {
    @apply py-1.5 min-h-10 rounded-2xl;
  }
}
</style>
