<template>
  <div class="logo-container">
    <a class="logo-link link" href="#">
      <img
        class="logo-img"
        src="@/assets/images/logo.png"
        alt="Логотип Auto security"
        width="122"
        height="84"
      />
      <p class="logo-text m-0">
        AUTO <br /><span class="logo-text-special">SECURITY</span>
      </p>
    </a>
  </div>
</template>
<script scoped setup></script>

<style lang="scss">
.logo-container {
  grid-column: 1/ -1;
  justify-self: center;

  @media screen and (min-width: 768px) {
    grid-column: 1 / 5;
    justify-self: stretch;
    grid-row: 1 / 2;
  }

  @media screen and (min-width: 1440px) {
    justify-self: center;
    grid-column: 1 / 4;
    padding-top: 20px;
  }
}

.logo-link {
  display: flex;
  column-gap: 11px;
}

.logo-text {
  font-family: 'DINPRO', 'Arial', sans-serif;
  font-size: 34px;
  line-height: 42px;
  font-weight: 700;
  color: #fff;

  & .logo-text-special {
    color: #d10000;
  }
}
</style>
