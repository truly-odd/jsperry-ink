"use strict";
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const opened = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!opened));
    toggle.setAttribute('aria-label', opened ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('open', !opened);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('open');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
