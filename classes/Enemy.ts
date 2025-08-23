interface EnemyDTO {
  hp: number;
  name: string;
  id: number;
  src: string;
  drop?: { id: number; name: string; dropChance: number; type: string }[];
}

export class EnemyClass implements EnemyDTO {
  hp;
  name;
  id = 1;
  src;
  appStore = useAppStore();
  drop;
  constructor({ hp, name, id, src, drop }: EnemyDTO) {
    this.hp = hp;
    this.name = name;
    this.id = id;
    this.src = src;
    this.drop = drop;
  }

  createEntity(currentKey: Ref, currentEnemy: Ref) {
    currentKey.value = this.id + new Date().getMilliseconds();
    currentEnemy.value = { hp: this.hp, name: this.name, src: this.src };
    this.appStore.setCurrentEnemy({ stats: currentEnemy.value });
    this.appStore.beginFight();
  }
}
