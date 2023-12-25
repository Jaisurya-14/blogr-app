<template>
  <div class="header-con">
    <a class="logo" href="/">
      <img class="logo__img" alt="logo" src="../assets/images/logo.svg" />
    </a>
    <div class="header__nav-menu">
      <button class="btn" :class="{ hidden: toggleOpened }" @click="toggleNav">
        <img src="../assets/images/icon-hamburger.svg" alt="hamburger-icon" />
      </button>
      <button class="btn" :class="{ hidden: !toggleOpened }" @click="toggleNav">
        <img src="../assets/images/icon-close.svg" alt="close-icon" />
      </button>
    </div>

    <nav class="nav" :class="{ 'nav--mobile': toggleOpened }">
      <ul class="nav__list">
        <li class="nav__item" :class="{ 'nav__item--opened': toggleOpened }">
          <div class="nav__item__con">
            <button class="btn nav__btn">
              Product
              <img
                :src="dropDownIconClass"
                alt="dropdown-icon"
                class="dropdown-icon"
              />
            </button>
            <ul class="nav__dropdown">
              <li class="nav__dropdown__item">
                <a href="#">Product1</a>
              </li>
              <li class="nav__dropdown__item">
                <a href="#">Product2</a>
              </li>
              <li class="nav__dropdown__item">
                <a href="#">Product3</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav__item" :class="{ 'nav__item--opened': toggleOpened }">
          <div class="nav__item__con">
            <button class="btn nav__btn">
              Company
              <img
                :src="dropDownIconClass"
                alt="dropdown-icon"
                class="dropdown-icon"
              />
            </button>
            <ul class="nav__dropdown">
              <li class="nav__dropdown__item">
                <a href="#">Product1</a>
              </li>
              <li class="nav__dropdown__item">
                <a href="#">Product2</a>
              </li>
              <li class="nav__dropdown__item">
                <a href="#">Product3</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav__item" :class="{ 'nav__item--opened': toggleOpened }">
          <div class="nav__item__con">
            <button class="btn nav__btn">
              Connect
              <img
                :src="dropDownIconClass"
                alt="dropdown-icon"
                class="dropdown-icon"
              />
            </button>
            <ul class="nav__dropdown">
              <li class="nav__dropdown__item">
                <a href="#">Product1</a>
              </li>
              <li class="nav__dropdown__item">
                <a href="#">Product2</a>
              </li>
              <li class="nav__dropdown__item">
                <a href="#">Product3</a>
              </li>
            </ul>
          </div>
        </li>
        <li
          class="nav__item nav__item--actions"
          :class="{ 'nav__item--opened': toggleOpened }"
        >
          <a class="btn nav__btn--tertiary" href="#">Login</a>
        </li>
        <li class="nav__item" :class="{ 'nav__item--opened': toggleOpened }">
          <a class="btn nav__btn--primary" href="#">Signup</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import arrowDark from "../assets/images/icon-arrow-dark.svg";
import arrowLight from "../assets/images/icon-arrow-light.svg";
export default {
  name: "MainHeader",
  data() {
    return {
      toggleOpened: false,
      arrowDark: arrowDark,
      arrowLight: arrowLight,
    };
  },
  computed: {
    dropDownIconClass() {
      return this.toggleOpened ? arrowDark : arrowLight;
    },
  },
  methods: {
    toggleNav() {
      this.toggleOpened = !this.toggleOpened;
    },
  },
};
</script>
