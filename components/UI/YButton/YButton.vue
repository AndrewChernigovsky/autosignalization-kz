<template>
  <button
    :class="[buttonClass, customClass]"
    :type="typeButton ? typeButton : 'button'"
    v-if="btn"
    :ytype="ytype"
    :disabled="states.disabled"
    @click="handleClick"
  >
    <slot />
  </button>
  <a
    :href="path"
    v-if="btn === false && link === false"
    :ytype="props.ytype"
    :class="[buttonClass, customClass, 'link']"
  >
    <slot />
  </a>
  <NuxtLink
    :to="path"
    v-if="link && btn === false"
    :ytype="props.ytype"
    :class="[buttonClass, customClass, 'link']"
  >
    <slot />
  </NuxtLink>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { ButtonsEnum } from '~/enums/ButtonsEnum'

const props = defineProps({
  path: {
    type: String,
  },
  btn: {
    type: Boolean,
    default: true,
  },
  typeButton: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
  ytype: {
    type: String,
    default: ButtonsEnum.primary,
  },
  disabled: {
    type: Boolean,
  },
  customClass: {
    type: String,
    default: '',
  },
  link: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits()

function handleClick(event: MouseEvent) {
  emit('click', event)
}

const buttonClass = computed(() => {
  return ['base', props.ytype || '', { disabled: props.disabled }]
})

const states = computed(() => {
  return {
    disabled: props.disabled ? true : false,
  }
})
</script>
<style lang="scss" scoped>
.base {
  pointer-events: auto;
}

.link {
  text-decoration: none;
}

.primary {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  box-sizing: border-box;
  border: 1px solid $white-c9c9c9;
  border-radius: 5px;
  background: linear-gradient(180deg, $black-280000-1, $red-ff0000-99);
  color: $white;
  font-family: $primary-font;
  font-size: 16px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, $black-2f2f2f, $red-790505-99);
    border-color: none;
  }

  &:focus {
    border-color: $white-c9c9c9;
    background: linear-gradient(180deg, $black-2f2f2f, $red-790505-99);
  }

  &:active {
    background: linear-gradient(180deg, $red-ff0909-1, $black-000000-99);
  }

  &:disabled {
    background: linear-gradient(180deg, $black-ff090900-6, $black-000000-99);
  }
}

.secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $black-2f2f2f;
  max-width: 100%;
  border: 1px solid $white;
  border-radius: 5px;
  color: $white;
  font-family: $primary-font;
  font-size: 16px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, $black-170f0f, $black-2a2424-100);
  }

  &:focus {
    border: 1px solid $white;

    background: linear-gradient(180deg, $black-170f0f, $black-2a2424-100);
  }

  &:active {
    border: 1px solid $white;

    background: linear-gradient(180deg, $black-161313-1, $black-454040-100);
  }
}

.tap-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, $black-10172d, $blue-0035c6 100%);
  max-width: 100%;
  border: 1px solid $white;
  border-radius: 5px;
  color: $white;
  font-family: $primary-font;
  font-size: 16px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, $black-070101-1, $blue-1a0579-99);
  }

  &:focus {
    border: 1px solid $white;

    background: linear-gradient(180deg, $black-070101-1, $blue-1a0579-99);
  }

  &:active {
    border: 1px solid $white;
    background: linear-gradient(180deg, $blue-1008fb, $black-000000-99);
  }
}

.simple {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  max-width: 100%;
  border: 1px solid $white;
  border-radius: 5px;
  color: $white;
  font-family: $secondary-font;
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
  line-height: 14px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, $black-170f0f-6, $black-2a2424-100);
  }

  &:focus {
    border: 1px solid $white;
    background: linear-gradient(180deg, $black-170f0f-6, $black-2a2424-100);
  }

  &:active {
    border: 1px solid $white;
    background: linear-gradient(180deg, $black-161313-6, $black-454040-100);
  }
}

.dark {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $black;
  max-width: 100%;
  border: 1px solid $white;
  border-radius: 5px;
  color: $white;
  font-family: $secondary-font;
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
  line-height: 14px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: $white;
    color: $black;
    border: 1px solid $black;
  }

  &:focus {
    background: $white;
    color: $black;
    border: 1px solid $black;
  }

  &:active {
    background: $white;
    color: $black;
    border: 1px solid $black;
    opacity: 0.8;
  }
}

@media screen and (min-width: $desktop-min) {
  .primary,
  .secondary,
  .dark,
  .tap-button,
  .simple {
    font-size: 36px;
    line-height: 36px;
    padding: 18px 60px;
  }
}

.disabled {
  opacity: 0.5;
}
</style>
