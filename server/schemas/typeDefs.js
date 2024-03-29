const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    savedTasks: [Task]
}

type Task {
    taskId: ID
    startTime: String
    endTime: String
    date: String
    title: String!
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String!): User
    saveTask(taskId: ID, 
        startTime: String,
        endTime: String,
        date: String,
        title: String!): User
    removeTask(taskId: ID!): User
    updateTask(taskId: ID!): User
}

type Auth {
      token: ID
      user: User
}
`

module.exports = typeDefs