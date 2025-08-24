export interface ItemDto {
  id: number;
  type: string;
  cost: number;
  dropChance: number;
  src: string;
  damage?: number;
  ability?: () => void;
  maxQuantity: number;
}

export class Item implements ItemDto {
  id;
  type;
  cost;
  dropChance;
  src;
  damage;
  ability;
  maxQuantity;
  constructor({
    id,
    type,
    cost,
    dropChance,
    src,
    damage,
    ability,
    maxQuantity,
  }: ItemDto) {
    this.id = id;
    this.type = type;
    this.cost = cost;
    this.dropChance = dropChance;
    this.src = src;
    this.damage = damage;
    this.ability = ability;
    this.maxQuantity = maxQuantity;
  }

  isDropted() {
    return this.dropChance >= Math.floor(Math.random() * 100);
  }

  useAbility() {
    if (!this.ability) return;
    this.ability();
  }
}
