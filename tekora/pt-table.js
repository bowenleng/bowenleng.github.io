// Sample element array (Expand this to include all 118 elements)
const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', weight: 1.008, category: 'reactive-nonmetal', row: 1, column: 1 },
    { number: 2, symbol: 'He', name: 'Helium', weight: 4.0026, category: 'noble-gas', row: 1, column: 18 },
    { number: 3, symbol: 'Li', name: 'Lithium', weight: 6.94, category: 'alkali-metal', row: 2, column: 1 },
    { number: 4, symbol: 'Be', name: 'Beryllium', weight: 9.0122, category: 'alkaline-earth-metal', row: 2, column: 2 },
    { number: 5, symbol: 'B', name: 'Boron', weight: 10.81, category: 'semimetal', row: 2, column: 13 },
    { number: 6, symbol: 'C', name: 'Carbon', weight: 12.011, category: 'reactive-nonmetal', row: 2, column: 14 },
    { number: 7, symbol: 'N', name: 'Nitrogen', weight: 14.007, category: 'reactive-nonmetal', row: 2, column: 15 },
    { number: 8, symbol: 'O', name: 'Oxygen', weight: 15.999, category: 'reactive-nonmetal', row: 2, column: 16 },
    { number: 9, symbol: 'F', name: 'Fluorine', weight: 18.998, category: 'halogen', row: 2, column: 17 },
    { number: 10, symbol: 'Ne', name: 'Neon', weight: 20.180, category: 'noble-gas', row: 2, column: 18 },
    { number: 11, symbol: 'Na', name: 'Sodium', weight: 22.990, category: 'alkali-metal', row: 3, column: 1 },
    { number: 12, symbol: 'Mg', name: 'Magnesium', weight: 24.305, category: 'alkaline-earth-metal', row: 3, column: 2 },
    { number: 13, symbol: 'Al', name: 'Aluminum', weight: 26.982, category: 'weak-metal', row: 3, column: 13 },
    { number: 14, symbol: 'Si', name: 'Silicon', weight: 28.085, category: 'semimetal', row: 3, column: 14 },
    { number: 15, symbol: 'P', name: 'Phosphorus', weight: 30.974, category: 'reactive-nonmetal', row: 3, column: 15 },
    { number: 16, symbol: 'S', name: 'Sulfur', weight: 32.06, category: 'reactive-nonmetal', row: 3, column: 16 },
    { number: 17, symbol: 'Cl', name: 'Chlorine', weight: 35.45, category: 'halogen', row: 3, column: 17 },
    { number: 18, symbol: 'Ar', name: 'Argon', weight: 39.948, category: 'noble-gas', row: 3, column: 18 },
    { number: 19, symbol: 'K', name: 'Potassium', weight: 39.098, category: 'alkali-metal', row: 4, column: 1 },
    { number: 20, symbol: 'Ca', name: 'Calcium', weight: 40.078, category: 'alkaline-earth-metal', row: 4, column: 2 },
    { number: 21, symbol: 'Sc', name: 'Scandium', weight: 6.94, category: 'transition-metal', row: 4, column: 3 },
    { number: 22, symbol: 'Ti', name: 'Titanium', weight: 47.867, category: 'transition-metal', row: 4, column: 4 },
    { number: 23, symbol: 'V', name: 'Vanadium', weight: 50.942, category: 'transition-metal', row: 4, column: 5 },
    { number: 24, symbol: 'Cr', name: 'Chromium', weight: 51.996, category: 'transition-metal', row: 4, column: 6 },
    { number: 25, symbol: 'Mn', name: 'Manganese', weight: 54.938, category: 'transition-metal', row: 4, column: 7 },
    { number: 26, symbol: 'Fe', name: 'Iron', weight: 55.845, category: 'transition-metal', row: 4, column: 8 },
    { number: 27, symbol: 'Co', name: 'Cobalt', weight: 58.933, category: 'transition-metal', row: 4, column: 9 },
    { number: 28, symbol: 'Ni', name: 'Nickel', weight: 58.693, category: 'transition-metal', row: 4, column: 10 },
    { number: 29, symbol: 'Cu', name: 'Copper', weight: 63.546, category: 'transition-metal', row: 4, column: 11 },
    { number: 30, symbol: 'Zn', name: 'Zinc', weight: 65.38, category: 'transition-metal', row: 4, column: 12 },
    { number: 31, symbol: 'Ga', name: 'Gallium', weight: 69.723, category: 'weak-metal', row: 4, column: 13 },
    { number: 32, symbol: 'Ge', name: 'Germanium', weight: 72.630, category: 'semimetal', row: 4, column: 14 },
    { number: 33, symbol: 'As', name: 'Arsenic', weight: 74.922, category: 'semimetal', row: 4, column: 15 },
    { number: 34, symbol: 'Se', name: 'Selenium', weight: 78.971, category: 'reactive-nonmetal', row: 4, column: 16 },
    { number: 35, symbol: 'Br', name: 'Bromine', weight: 79.904, category: 'halogen', row: 4, column: 17 },
    { number: 36, symbol: 'Kr', name: 'Krypton', weight: 83.798, category: 'noble-gas', row: 4, column: 18 },
    { number: 37, symbol: 'Rb', name: 'Rubidium', weight: 85.468, category: 'alkali-metal', row: 5, column: 1 },
    { number: 38, symbol: 'Sr', name: 'Strontium', weight: 87.62, category: 'alkaline-earth-metal', row: 5, column: 2 },
    { number: 39, symbol: 'Y', name: 'Yttrium', weight: 88.906, category: 'transition-metal', row: 5, column: 3 },
    { number: 40, symbol: 'Zr', name: 'Zirconium', weight: 91.224, category: 'transition-metal', row: 5, column: 4 },
    { number: 41, symbol: 'Nb', name: 'Niobium', weight: 92.906, category: 'transition-metal', row: 5, column: 5 },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', weight: 95.95, category: 'transition-metal', row: 5, column: 6 },
    { number: 43, symbol: 'Tc', name: 'Technetium', weight: 98, category: 'transition-metal', row: 5, column: 7 },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', weight: 101.07, category: 'transition-metal', row: 5, column: 8 },
    { number: 45, symbol: 'Rh', name: 'Rhodium', weight: 102.91, category: 'transition-metal', row: 5, column: 9 },
    { number: 46, symbol: 'Pd', name: 'Palladium', weight: 106.42, category: 'transition-metal', row: 5, column: 10 },
    { number: 47, symbol: 'Ag', name: 'Silver', weight: 107.87, category: 'transition-metal', row: 5, column: 11 },
    { number: 48, symbol: 'Cd', name: 'Cadmium', weight: 112.41, category: 'transition-metal', row: 5, column: 12 },
    { number: 49, symbol: 'In', name: 'Indium', weight: 114.82, category: 'weak-metal', row: 5, column: 13 },
    { number: 50, symbol: 'Sn', name: 'Tin', weight: 118.71, category: 'weak-metal', row: 5, column: 14 },
    { number: 51, symbol: 'Sb', name: 'Antimony', weight: 121.76, category: 'semimetal', row: 5, column: 15 },
    { number: 52, symbol: 'Te', name: 'Tellurium', weight: 127.60, category: 'semimetal', row: 5, column: 16 },
    { number: 53, symbol: 'I', name: 'Iodine', weight: 126.90, category: 'halogen', row: 5, column: 17 },
    { number: 54, symbol: 'Xe', name: 'Xenon', weight: 131.29, category: 'noble-gas', row: 5, column: 18 },
    { number: 55, symbol: 'Cs', name: 'Cesium', weight: 132.91, category: 'alkali-metal', row: 6, column: 1 },
    { number: 56, symbol: 'Ba', name: 'Barium', weight: 137.33, category: 'alkaline-earth-metal', row: 6, column: 2 },
    { number: 57, symbol: 'La', name: 'Lanthanum', weight: 138.91, category: 'lanthanide', row: 9, column: 3 },
    { number: 58, symbol: 'Ce', name: 'Cerium', weight: 140.12, category: 'lanthanide', row: 9, column: 4 },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', weight: 140.91, category: 'lanthanide', row: 9, column: 5 },
    { number: 60, symbol: 'Nd', name: 'Neodymium', weight: 144.24, category: 'lanthanide', row: 9, column: 6 },
    { number: 61, symbol: 'Pm', name: 'Promethium', weight: 145, category: 'lanthanide', row: 9, column: 7 },
    { number: 62, symbol: 'Sm', name: 'Samarium', weight: 150.36, category: 'lanthanide', row: 9, column: 8 },
    { number: 63, symbol: 'Eu', name: 'Europium', weight: 151.96, category: 'lanthanide', row: 9, column: 9 },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', weight: 157.25, category: 'lanthanide', row: 9, column: 10 },
    { number: 65, symbol: 'Tb', name: 'Terbium', weight: 158.93, category: 'lanthanide', row: 9, column: 11 },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', weight: 162.50, category: 'lanthanide', row: 9, column: 12 },
    { number: 67, symbol: 'Ho', name: 'Holmium', weight: 164.93, category: 'lanthanide', row: 9, column: 13 },
    { number: 68, symbol: 'Er', name: 'Erbium', weight: 167.26, category: 'lanthanide', row: 9, column: 14 },
    { number: 69, symbol: 'Tm', name: 'Thulium', weight: 168.93, category: 'lanthanide', row: 9, column: 15 },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', weight: 173.05, category: 'lanthanide', row: 9, column: 16 },
    { number: 71, symbol: 'Lu', name: 'Lutetium', weight: 174.97, category: 'lanthanide', row: 9, column: 17 },
    { number: 72, symbol: 'Hf', name: 'Hafnium', weight: 178.49, category: 'transition-metal', row: 6, column: 4 },
    { number: 73, symbol: 'Ta', name: 'Tantalum', weight: 180.95, category: 'transition-metal', row: 6, column: 5 },
    { number: 74, symbol: 'W', name: 'Tungsten', weight: 183.84, category: 'transition-metal', row: 6, column: 6 },
    { number: 75, symbol: 'Re', name: 'Rhenium', weight: 186.21, category: 'transition-metal', row: 6, column: 7 },
    { number: 76, symbol: 'Os', name: 'Osmium', weight: 190.23, category: 'transition-metal', row: 6, column: 8 },
    { number: 77, symbol: 'Ir', name: 'Iridium', weight: 192.22, category: 'transition-metal',row: 6, column: 9 },
    { number: 78, symbol: 'Pt', name: 'Platinum', weight: 195.08, category: 'transition-metal', row: 6, column: 10 },
    { number: 79, symbol: 'Au', name: 'Gold', weight: 196.97, category: 'transition-metal', row: 6, column: 11 },
    { number: 80, symbol: 'Hg', name: 'Mercury', weight: 200.59, category: 'transition-metal', row: 6, column: 12 },
    { number: 81, symbol: 'Tl', name: 'Thallium', weight: 204.38, category: 'weak-metal', row: 6, column: 13 },
    { number: 82, symbol: 'Pb', name: 'Lead', weight: 207.2, category: 'weak-metal', row: 6, column: 14 },
    { number: 83, symbol: 'Bi', name: 'Bismuth', weight: 208.98, category: 'weak-metal', row: 6, column: 15 },
    { number: 84, symbol: 'Po', name: 'Polonium', weight: 209, category: 'semimetal', row: 6, column: 16 },
    { number: 85, symbol: 'At', name: 'Astatine', weight: 210, category: 'halogen', row: 6, column: 17 },
    { number: 86, symbol: 'Rn', name: 'Radon', weight: 222, category: 'noble-gas', row: 6, column: 18 },
    { number: 87, symbol: 'Fr', name: 'Francium', weight: 223, category: 'alkali-metal', row: 7, column: 1 },
    { number: 88, symbol: 'Ra', name: 'Radium', weight: 226, category: 'alkaline-earth-metal', row: 7, column: 2 },
    { number: 89, symbol: 'Ac', name: 'Actinium', weight: 227, category: 'actinide', row: 10, column: 3 },
    { number: 90, symbol: 'Th', name: 'Thorium', weight: 232.04, category: 'actinide', row: 10, column: 4 },
    { number: 91, symbol: 'Pa', name: 'Protactinium', weight: 231.04, category: 'actinide', row: 10, column: 5 },
    { number: 92, symbol: 'U', name: 'Uranium', weight: 238.03, category: 'actinide', row: 10, column: 6 },
    { number: 93, symbol: 'Np', name: 'Neptunium', weight: 237, category: 'actinide', row: 10, column: 7 },
    { number: 94, symbol: 'Pu', name: 'Plutonium', weight: 244, category: 'actinide', row: 10, column: 8 },
    { number: 95, symbol: 'Am', name: 'Americium', weight: 243, category: 'actinide', row: 10, column: 9 },
    { number: 96, symbol: 'Cm', name: 'Curium', weight: 247, category: 'actinide', row: 10, column: 10 },
    { number: 97, symbol: 'Bk', name: 'Berkelium', weight: 247, category: 'actinide', row: 10, column: 11 },
    { number: 98, symbol: 'Cf', name: 'Californium', weight: 251, category: 'actinide', row: 10, column: 12 },
    { number: 99, symbol: 'Es', name: 'Einsteinium', weight: 252, category: 'actinide', row: 10, column: 13 },
    { number: 100, symbol: 'Fm', name: 'Fermium', weight: 257, category: 'actinide', row: 10, column: 14 },
    { number: 101, symbol: 'Md', name: 'Mendelevium', weight: 258, category: 'actinide', row: 10, column: 15 },
    { number: 102, symbol: 'No', name: 'Nobelium', weight: 259, category: 'actinide', row: 10, column: 16 },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', weight: 262, category: 'actinide', row: 10, column: 17 },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', weight: 267, category: 'unknown', row: 7, column: 4 },
    { number: 105, symbol: 'Db', name: 'Dubnium', weight: 268, category: 'unknown', row: 7, column: 5 },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', weight: 269, category: 'unknown', row: 7, column: 6 },
    { number: 107, symbol: 'Bh', name: 'Bohrium', weight: 270, category: 'unknown', row: 7, column: 7 },
    { number: 108, symbol: 'Hs', name: 'Hassium', weight: 269, category: 'unknown', row: 7, column: 8 },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', weight: 278, category: 'unknown', row: 7, column: 9 },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', weight: 281, category: 'unknown', row: 7, column: 10 },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', weight: 282, category: 'unknown', row: 7, column: 11 },
    { number: 112, symbol: 'Cn', name: 'Copernicium', weight: 285, category: 'unknown', row: 7, column: 12 },
    { number: 113, symbol: 'Nh', name: 'Nihonium', weight: 286, category: 'unknown', row: 7, column: 13 },
    { number: 114, symbol: 'Fl', name: 'Flerovium', weight: 289, category: 'unknown', row: 7, column: 14 },
    { number: 115, symbol: 'Mc', name: 'Moscovium', weight: 290, category: 'unknown', row: 7, column: 15 },
    { number: 116, symbol: 'Lv', name: 'Livermorium', weight: 293, category: 'unknown', row: 7, column: 16 },
    { number: 117, symbol: 'Ts', name: 'Tennessine', weight: 294, category: 'unknown', row: 7, column: 17 },
    { number: 118, symbol: 'Og', name: 'Oganesson', weight: 294, category: 'unknown', row: 7, column: 18 }
];

const table = document.getElementById('periodic-table');

// Dynamic DOM Node generation 
elements.forEach(el => {
    const card = document.createElement('div');
    card.classList.add('element-card', el.category);
    
    // Explicit placement via CSS Grid line markers
    card.style.gridRowStart = el.row;
    card.style.gridColumnStart = el.column;

    card.innerHTML = `
        <span class="atomic-number">${el.number}</span>
        <span class="symbol">${el.symbol}</span>
        <span class="name">${el.name}</span>
    `;

    var name = el.name.toLowerCase();
    var link = "materials/" + name + ".html";

    // Interactivity: Event listener configuration
    card.addEventListener('click', () => open(link));
    table.appendChild(card);
});
