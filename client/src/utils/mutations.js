import {gql} from "@apollo/client";

export const ADD_READER = gql`
  mutation addReader($name: String!, $email: String!, $password: String!) {
    addReader(name: $name, email: $email, password: $password) {
      token
      reader {
        _id
        name
      }
    }
  }
`;

export const LOGIN_READER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      reader {
        _id
        name
      }
    }
  }
`;

export const ADD_PASSAGE = gql`
  mutation addPassage($title: String, $authorId: ID, $fullText: String) {
    addPassage(title: $title, authorId: $authorId, fullText: $fullText) {
      _id
      title
      fullText
      author {
        name
        email
      }
    }
  }
`;

export const ADD_SESSION = gql`
  mutation addSession($passageId: ID!) {
    addSession(passage: $passageId) {
      _id
      readerId
      resumeAt
      passage {
        _id
        title
      }
    }
  }
`;
