// Enum structure for game resources (m€, steel, titanium, plant, energy, heat)
const RESOURCE_TYPE = {
    M_CREDIT: 1,
    STEEL: 2,
    TITANIUM: 3,
    PLANT: 4,
    ENERGY: 5,
    HEAT: 6,
    properties: {
        1: {name: "m€", minProd: -5},
        2: {name: "steel", minProd: 0},
        3: {name: "titanium", minProd: 0},
        4: {name: "plant", minProd: 0},
        5: {name: "energy", minProd: 0},
        6: {name: "heat", minProd: 0}
    }
};

class Resource {
    constructor(rsrcType, defaultQty, defaultProd){
        this.rsrcType = rsrcType;
        this.quantity = defaultQty;
        if (defaultProd){
            this.production = defaultProd;
        }else {
            this.production = 0;
        }
    }

    // Getters (qty, prod)
    getQty() {
        return this.quantity;
    }
    getProd(){
        return this.production;
    }

    // Setters (qty, prod)
    setQty(toSet) {
        this.quantity = toSet;
    }
    setProd(toSet) {
        this.production = toSet;
    }

    // Resource shifts
    increaseQty(toAdd) {
        this.quantity += toAdd;
    }
    increaseProd(toAdd) {
        this.production += toAdd;
    }

    decreaseQty(toDrop) {
        this.quantity = max(0, this.quantity - toDrop);
    }
    decreaseProd(toDrop) {
        this.production = max(0, this.production - toDrop);
        // TODO : handle case Prod < 0 (card can't be played if it's yourself, otherwise permitted)
    }

    // Display Resource attributes
    displayAll() {
        console.log("Name = ", RESOURCE_TYPE.properties[this.rsrcType].name, " | Qty = ", this.quantity, " | Prod = ", this.production);
    }
}

class ProjectCard {
    constructor(name, cost, tags, vp) {
        this.name = name;
        this.cost = cost;
        this.tags = new Array(tags);
        // TO BE IMPLEMENTED
        this.requirement;
        this.effectAction;
        this.immediateEffect;
        this.token;
        //
        this.vp = vp;
    }

    // Getters
    getName() {
        return this.name;
    }
    getCost() {
        return this.cost;
    }
    getTags() {
        return this.tags;
    }
    getVP(){
        return this.vp;
    }
}

// TO BE IMPLEMENTED
class CorporationCard {

}

class Player {
    constructor(name, corporation) {
        this.name = name;
        this.hand;
        this.corporation = corporation;
        // TO BE IMPLEMENTED
        this.resources;
    }
} 

// Class definition Unit Tests
// Resource class tests
// Wrong Case (NOK)
let wrongRssTest = new Resource(RESOURCE_TYPE.TITANIUM, "test", -12);

// General Case (OK)
let rssTest = new Resource(RESOURCE_TYPE.M_CREDIT, 0, 5);
let otherRssTest = new Resource(RESOURCE_TYPE.STEEL, 0);

wrongRssTest.displayAll();
rssTest.displayAll();
otherRssTest.displayAll();