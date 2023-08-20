Backend tasks
- create back end mongo server and mongoose connection
- create models folder with Catgeory, Product, User, Order 
- create schemas folder with resolvers file that will contain all Queries/Mutations for our application
- create graphql typedefs for each model aswell as each Query/Mutation
    - Query: [categories, products, product, user, order, checkout]
    - Mutation: {addUser, addOrder, updateUser, updateProduct, login}
- determine what properties the Models will have 
- setup backend Auth with JWT
    - authMiddleware function and signToken function
    - add middleware to our Apollo server, along with our typedefs/resolvers
- Start the Apollo server(apply middleware) with our mongoDB connection and express server 


Frontend tasks