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

  @media screen and (min-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    padding-right: 0;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-left: 26px;
    padding-bottom: 20px;
  }
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

  @media screen and (min-width: 1440px) {
    &::after {
      width: 30px;
      height: 30px;
      mask-size: 30px;
    }
  }
}
</style>
