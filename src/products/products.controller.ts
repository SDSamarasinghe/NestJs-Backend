import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('Products') //products controller
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @Post()
    addProduct(
        @Body('title') proTitle: string,
        @Body('description') proDesc: string,
        @Body('price') proPrice: number,
    ) {
       const generatedId =  this.productService.insertProduct(
        proTitle, 
        proDesc, 
        proPrice); 
       return {id: generatedId}
    }
    @Get()
    getAllProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProducts(@Param('id') prodId: string,) {
        return this.productService.getSingleProduct(prodId)
    }
}