<script setup lang="ts">
import { EnemyClass } from "~/classes/Enemy";
import { ref } from "vue";
import Enemy from "~/components/Enemy.vue";
import { enemyEntity } from "~/data/Entitydata";
import { inventory } from "~/classes/Inventory";
const currentEnemy = ref<{ hp: number; name: string; src: string } | null>(
  null
);
const enemyKey = ref(0);
const appStore = useAppStore();

onMounted(() => {
  const save = localStorage.getItem("save");
  if (!save) {
    const enemyStats =
      enemyEntity[Math.floor(Math.random() * enemyEntity.length)]!;
    const enemy = new EnemyClass(enemyStats);
    enemy.createEntity(enemyKey, currentEnemy);
  }

  const enemyStats = JSON.parse(save as string);
  const enemy = new EnemyClass(enemyStats);
  enemy.createEntity(enemyKey, currentEnemy);
  enemyKey.value = enemyStats.enemyKey | 1;

  watch(
    () => appStore.inFight,
    () => {
      if (!appStore.inFight) {
        const enemyStats =
          enemyEntity[Math.floor(Math.random() * enemyEntity.length)]!;
        const enemy = new EnemyClass(enemyStats);
        enemy.createEntity(enemyKey, currentEnemy);
      }
    }
  );

  onUnmounted(() => {
    localStorage.setItem(
      "save",
      JSON.stringify({ ...appStore.currentEnemy, enemyKey: enemyKey.value })
    );
  });

  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    localStorage.setItem(
      "save",
      JSON.stringify({ ...appStore.currentEnemy, enemyKey: enemyKey.value })
    );
  });
});
</script>

<template>
  <div class="window">
    <div class="window__display">
      <Enemy
        v-if="currentEnemy"
        :hp="currentEnemy.hp"
        :name="currentEnemy.name"
        :src="currentEnemy.src"
        :key="enemyKey"
      ></Enemy>
    </div>
    <UserBar></UserBar>
  </div>
</template>

<style>
.window {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 32px;
  text-transform: uppercase;
  flex-direction: column;
  user-select: none;
  background-image: url("/public/cave_bg.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}

.window__display {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
}

@media (width >= 768px) {
  .window {
    width: 50%;
  }

  @media (width >= 1024px) {
    .window {
      width: 40vw;
    }
  }

  @media (width >= 1536px) {
    .window {
      width: 30vw;
    }
  }
}
</style>
