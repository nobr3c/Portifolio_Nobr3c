export default class Id {
    static gerar(): String {
        const p1 = Math.random().toString(36).substring(2,9);
        const p2 = Math.random().toString(36).substring(2,9);
        const p3 = Math.random().toString(36).substring(2,9);
        return `${p1}-${p2}-${p3}`
    }
}

console.log(Id.gerar())
console.log(Id.gerar())