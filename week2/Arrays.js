> let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

> favoriteAnimals.push('turtle')
4
> console.log(favoriteAnimals);
[ 'blowfish', 'capricorn', 'giraffe', 'turtle' ]

>
>
> favoriteAnimals.splice(1, 0, 'meerkat')
[]
> console.log(favoriteAnimals);
[ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]

>
>
> console.log(`The array has a length of: ${favoriteAnimals.length}`)
The array has a length of: 5

>
>
> favoriteAnimals.splice(3, 1);
[ 'giraffe' ]
> console.log(favoriteAnimals);
[ 'blowfish', 'meerkat', 'capricorn', 'turtle' ]

>
>
> console.log(`The item you are looking for is at index: ${favoriteAnimals.findI
ndex(x => x === "meerkat")}`)
The item you are looking for is at index: 1

>