interface EnemyDTO {
  hp: number;
  name: string;
  id: number;
  src: string;
}

export class EnemyClass {
  hp: number;
  name: string;
  id: number = 1;
  src: string;
  appStore = useAppStore();
  constructor({ hp, name, id, src }: EnemyDTO) {
    this.hp = hp;
    this.name = name;
    this.id = id;
    this.src = src;
  }

  createEntity(currentKey: Ref, currentEnemy: Ref) {
    currentKey.value = this.id + new Date().getMilliseconds();
    currentEnemy.value = { hp: this.hp, name: this.name, src: this.src };
    this.appStore.setCurrentEnemy({ stats: currentEnemy.value });
    this.appStore.beginFight();
  }
}
