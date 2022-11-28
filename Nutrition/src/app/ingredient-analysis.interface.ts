export interface Root {
    push(temp: Root): unknown
    uri: string
    calories: number
    totalWeight: number
    dietLabels: string[]
    healthLabels: string[]
    cautions: string[]
    totalNutrients: TotalNutrients
    totalDaily: TotalDaily
    ingredients: Ingredient[]
  }
  
  export interface TotalNutrients {
    FAT: Fat
    FASAT: Fasat
    NA: Na
  }
  
  export interface Fat {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fasat {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Na {
    label: string
    quantity: number
    unit: string
  }
  
  export interface TotalDaily {
    FAT: Fat2
    FASAT: Fasat2
    NA: Na2
  }
  
  export interface Fat2 {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fasat2 {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Na2 {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Ingredient {
    text: string
    parsed: Parsed[]
  }
  
  export interface Parsed {
    quantity: number
    measure: string
    foodMatch: string
    food: string
    foodId: string
    weight: number
    retainedWeight: number
    nutrients: Nutrients
    measureURI: string
    status: string
  }
  
  export interface Nutrients {
    RIBF: Ribf
    VITD: Vitd
    THIA: Thia
    FAPU: Fapu
    NIA: Nia
    ENERC_KCAL: EnercKcal
    FASAT: Fasat3
    VITA_RAE: VitaRae
    VITC: Vitc
    PROCNT: Procnt
    TOCPHA: Tocpha
    CHOLE: Chole
    FAMS: Fams
    CHOCDF: Chocdf
    FAT: Fat3
    VITB6A: Vitb6A
    VITB12: Vitb12
    FIBTG: Fibtg
    WATER: Water
    K: K
    P: P
    NA: Na3
    ZN: Zn
    SUGAR: Sugar
    CA: Ca
    MG: Mg
    FE: Fe
    VITK1: Vitk1
    FOLFD: Folfd
    FOLAC: Folac
    FOLDFE: Foldfe
  }
  
  export interface Ribf {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Vitd {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Thia {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fapu {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Nia {
    label: string
    quantity: number
    unit: string
  }
  
  export interface EnercKcal {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fasat3 {
    label: string
    quantity: number
    unit: string
  }
  
  export interface VitaRae {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Vitc {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Procnt {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Tocpha {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Chole {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fams {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Chocdf {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fat3 {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Vitb6A {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Vitb12 {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fibtg {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Water {
    label: string
    quantity: number
    unit: string
  }
  
  export interface K {
    label: string
    quantity: number
    unit: string
  }
  
  export interface P {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Na3 {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Zn {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Sugar {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Ca {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Mg {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fe {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Vitk1 {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Folfd {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Folac {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Foldfe {
    label: string
    quantity: number
    unit: string
  }
  