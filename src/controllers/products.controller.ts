import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    //* todas las rutas que no sean dinamicas deberian ir primero, y este es el caso
    return 'yo soy un filter';
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
