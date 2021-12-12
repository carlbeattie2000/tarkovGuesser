// store our images / lat lng for each location by map name
const mapLocations = [
    {
        map_name: "customs",
        img: "factory.jpg",
        correct_position: [-84.196507, 0.439453],
    },
    {
        map_name: "customs",
        img: "ru_gate_customs.jpg",
        correct_position: [-80.297927, -102.480469],
    },
    {
        map_name: "customs",
        img: "construction.png",
        correct_position: [-71.663663, 13.798828],
    },
    {
        map_name: "customs",
        img: "tank_gate.png",
        correct_position: [-80.05805, -68.466797],
    },
    {
        map_name: "customs",
        img: "dead_man.png",
        correct_position: [-77.35107, -54.961734],
    },
    {
        map_name: "customs",
        img: "bus01.png",
        correct_position: [-79.055137, -40.006697],
    },
    {
        map_name: "customs",
        img: "crack_med_table.png",
        correct_position: [-79.951265, -36.400999],
    },
    {
        map_name: "customs",
        img: "crack_back_book.png",
        correct_position: [-80.042864, -38.951371],
    },
    {
        map_name: "customs",
        img: "crack_front_file.png",
        correct_position: [-81.093214, -38.687539],
    },
    {
        map_name: "customs",
        img: "crack_stairs.png",
        correct_position: [-80.900669, -34.905953],
    },
    {
        map_name: "customs",
        img: "crack_hut.png",
        correct_position: [-81.595699, -42.648687],
    },
    {
        map_name: "customs",
        img: "crack_wall.png",
        correct_position: [-81.659685, -47.133825],
    },
    {
        map_name: "customs",
        img: "container_bag.png",
        correct_position: [-75.208245, -26.994678],
    },
    {
        map_name: "customs",
        img: "container_walk.png",
        correct_position: [-74.496413, -22.069822],
    },
    {
        map_name: "customs",
        img: "warehouse01.png",
        correct_position: [-76.289542, -30.952153],
    },
    {
        map_name: "customs",
        img: "warehouse02.png",
        correct_position: [-75.888091, -30.776265],
    },
    {
        map_name: "customs",
        img: "warehouse03.png",
        correct_position: [-75.563041, -27.522342],
    },
    {
        map_name: "customs",
        img: "warehouse_van01.png",
        correct_position: [-75.253057, -26.027296],
    },
    {
        map_name: "customs",
        img: "shack01.png",
        correct_position: [-77.176684, -35.525234],
    },
    {
        map_name: "customs",
        img: "toilet01.png",
        correct_position: [-77.44694, -30.250092],
    },
    {
        map_name: "customs",
        img: "spray_paint01.png",
        correct_position: [-77.078784, -7.135284],
    },
    {
        map_name: "customs",
        img: "bush01.png",
        correct_position: [-81.120388, -17.424717],
    },
    {
        map_name: "customs",
        img: "jackets01.png",
        correct_position: [-77.389504, -3.353698],
    },
    {
        map_name: "customs",
        img: "forklift01.png",
        correct_position: [-77.878814, 0.252001],
    },
    {
        map_name: "customs",
        img: "digger01.png",
        correct_position: [-78.402537, -23.141068],
    },
    {
        map_name: "customs",
        img: "container01.png",
        correct_position: [-79.905154, -23.756675],
    },
    {
        map_name: "customs",
        img: "toilet02.png",
        correct_position: [-81.308321, -17.688548],
    },
    {
        map_name: "customs",
        img: "digger02.png",
        correct_position: [-81.374479, -12.9391],
    },
    {
        map_name: "customs",
        img: "digger03.png",
        correct_position: [-82.308893, 2.802852],
    },
    {
        map_name: "customs",
        img: "spray_paint02.png",
        correct_position: [-80.342262, -1.682285],
    },
    {
        map_name: "customs",
        img: "room01.png",
        correct_position: [-77.273855, -5.112096],
    },
    {
        map_name: "customs",
        img: "room02.png",
        correct_position: [-77.157163, -0.978734],
    },
    {
        map_name: "customs",
        img: "room03.png",
        correct_position: [-80.027655, -3.265275],
    },
    {
        map_name: "customs",
        img: "gun01.png",
        correct_position: [-78.349411, -5.726744],
    },
    // factory
    {
        map_name: "factory",
        img: "gas_blocks.png",
        correct_position: "41 -20",
    },
    {
        map_name: "factory",
        img: "office.jpg",
        correct_position: "24 -15",
    },
    {
        map_name: "factory",
        img: "pve.jpg",
        correct_position: "30 -14",
    },
    {
        map_name: "reserve",
        img: "boss.jpg",
        correct_position: "41 -20",
    },
    {
        map_name: "reserve",
        img: "bunkers.jpg",
        correct_position: "24 -15",
    },
    {
        map_name: "reserve",
        img: "drain.jpg",
        correct_position: "30 -14",
    },
];
