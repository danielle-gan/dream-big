import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password){
      token
      user {
        username
        email
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password){
        token 
        user {
            _id
            username 
            email
    }
  }
}
`;

export const SAVE_BOOK = gql `
mutation saveBook($taskId: ID, 
                $startTime: String, 
                $endTime: String, 
                $title: String, 
                $date: String){
    saveTask(taskId: $taskId, 
            startTime: $startTime, 
            endTime: $endTime, 
            title: $title, 
            date: $date){
        username
        email
          _id
        savedTasks {
          taskId
          startTime
          endTime
          title
          date
      }
    }
  }
`;

export const REMOVE_TASK = gql `
mutation removeTask($taskId: ID!){
    removeTask(taskId: $taskId){
        username
        email
        _id
        savedTasks{
          taskId
          startTime
          endTime
          title
          date
        }
    }
  }
`;

// I don't know about this one y'all
export const UPDATE_TASK = gql `
mutation updateTask($taskId: ID){
  updateTask(taskId: $taskId){
      username
      email
      _id
      savedTasks{
        taskId
        startTime
        endTime
        title
        date
    }
  }
}
`
