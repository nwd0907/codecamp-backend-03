import { Module } from '@nestjs/common';
import { BoardResolver } from './boards.resolver';
import { BoardService } from './boards.service';

@Module({
  // imports: [],
  // controllers: [],
  providers: [BoardResolver, BoardService],
})
export class BoardModule {}
