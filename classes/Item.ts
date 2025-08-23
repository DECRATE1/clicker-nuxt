interface ItemDto {
  id: number;
  type: string;
  cost: number;
  dropChance: number;
  src: string;
  damage?: number;
  ability?: () => void;
}

export class Item implements ItemDto {
  id;
  type;
  cost;
  dropChance;
  src;
  damage;
  ability;
  constructor({ id, type, cost, dropChance, src, damage, ability }: ItemDto) {
    this.id = id;
    this.type = type;
    this.cost = cost;
    this.dropChance = dropChance;
    this.src = src;
    this.damage = damage;
    this.ability = ability;
  }

  isDropted() {
    return Math.random() * 100 >= this.dropChance;
  }

  useAbility() {
    if (!this.ability) return;
    this.ability();
  }
}
