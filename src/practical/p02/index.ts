export function getPostsByUser() {}
let a = Number(process.argv[2])
interface userId {
  id: number;
  title: string;
}

let u1: userId = {
  id: a,
  title: "sunt aut facere repellat provident occaecati"
}
console.log(u1);