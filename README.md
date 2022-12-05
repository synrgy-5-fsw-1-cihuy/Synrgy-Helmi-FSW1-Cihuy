## Challenge 6 

```sh
## Database  
Postgresql 
nama database -> cars_development
isi tabel cars -> name: STRING,
    price: INTEGER,
    size: STRING,
    foto: STRING,
    created_at timestamp,
    updated_at timestamp
    
isi tabel users -> name: STRING,
    email: STRING,
    passwor: STRING,
    role: ENUM,
    created_at timestamp,
    updated_at timestamp
    
```

```sh
Link DatabaseDiagramIo -> https://dbdiagram.io/d/63703906c9abfc61117230b6
```

```sh
Patteb -> Service Repository
```

```sh
## Endpoint CRUD

// User Router
router.post("/api/register/member");
router.post("/api/register/admin");
router.post("/api/login");
router.post("/api/profile");

//POST
router.post('/api/cars');

//GET ALL
router.get('/api/cars');
//GET BY ID
router.get('/api/cars/:id');

//UPDATE
router.put('/api/cars/:id');

//DELETE
router.delete('/api/cars/:id');

```


## Usage

```sh
NPM install 
sequelize db:create
sequelize db:migrate
npx nodeman index.js
```
