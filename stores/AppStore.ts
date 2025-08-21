import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      inFight: false,
      currentEnemy: { hp: 0, name: "", src: "" },
    };
  },
  actions: {
    endFight() {
      this.inFight = false;
    },
    beginFight() {
      this.inFight = true;
    },
    setCurrentEnemy({
      stats,
    }: {
      stats: { hp: number; name: string; src: string };
    }) {
      this.currentEnemy = stats;
    },
  },
});
