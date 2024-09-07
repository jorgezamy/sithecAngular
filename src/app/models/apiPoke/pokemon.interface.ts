export interface Ability {
  name: string;
  url: string;
}

export interface Ability {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Cry {
  latest: string;
  legacy: string;
}

export interface Form {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface Game_indice {
  game_index: number;
  version: Version;
}

export interface Move {
  name: string;
  url: string;
}

export interface Move_learn_method {
  name: string;
  url: string;
}

export interface Version_group {
  name: string;
  url: string;
}

export interface Version_group_detail {
  level_learned_at: number;
  move_learn_method: Move_learn_method;
  version_group: Version_group;
}

export interface IMove {
  move: Move;
  version_group_details: Version_group_detail[];
}

export interface Specy {
  name: string;
  url: string;
}

export interface Dream_world {
  front_default: string;
  front_female?: any;
}

export interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Showdown {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Other {
  dream_world: Dream_world;
  home: Home;
  OfficialArtwork: OfficialArtwork;
  showdown: Showdown;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface Yellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationI {
  RedBlue: RedBlue;
  yellow: Yellow;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface FireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIii {
  emerald: Emerald;
  FireredLeafgreen: FireredLeafgreen;
  RubySapphire: RubySapphire;
}

export interface DiamondPearl {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface HeartgoldSoulsilver {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Platinum {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface GenerationIv {
  DiamondPearl: DiamondPearl;
  HeartgoldSoulsilver: HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface Animated {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface BlackWhite {
  animated: Animated;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface GenerationV {
  BlackWhite: BlackWhite;
}

export interface OmegarubyAlphasapphire {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface XY {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface GenerationVi {
  OmegarubyAlphasapphire: OmegarubyAlphasapphire;
  XY: XY;
}

export interface Icon {
  front_default: string;
  front_female?: any;
}

export interface UltraSunUltraMoon {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface GenerationVii {
  icons: Icon;
  UltraSunUltraMoon: UltraSunUltraMoon;
}

export interface Icon {
  front_default: string;
  front_female?: any;
}

export interface GenerationViii {
  icons: Icon;
}

export interface Version {
  GenerationI: GenerationI;
  GenerationIi: GenerationIi;
  GenerationIii: GenerationIii;
  GenerationIv: GenerationIv;
  GenerationV: GenerationV;
  GenerationVi: GenerationVi;
  GenerationVii: GenerationVii;
  GenerationViii: GenerationViii;
}

export interface Sprite {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Version;
}

export interface Stat {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Type {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type;
}

export interface IPokemon {
  abilities: Ability[];
  base_experience: number;
  cries: Cry;
  forms: Form[];
  game_indices: Game_indice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: Specy;
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  weight: number;
}
