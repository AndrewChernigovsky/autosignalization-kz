<template>
  <div class="input" :style="{ width: props.width, height: props.height }">
    <label class="input-label">
      <span class="input-title">{{ text || label }}</span>
      <div class="input-container">
        <input class="input-login" :class="validation ? 'valid' : 'invalid'" :type="textType || 'text'"
          :ytype="InputEnums.login" :required="required" :placeholder="placeholder" />
        <div class="input-checkbox"></div>
      </div>
    </label>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { InputEnums, type InputEnumKeys } from '~/enums/InputEnums'

const props = defineProps({
  required: {
    type: Boolean,
  },
  ytype: {
    type: String as () => InputEnumKeys,
    default: InputEnums.login,
  },
  label: {
    type: String,
  },
  text: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: 'auto',
  },
})

const validation = ref<boolean>(false);

const labels = {
  [InputEnums.login]: 'Ваш логин1',
  [InputEnums.password]: 'Ваш пароль',
  [InputEnums.email]: 'Ваш  email',
  [InputEnums.phone]: 'Ваш телефон',
  [InputEnums.textarea]: 'Ваш комментарий',
}

const inputType = {
  [InputEnums.login]: 'text',
  [InputEnums.password]: 'password',
  [InputEnums.email]: 'email',
  [InputEnums.phone]: 'phone',
  [InputEnums.textarea]: 'text',
}

const label = computed(() => {
  return labels[props.ytype] || 'Ваш логин'
})
const textType = computed(() => {
  return inputType[props.ytype] || 'Ваш логин'
})
</script>
<style lang="scss" scoped>
.input-label {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: inherit;
}

.input-title {
  color: $white;
  font-family: $pimary-font;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: left;
  width: inherit;
}

.input-container {
  position: relative;
  width: inherit;
}

.input-checkbox {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 0px;
  transform: translate(-50%, -50%);
  border-radius: 3px;
}

.input-login:valid+.input-checkbox {
  mask-image: url('@/assets/icons/aprove.svg');
  background-color: $green-3eff00;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: cover;
}

.input-login:invalid+.input-checkbox {
  mask-image: url('@/assets/icons/aprove.svg');
  background-color: $red-ff0000-99;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: cover;

}

.input-login {
  width: inherit;
  height: 33px;
  background-color: $black-2f2f2f;
  border: none;
  outline: none;
  border: 6px solid $black;
  border-radius: 5px;
  font-family: $pimary-font;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
  padding: 0;
  padding-left: 8px;
  padding-right: 27px;
  color: $white-05;


  &:valid {
    box-shadow: 0 0 4px $green-3eff00;
    border: 2px solid $black;
  }

  &:invalid {
    box-shadow: 0 0 4px $red-ff0000-99;
    border: 2px solid $black;
  }
}
</style>
