<template>
  <div class="email-container">
    <ul class="email-list list-style-none">
      <li class="email-item">
        <a class="email-link link" href="email:autosecurity.kz@mail.ru"
          >autosecurity.kz@mail.ru</a
        >
      </li>
    </ul>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.email-container {
  grid-column: 1/ 4;
  padding-right: 16px;
}

.email-list {
  display: flex;
  flex-direction: column;
}

.email-link {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '';
    display: block;
    mask-image: url('@/assets/icons/message-icon.svg');
    width: 20px;
    height: 20px;
    mask-repeat: no-repeat;
    mask-size: 20px;
    mask-position: center;
    background-color: #ff0000;
  }
}
</style>
