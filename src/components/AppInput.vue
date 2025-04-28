<template>
  <div
    class="app-input"
    :data-disabled="disabled"
    :data-valid="showValidState"
    :data-invalid="showInvalidState"
  >
    <label
      v-if="label || $slots.label"
      class="block mb-0.5 font-semibold"
      :for="elementId"
    >
      {{ label }}
      <slot name="label" />
    </label>
    <BaseInput
      v-bind="$attrs"
      :id="elementId"
      ref="input"
      v-model="inputValue"
      class="app-input__input"
      :disabled="disabled"
      :aria-label="label ? null : ariaLabel"
      :model-modifiers="modelModifiers"
      :maxlength="maxCharacters || null"
    />
    <small
      v-if="validationMessage"
      class="text-[0.75rem] mt-[0.25rem]"
      v-text="validationMessage"
    />
    <div class="text-dark-400 text-[0.75rem] mt-[0.25rem] empty:hidden">
      <slot name="support-text">
        <span v-if="typeof inputValue === 'string' && maxCharacters > 0">
          Characters remaining: {{ maxCharacters - inputValue.length }}
        </span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Ref, computed, useId } from 'vue';
import BaseInput from './BaseInput.vue';

const elementId = useId();

const props = withDefaults(defineProps<{
  modelModifiers?: Record<string, boolean>;
  label?: string;
  ariaLabel?: string;
  disabled?: boolean;
  successMessage?: string;
  errorMessage?: string | Ref<string>;
  dirty?: boolean;
  maxCharacters?: number;
}>(), {
  modelModifiers: () => ({}),
  label: '',
  ariaLabel: '',
  disabled: false,
  successMessage: '',
  errorMessage: '',
  dirty: false,
  maxCharacters: 0,
});

const inputValue = defineModel<string | number>('model-value', { default: '' });

// Validation state
const showValidState = computed(() => (
  props.dirty
  && !props.errorMessage
  && !!props.successMessage
));
const showInvalidState = computed(() => (props.dirty && !!props.errorMessage));
const validationMessage = computed(() => {
  if (showInvalidState.value) return props.errorMessage;
  if (showValidState.value) return props.successMessage;
  return '';
});
</script>

<!-- <style lang="scss" scoped>
.app-input {
  --success-color: #{$color--fds-green};
  --invalid-color: #{$color--fds-red};
  &[data-disabled="true"] {
    --label-color: var(--disabled-label-color, #{$color--fds-neutral-600});
  }
  &[data-valid="true"] {
    --validation-message-text-color: var(--success-color);
    .app-input__input:not(:focus) {
      --border-width: 0.125rem;
      --border-color: var(--success-color);
    }
  }
  &[data-invalid="true"] {
    --validation-message-text-color: var(--invalid-color);
    .app-input__input:not(:focus) {
      --border-width: 0.125rem;
      --border-color: var(--invalid-color);
    }
  }
  &__validation-message {
    color: var(--validation-message-text-color);
  }
}
</style> -->
