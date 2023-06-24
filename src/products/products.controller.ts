import { Controller, Post, Body, Get } from "@nestjs/common";
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
}