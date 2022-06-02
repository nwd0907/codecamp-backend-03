import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/createBoard.input';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  // @Query(() => String)
  // getHello() {
  //   return this.boardService.aaa();
  // }

  @Query(() => [Board])
  fetchBoards() {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  createBoard(
    @Args({ name: 'writer', nullable: true }) writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    // console.log(args);

    console.log(writer);
    console.log(title);
    console.log(contents);

    console.log(createBoardInput);

    return this.boardService.create();
  }
}
