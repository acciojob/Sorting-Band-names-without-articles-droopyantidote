let arr = ['The Virupaksha Temple', 'A Victoria Memorial', 'An Taj Mahal'];
let withoutArticles = [];
let map = {};

for(let i = 0; i < arr.length; i++) {
 let str = arr[i].replace(/\b(?:an?|the)\b/gi, '').trim().replace(/\s+/g, ' ');
	map[str] = arr[i];
	withoutArticles.push(str);
}
console.log(withoutArticles);
withoutArticles.sort();
for(let i = 0; i < withoutArticles.length; i++) {
	console.log(map[ withoutArticles[i] ]);
}