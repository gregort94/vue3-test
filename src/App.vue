<template>
  <div class="container">
    <h1>Тестовые задачи</h1>

    <h2>Задача 0. Работа с git</h2>

    <ul>
      <li>1. Клонируйте локально репозиторий с заданиями: <code>https://gitlab.com/artem.r/vue3-test.git</code></li>
      <li>2. Выполните задания и сделайте коммит</li>
      <li>3. Создайте в вашем любимом git-сервисе публичный репозиторий и укажите его в качестве remote для вашего локального проекта</li>
      <li>4. Отправьте ваш результат в свой репозиторий и пришлите ссылку на него</li>
    </ul> 

    <h2>Задача 1. Вёрстка</h2>
    <div>

      <div class="logo-container">
        <the-logo :src="logo" v-for="logo in logos" />
      </div>

      <p>Необходимо расположить логотипы компаний сеткой. Сетка должна адаптироваться к экрану по следующему правилу: </p>
      <ul>
        <li>&lt; 600px: <a target="_blank" href="https://img.otcstores.com/644/snimok_ekrana_2023_02_10_v_11_45_52-6444ba26b8.png">2 лого в ряд</a></li>
        <li>&ge; 600px: <a target="_blank" href="https://img.otcstores.com/1ba/snimok_ekrana_2023_02_10_v_11_45_37-1baec56f4e.png">3 лого в ряд</a></li>
        <li>&ge; 1024px: <a target="_blank" href="https://img.otcstores.com/ba0/snimok_ekrana_2023_02_10_v_11_45_19-ba0b19265b.png">6 лого в ряд</a></li>
      </ul>
    </div>

    <h2>Задача 2. Связь компонентов</h2>
    <div class="bordered-two">
      <the-counter />
      <the-clicker />
    </div>
    <p>
      Оптимальным образом модифицировать код проекта так,
      чтобы кнопка в компоненте <code>TheClicker</code>
      тоже увеличивала счётчик компонента <code>TheCounter</code>
    </p>

    <h2>Задача 3. Модификация вывода</h2>
    <div class="bordered-two">
      <the-counter>
        <template #default="{counter}">
          <p>
            Count:
            <input :value="counter" type="text" readonly>
          </p>
        </template>
      </the-counter>
    </div>

    <p>Сделать так, чтоб input, переопределяющий вывод информации из компонента через слот, заработал (то есть отображал значение счётчика)</p>

    <h2>Задача 4. Синхронизация</h2>
    <p>Сделать так, чтобы значения всех экземпляров TheCounter на странице работали синхронно.</p>

    <h2>Удачи!</h2>
  </div>
</template>
<script setup>
import TheClicker from "./components/TheClicker.vue";
import TheCounter from "./components/TheCounter.vue";
import TheLogo from "./components/TheLogo.vue";

const logos = [
    "https://img.otcstores.com/4a3/leaf-4a36b846ec.png",
    "https://img.otcstores.com/bfa/lighting-bfa45a1663.png",
    "https://img.otcstores.com/e93/solaytic-e937233d42.png",
    "https://img.otcstores.com/f7a/aven-f7a55213a9.png",
    "https://img.otcstores.com/8c3/volicity_9-8c3bf4b399.png",
    "https://img.otcstores.com/016/treva-0164a0a05d.png",
    "https://img.otcstores.com/d09/hexa-d0922eddd9.png",
    "https://img.otcstores.com/456/kyan-45643c8de4.png",
    "https://img.otcstores.com/f5f/tvit-f5fcf2b948.png",
    "https://img.otcstores.com/001/towers-001e56f3e9.png",
    "https://img.otcstores.com/616/hex_lab-616d885202.png",
    "https://img.otcstores.com/ac4/fossa-ac4ac5b9ac.png"
]
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
}

.logo-container {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }

}

.bordered-two {
  display: flex;
  justify-content: center;
}
.bordered-two > div {
  border: 2px solid #42b983;
  padding: 10px;
  margin: 10px;
}
a {
  color: #42b983;
}
</style>
