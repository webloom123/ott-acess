// Static games data
const gamesData = [
    {
        title: "No Man's Sky",
        originalPrice: 960,
        salePrice: 249,
        image: "./games/gamename.jpg"
    },
    {
        title: "Outlast",
        originalPrice: 880,
        salePrice: 299,
            image: "./games/gamename.jpg"
        // image: "games/outlast.jpg"
    },
    {
        title: "Outlast 2",
        originalPrice: 1300,
        salePrice: 299,
            image: "./games/gamename.jpg"
        // image: "games/outlast2.jpg"
    },
    {
        title: "Ready or Not",
        originalPrice: 1995,
        salePrice: 349,
            image: "./games/gamename.jpg"
        // image: "games/readyornot.jpg"
    },
    {
        title: "Resident Evil 7",
        originalPrice: 1199,
        salePrice: 399,
            image: "./games/gamename.jpg"
        // image: "games/re7.jpg"
    },
    {
        title: "Resident Evil 4",
        originalPrice: 2619,
        salePrice: 499,
        image: "games/re4.jpg"
    },
    {
        title: "Resident Evil Village",
        originalPrice: 2399,
        salePrice: 399,
        image: "games/village.jpg"
    },
    {
        title: "Rise of the Tomb Raider",
        originalPrice: 1499,
        salePrice: 249,
        image: "games/riseofthetombraider.jpg"
    },
    {
        title: "Rust",
        originalPrice: 349,
        salePrice: 349,
        image: "games/rust.jpg"
    },
    {
        title: "Sekiro: Shadows Die Twice",
        originalPrice: 4997,
        salePrice: 349,
        image: "games/sekiro.jpg"
    },
    {
        title: "Senua's Saga: Hellblade 2",
        originalPrice: 2199,
        salePrice: 399,
        image: "games/hellblade2.jpg"
    },
    {
        title: "Silent Hill 2",
        originalPrice: 2240,
        salePrice: 399,
        image: "games/silenthill2.jpg"
    },
    {
        title: "Starfield",
        originalPrice: 4999,
        salePrice: 499,
        image: "games/starfield.jpg"
    },
    {
        title: "Stray",
        originalPrice: 1249,
        salePrice: 349,
        image: "games/stray.jpg"
    },
    {
        title: "Street Fighter 5",
        originalPrice: 1309,
        salePrice: 299,
        image: "games/sf5.jpg"
    },
    {
        title: "Street Fighter 6",
        originalPrice: 1999,
        salePrice: 399,
        image: "games/sf6.jpg"
    },
    {
        title: "Tekken 7",
        originalPrice: 989,
        salePrice: 349,
        image: "games/tekken7.jpg"
    },
    {
        title: "Tekken 8",
        originalPrice: 4199,
        salePrice: 299,
        image: "games/tekken8.jpg"
    },
    {
        title: "The Last of Us",
        originalPrice: 3999,
        salePrice: 499,
        image: "games/tlou.jpg"
    },
    {
        title: "The Witcher 3: Wild Hunt",
        originalPrice: 1699,
        salePrice: 399,
        image: "games/witcher3.jpg"
    },
    {
        title: "Tomb Raider",
        originalPrice: 749,
        salePrice: 349,
        image: "games/tombraider.jpg"
    },
    {
        title: "Uncharted: Legacy of Thieves Collection",
        originalPrice: 3299,
        salePrice: 399,
        image: "games/uncharted.jpg"
    },
    {
        title: "Black Myth: Wukong",
        originalPrice: 3599,
        salePrice: 849,
        image: "games/blackmyth.jpg"
    },
    {
        title: "Elden Ring: Shadow of the Erdtree",
        originalPrice: 2399,
        salePrice: 499,
        image: "games/eldenring.jpg"
    },
    {
        title: "Red Dead Redemption 2",
        originalPrice: 3199,
        salePrice: 499,
        image: "games/rdr2.jpg"
    },
    {
        title: "GTA 5",
        originalPrice: 2638,
        salePrice: 499,
        image: "games/gta5.jpg"
    },
    {
        title: "Call of Duty: Modern Warfare 3",
        originalPrice: 2497,
        salePrice: 599,
        image: "games/mw3.jpg"
    },
    {
        title: "Bus Simulator 21",
        originalPrice: 2049,
        salePrice: 199,
        image: "games/bussim21.jpg"
    },
    {
        title: "Cyberpunk 2077",
        originalPrice: 2999,
        salePrice: 499,
        image: "games/cyberpunk.jpg"
    },
    {
        title: "Far Cry 6",
        originalPrice: 2999,
        salePrice: 499,
        image: "games/farcry6.jpg"
    },
    {
        title: "FC 25",
        originalPrice: 1599,
        salePrice: 499,
        image: "games/fc25.jpg"
    },
    {
        title: "Spider-Man Remastered",
        originalPrice: 2999,
        salePrice: 449,
        image: "games/spiderman.jpg"
    },
    {
        title: "Cities: Skylines",
        originalPrice: 1599,
        salePrice: 249,
        image: "games/citiesskylines.jpg"
    },
    {
        title: "Spider-Man: Miles Morales",
        originalPrice: 3299,
        salePrice: 399,
        image: "games/milesmorales.jpg"
    },
    {
        title: "Ghost of Tsushima",
        originalPrice: 3999,
        salePrice: 399,
        image: "games/ghostoftsushima.jpg"
    },
    {
        title: "God of War: Ragnarök",
        originalPrice: 3999,
        salePrice: 499,
        image: "games/ragnarok.jpg"
    },
    {
        title: "Baldur's Gate 3",
        originalPrice: 2999,
        salePrice: 399,
        image: "games/bg3.jpg"
    },
    {
        title: "Batman: Arkham Series",
        originalPrice: 1349,
        salePrice: 349,
        image: "games/arkham.jpg"
    },
    {
        title: "Battlefield 5",
        originalPrice: 2599,
        salePrice: 149,
        image: "games/bf5.jpg"
    },
    {
        title: "Call of Duty: Black Ops",
        originalPrice: 3359,
        salePrice: 299,
        image: "games/blackops.jpg"
    },
    {
        title: "Call of Duty: Black Ops 2",
        originalPrice: 4997,
        salePrice: 349,
        image: "games/blackops2.jpg"
    },
    {
        title: "Call of Duty: Black Ops 3",
        originalPrice: 4997,
        salePrice: 349,
        image: "games/blackops3.jpg"
    },
    {
        title: "Call of Duty: Ghosts",
        originalPrice: 4997,
        salePrice: 499,
        image: "games/codghosts.jpg"
    },
    {
        title: "God of War (2018)",
        originalPrice: 3299,
        salePrice: 299,
        image: "games/gow2018.jpg"
    },
    {
        title: "Call of Duty: Modern Warfare 2",
        originalPrice: 4999,
        salePrice: 449,
        image: "games/mw2.jpg"
    },
    {
        title: "Contraband Police",
        originalPrice: 1300,
        salePrice: 249,
        image: "games/contrabandpolice.jpg"
    },
    {
        title: "Control",
        originalPrice: 2999,
        salePrice: 499,
        image: "games/control.jpg"
    },
    {
        title: "Crysis",
        originalPrice: 999,
        salePrice: 349,
        image: "games/crysis.jpg"
    },
    {
        title: "Dark Souls 3",
        originalPrice: 4299,
        salePrice: 499,
        image: "games/darksouls3.jpg"
    },
    {
        title: "Darksiders 3",
        originalPrice: 1349,
        salePrice: 249,
        image: "games/darksiders3.jpg"
    },
    {
        title: "DayZ",
        originalPrice: 1749,
        salePrice: 349,
        image: "games/dayz.jpg"
    },
    {
        title: "Days Gone",
        originalPrice: 3299,
        salePrice: 349,
        image: "games/daysgone.jpg"
    },
    {
        title: "Detroit: Become Human",
        originalPrice: 2398,
        salePrice: 499,
        image: "games/detroit.jpg"
    },
    {
        title: "Devil May Cry Collection",
        originalPrice: 2750,
        salePrice: 499,
        image: "games/dmccollection.jpg"
    },
    {
        title: "Dragon Ball Sparking Zero",
        originalPrice: 3999,
        salePrice: 499,
        image: "games/dbsz.jpg"
    },
    {
        title: "Dying Light",
        originalPrice: 599,
        salePrice: 349,
        image: "games/dyinglight.jpg"
    },
    {
        title: "Dying Light 2",
        originalPrice: 2999,
        salePrice: 499,
        image: "games/dyinglight2.jpg"
    },
    {
        title: "The Evil Within",
        originalPrice: 1179,
        salePrice: 349,
        image: "games/evilwithin.jpg"
    },
    {
        title: "The Evil Within 2",
        originalPrice: 1179,
        salePrice: 349,
        image: "games/evilwithin2.jpg"
    },
    {
        title: "Fallout 4",
        originalPrice: 999,
        salePrice: 349,
        image: "games/fallout4.jpg"
    },
    {
        title: "Forza Horizon 4",
        originalPrice: 1299,
        salePrice: 249,
        image: "games/fh4.jpg"
    },
    {
        title: "Forza Horizon 5",
        originalPrice: 3499,
        salePrice: 499,
        image: "games/fh5.jpg"
    },
    {
        title: "Ghostrunner 2",
        originalPrice: 649,
        salePrice: 249,
        image: "games/ghostrunner2.jpg"
    },
    {
        title: "Ghostrunner",
        originalPrice: 2099,
        salePrice: 249,
        image: "games/ghostrunner.jpg"
    },
    {
        title: "Hitman 3",
        originalPrice: 1600,
        salePrice: 349,
        image: "games/hitman3.jpg"
    },
    {
        title: "Hogwarts Legacy",
        originalPrice: 3999,
        salePrice: 499,
        image: "games/hogwarts.jpg"
    },
    {
        title: "Horizon Zero Dawn",
        originalPrice: 3299,
        salePrice: 399,
        image: "games/horizonzd.jpg"
    },
    {
        title: "Horizon Forbidden West",
        originalPrice: 2679,
        salePrice: 349,
        image: "games/horizonfw.jpg"
    },
    {
        title: "House Flipper",
        originalPrice: 1100,
        salePrice: 249,
        image: "games/houseflipper.jpg"
    },
    {
        title: "Lies of P",
        originalPrice: 3700,
        salePrice: 399,
        image: "games/liesofp.jpg"
    },
    {
        title: "Little Nightmares",
        originalPrice: 1499,
        salePrice: 249,
        image: "games/littlenightmares.jpg"
    },
    {
        title: "Little Nightmares 2",
        originalPrice: 1999,
        salePrice: 249,
        image: "games/littlenightmares2.jpg"
    },
    {
        title: "Madison",
        originalPrice: 899,
        salePrice: 349,
        image: "games/madison.jpg"
    },
    {
        title: "Mafia 2",
        originalPrice: 1699,
        salePrice: 249,
        image: "games/mafia2.jpg"
    },
    {
        title: "Mafia: Definitive Edition",
        originalPrice: 2199,
        salePrice: 399,
        image: "games/mafiade.jpg"
    },
    {
        title: "Marvel's Avengers",
        originalPrice: 2999,
        salePrice: 399,
        image: "games/avengers.jpg"
    },
    {
        title: "Metal Gear Solid V: The Phantom Pain",
        originalPrice: 769,
        salePrice: 199,
        image: "games/mgsv.jpg"
    },
    {
        title: "Metro 2033 Redux",
        originalPrice: 1500,
        salePrice: 199,
        image: "games/metro2033.jpg"
    },
    {
        title: "Metro Exodus",
        originalPrice: 2250,
        salePrice: 199,
        image: "games/metroexodus.jpg"
    },
    {
        title: "Metro Redux: Last Light",
        originalPrice: 1500,
        salePrice: 199,
        image: "games/metrolastlight.jpg"
    },
    {
        title: "Mortal Kombat 1",
        originalPrice: 2799,
        salePrice: 399,
        image: "games/mk1.jpg"
    },
    {
        title: "Mortal Kombat X",
        originalPrice: 1079,
        salePrice: 349,
        image: "games/mkx.jpg"
    }
];

// Export the data so it can be used in other files
export { gamesData };
