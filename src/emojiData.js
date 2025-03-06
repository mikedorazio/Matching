export const edata = [
    {id: 0, code: '0x1f600', status: '', description: 'Smiley Face'},
    {id: 1, code: '0x1f601', status: '', description: 'All Teeth'},
    {id: 2, code: '0x1f606', status: '', description: 'Squinty Eyes'},
    {id: 3, code: '0x1f607', status: '', description: 'Halo'},
    {id: 4, code: '0x1f970', status: '', description: '3 Kisses'},
    {id: 5, code: '0x1f911', status: '', description: 'Money Bags'},
    {id: 6, code: '0x1f9d0', status: '', description: 'Monacle'},
    {id: 7, code: '0x1f92c', status: '', description: 'Curse'},
    {id: 8, code: '0x1f480', status: '', description: 'Skull'},
    {id: 9, code: '0x1f4a9', status: '', description: 'Poopey'},
    {id: 10, code: '0x1f921', status: '', description: 'Eric the Clown'},
    {id: 11, code: '0x1f47b', status: '', description: 'Ghost'},
    {id: 12, code: '0x1f3cb', status: '', description: 'Weighlifter'},
    {id: 13, code: '0x1f47d', status: '', description: 'Alien'},
    {id: 14, code: '0x1f596', status: '', description: 'Vulcan Salute'},
    {id: 15, code: '0x1f4aa', status: '', description: 'Flexed Bicep'},
    {id: 16, code: '0x1f9b7', status: '', description: 'Tooth'},
    {id: 17, code: '0x1f9b4', status: '', description: 'Bone'},
    {id: 18, code: '0x1f440', status: '', description: 'Eyes'},
    {id: 19, code: '0x1f385', status: '', description: 'Santa'},
    {id: 20, code: '0x1f6c0', status: '', description: 'Bath'},
    {id: 21, code: '0x1f436', status: '', description: 'Bella'},
    {id: 22, code: '0x1f987', status: '', description: 'Bat'},
    {id: 23, code: '0x1f433', status: '', description: 'Whale'},
    {id: 24, code: '0x1f578', status: '', description: 'Spider Web'},
    {id: 25, code: '0x1f339', status: '', description: 'Rose'},
    {id: 26, code: '0x1f344', status: '', description: 'Mushroom'},
    {id: 27, code: '0x1f349', status: '', description: 'Watermellon'},
    {id: 28, code: '0x1f352', status: '', description: 'Cherries'},
    {id: 29, code: '0x1f353', status: '', description: 'Strawberry'},
    {id: 30, code: '0x1f955', status: '', description: 'Carrot'},
    {id: 31, code: '0x1f968', status: '', description: 'Prezel'},
    {id: 32, code: '0x1f969', status: '', description: 'Steak'},
    {id: 33, code: '0x1f355', status: '', description: 'Pizza'},
    {id: 34, code: '0x2b1c',  status: '', description: 'White Square'},
    {id: 35, code: '0x1f3cc', status: '', description: 'Golfer'},
    {id: 36, code: '0x1f9a0', status: '', description: 'Microbe'},
    {id: 37, code: '0x1f373', status: '', description: 'Egg on pan'},
    {id: 38, code: '0x1f378', status: '', description: 'Martini'},
    {id: 39, code: '0x1f9ca', status: '', description: 'Ice'},
    {id: 40, code: '0x1f30e', status: '', description: 'Earth'},
    {id: 41, code: '0x1f9ed', status: '', description: 'Compass'},
    {id: 42, code: '0x1f5fd', status: '', description: 'Statue of Liberty'},
    {id: 43, code: '0x1f682', status: '', description: 'Locomotive'},
    {id: 44, code: '0x1f6f9', status: '', description: 'Skateboard'},
    {id: 45, code: '0x1f6f4', status: '', description: 'Scooter'},
    {id: 46, code: '0x1f6a7', status: '', description: 'Construction'},
    {id: 47, code: '0x1f6a6', status: '', description: 'Traffic Light'},
    {id: 48, code: '0x1f46e', status: '', description: 'Police Officer'},
    {id: 49, code: '0x1f680', status: '', description: 'Rocket'},
    {id: 50, code: '0x1f384', status: '', description:  'Christmas Tree'}
];

const NUMBER_OF_GAME_ENTRIES = 12;
const emojiEntries = edata.length;

const randomIndex = Math.floor(Math.random() * emojiEntries);

export let randomSet = new Set();
export let randomEmojies = [];

while (randomSet.size < NUMBER_OF_GAME_ENTRIES) {
    const randomIndex = Math.floor(Math.random() * emojiEntries);
    randomSet.add(randomIndex);
}

// you must make a shallow copy of one of them otherwise when you select one, both will 
// be shown on the screen....They are the same object so the status will be updated on both entries
randomSet.forEach((e) => {
    randomEmojies.push(edata[e]);
    const shallowCopy = Object.assign({}, edata[e]);
    randomEmojies.push(shallowCopy);
})

// randomize the array
randomEmojies.sort(() => Math.random() - .5);
//randomEmojies.sort(() => Math.random() - .5);

console.log("randomSet", randomSet, randomEmojies);