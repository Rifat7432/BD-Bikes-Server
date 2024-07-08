
## About This Project

This project is a typescript and mongoos server.Which is used to create, update,delete and get a products.It  can get all product and sae product's.We can also get sale history by date,month, yesr week.We can also see servicing history





## Demo Of Data Types

### Data Type Of User signUp
```
{
  username: string;
  password: string;
  email: string;
  role:'buyer'|'seller';
}
```
### Data Type Of login User
```
{
  username: string;
  password: string;
}
```



### Data Type Of product

```
{
    name: string,
    imageUrl:string,
    price: number,
    quantity: number,
    releaseDate: string,
    brand: string,
    model: string,
    type:  'road'| 'mountain'| 'hybrid',
    size: string,
    color: string,
    material: string,
    suspensionType: string,
    customAttributes: string,
}

```

### Type Of Sale History 
``` 
{
     bayerName:string,
    slingDate:string,
    quantity:number,
    productId:Types.ObjectId
};

``` 
### Type Of Sale History 
```
{
  bikeId: Types.ObjectId;
  userId: Types.ObjectId;
  lastServicingDate: string;
  nextServicingDate: string;
  servicingPrice: number;
  isCompleted?:boolean
  serviceDetails: string[];
}
```
## 🔗 Server is running on
[(https://assignment-6-server-one.vercel.app/api)](https://assignment-6-server-one.vercel.app/api)



## API Reference




#### User Registration

```http
Endpoint:  POST /api/user/register
```
#### User Login

```http
Endpoint:  POST /api/auth/login
```
#### Create a Product

```http
Endpoint:  POST /api/products/create-product
```
#### Get all Products
```http
Endpoint:  GET /api/products/get-products

```
#### Sale a Product
```http
Endpoint:  PATCH api/products/sale-product/:ID
```
| Parameter | Type     |                      
| :-------- | :------- |  
| `ID`      | `ObjectId` | 

#### Get All Sales History

```http
Endpoint:  GET /api/history/sales
```



#### Update a Product

```http
Endpoint:  PUT /api/products/update-product/:ID
```

| Parameter | Type     |                      
| :-------- | :------- |  
| `ID`      | `ObjectId` | 

#### Delete a Product
```http
Endpoint:  DELETE /api/products/remove-product/:ID
```

| Parameter | Type     |                      
| :-------- | :------- |  
| `ID`      | `ObjectId` | 

#### Create a Maintenance And Servicing Request

```http
Endpoint:  POST /api/maintenance-servicing/create-maintenance-servicing-request
```

#### Get ALL maintenance And Servicing Request

```http
Endpoint:  GET /api/maintenance-servicing/get-all-servicing-requests
```

#### Get ALL maintenance And Servicing Request Of User

```http
Endpoint:  GET /api/maintenance-servicing/get-all-servicing-request/:id
```

| Parameter | Type     |                      
| :-------- | :------- |  
| `id`      | `ObjectId` | 


####  Update maintenance And Servicing Request

```http
Endpoint:  PUT /api/maintenance-servicing/complete-servicing-request/:id
```

| Parameter | Type     |                      
| :-------- | :------- |  
| `id`      | `ObjectId` | 



## Features

- Create a Product(Data structure should be same as Product data tpe) 
- Get all Products
- Update Product information(Data structure should be same as Product data tpe)
- Delete a Product
- Sale  Product (Data structure should be same as Sale History data tpe)
- Get all Sale History for a specific Date , Month , Year , Week
## About Query
Filter by Price: Allow users to set a price range for bikes.
Filter by Release Date: Provide options for filtering bikes based on their release or production date.
Filter by Brand: Implement a real-time search functionality for bike brands to quickly find bikes by a specific manufacturer.
Filter by Model: Enable searching by bike model for unique identification.
Filter by Type: Categorize bikes into types (e.g., road, mountain, hybrid) and allow users to filter by their preferred categories.
Filter by Size: Include a filter for bike sizes to easily manage bikes of specific sizes.
Filter by Color: Allow filtering bikes based on their color.
Additional Relevant Filter Parameters: Introduce other relevant filter parameters such as frame material, suspension type, or any custom attributes associated with the bikes.## MY Package
- Express.js : Express.js is a minimal and flexible Node.js web application framework. This package is used to interact with web applications and APIs.
- Mongoose : Used with MongoDB databases, to facilitate interaction with MongoDB and to work with MongoDB documents. Used for work:
- Object Data Modeling (ODM)
- Schema definition
- Validation of Zod
- Middleware support
- Query building
- TypeScript : TypeScript is a superset of JavaScript that provides static typing in the language.  TypeScript is used to define the type of JavaScript it - uses primarily:
- Static typing
- Code maintainability
- Object-Oriented Programming (OOP)
- Compliant with ECMAScript
- Cors: Used for Cross-Origin Resource Sharing (CORS).
- Zod : Zod is a TypeScript-first schema declaration and validation library. It is commonly used for data validation in TypeScript projects
- dotenv : This package is used  to protect environment variables.

##  About Me
Hi,I am Md Rifat.I'm a full stack developer.