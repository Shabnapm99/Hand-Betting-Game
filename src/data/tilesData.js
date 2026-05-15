export const tileDefinition = [

    //34 unique tile types definition

    // DOTS
    ...Array.from({ length: 9 }, (_, i) => ({
        symbol: `${i + 1}`,
        suit: "dots",
        type: "number",
        number: i + 1,
        value: i + 1,
    })),

    // BAMBOO
    ...Array.from({ length: 9 }, (_, i) => ({
        symbol: `${i + 1}`,
        suit: "bamboo",
        type: "number",
        number: i + 1,
        value: i + 1,
    })),

    // CHARACTERS
    ...Array.from({ length: 9 }, (_, i) => ({
        symbol: `${i + 1}`,
        suit: "character",
        type: "number",
        number: i + 1,
        value: i + 1,
    })),

    // WINDS
    { symbol: "東", suit: "wind", type: "wind", name: "East", value: 5 },
    { symbol: "南", suit: "wind", type: "wind", name: "South", value: 5 },
    { symbol: "西", suit: "wind", type: "wind", name: "West", value: 5 },
    { symbol: "北", suit: "wind", type: "wind", name: "North", value: 5 },

    // DRAGONS
    { symbol: "中", suit: "dragon", type: "dragon", name: "Red", value: 5 },
    { symbol: "發", suit: "dragon", type: "dragon", name: "Green", value: 5 },
    { symbol: "白", suit: "dragon", type: "dragon", name: "White", value: 5 },
]