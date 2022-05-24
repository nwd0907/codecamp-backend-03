class Monster {
    power = 10

    constructor(aaa){
        this.power = aaa
    }

    attack = () => {
        console.log("공격하자!!")
        console.log("내 공격력은 " + this.power + " 이야!!!")
    }
}

class SkyMonster extends Monster {
    constructor(qqq){
        super(qqq)
    }

    run = () => {
        console.log("날라서 도망가자!!")
    }
}

class GroundMonster extends Monster {
    constructor(www){
        super(www)
    }

    run = () => {
        console.log("뛰어서 도망가자!!")
    }
}

const mymonster1 = new SkyMonster(30)
mymonster1.attack()
mymonster1.run()

const mymonster2 = new GroundMonster(10)
mymonster2.attack()
mymonster2.run()