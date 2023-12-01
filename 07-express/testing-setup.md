# A Cleaner TypeScript Testing Setup

1. Install all the things

```
npm install jest @types/jest supertest @types/supertest ts-jest
```

2. Initialise the Jest config

```
npx ts-jest config:init
```

3. Update your package.json

```
"scripts": {
	"test": "jest"
}
```

4. Write your tests :)