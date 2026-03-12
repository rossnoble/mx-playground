export const typeDefs = `#graphql
  type Todo {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
    createdAt: String!
  }

  input CreateTodoInput {
    title: String!
    description: String
  }

  input UpdateTodoInput {
    title: String
    description: String
    completed: Boolean
  }

  type Query {
    todos: [Todo!]!
    todo(id: ID!): Todo
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo!
    updateTodo(id: ID!, input: UpdateTodoInput!): Todo
    deleteTodo(id: ID!): Boolean!
  }
`;
