// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'

// The GraphQL schema
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type MyReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: MyReturn => 객체 1개를 의미
    fetchBoards: [MyReturn] # => 배열 안에 객체 1개 이상을 의미
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String
    createBoard(createBoardInput: CreateBoardInput!): String
    createTokenOfPhone(aaa: String): String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: () => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요@@@" },
        { number: 2, writer: "영희", title: "영희 제목입니다~~", contents: "영희 내용이에요@@@" },
        { number: 3, writer: "훈이", title: "훈이 제목입니다~~", contents: "훈이 내용이에요@@@" },
      ]

      // 2. 꺼내온 결과 응답 주기
      return result
    }
  },

  Mutation: {
    createBoard: (_, args) => {
      console.log(args)

      // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

      // 2. 저장 결과 응답 주기
      return "게시물 등록에 성공하였습니다!!"
    },

    createTokenOfPhone: (_, args) => {
      const myphone = args.aaa

      // 1. 휴대폰번호 자릿수 맞는지 확인하기
      const isValid = checkValidationPhone(myphone)
      if(isValid){
        // 2. 핸드폰 토큰 6자리 만들기
        const mytoken = getToken()

        // 3. 핸드폰번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken)
        return "인증완료!!!"
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});