import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  @Query(() => [Product])
  async fetchProducts(
    @Args({ name: 'search', nullable: true }) search: string,
  ) {
    // 엘라스틱서치에서 조회하기 연습!!
    const result = await this.elasticsearchService.search({
      index: 'myproduct0333',
      query: {
        bool: {
          should: [{ prefix: { name: search } }],
        },
      },
    });
    console.log(JSON.stringify(result, null, ' '));

    // 엘라스틱서치에서 조회 해보기 위해 임시로 주석!!
    // return this.productService.findAll();
  }

  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.findOne({ productId });
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    // // 엘라스틱서치에 등록하기 연습!!(연습 이후에 삭제하기!!)
    // this.elasticsearchService.create({
    //   id: 'myid',
    //   index: 'myproduct03',
    //   document: {
    //     // name: "철수",
    //     // age: 13,
    //     // school: "다람쥐초등학교"
    //     ...createProductInput,
    //   },
    // });

    // 엘라스틱서치에서 등록해보기위해 임시로 주석!!
    return this.productService.create({ createProductInput });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    // 판매 완료가 되었는지 확인해보기
    await this.productService.checkSoldout({ productId });

    // 수정하기
    return await this.productService.update({ productId, updateProductInput });
  }

  @Mutation(() => Boolean)
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.delete({ productId });
  }
}
