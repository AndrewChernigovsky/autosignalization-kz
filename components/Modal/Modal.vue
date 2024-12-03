<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-wrapper">
      <YButton @click="closeModal"></YButton>
      <h3>Заявка на звонок</h3>
      <div class="contacts">
        <label class="input">
          <input type="text" placeholder="ФИО" required />
        </label>
        <label class="input">
          <input type="text" placeholder="Телефон*" required />
        </label>
        <textarea placeholder="Комментарий" />
      </div>
      <YButton>Отправить заявку</YButton>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
})

const isVisible = ref(props.show)

function closeModal() {
  isVisible.value = !isVisible.value
}

watch(
  () => props.show,
  (newShow) => {
    isVisible.value = newShow
  },
)
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 300px;
  min-height: 300px;
  background-color: $white;
  padding: 10px;
  display: grid;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  position: relative;
  min-height: inherit;
  padding: 20px;
  width: inherit;

  &:deep button:first-of-type {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}

.contacts {
  display: grid;
  justify-content: stretch;
}
</style>
