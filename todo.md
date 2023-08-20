Backend tasks
- [x] create back end mongo server and mongoose connection
- [x] create models folder with Catgeory, Product, User, Order 
- [x] create schemas folder with resolvers file that will contain all Queries/Mutations for our application
- [x] create graphql typedefs for each model aswell as each Query/Mutation
    - Query: [categories, products, product, user, order, checkout]
    - Mutation: {addUser, addOrder, updateUser, updateProduct, login}
- [x] determine what properties the Models will have 
- [x] setup backend Auth with JWT
    - authMiddleware function and signToken function
    - add middleware to our Apollo server, along with our typedefs/resolvers
- [x] Start the Apollo server(apply middleware) with our mongoDB connection and express server 


Frontend tasks

- [ ] determine which pages, components there will be
- [ ] start with large components and break them down smaller later on
- [ ] 
