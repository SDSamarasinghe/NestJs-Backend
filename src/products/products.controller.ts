import { Controller, Post, Body } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('Products')
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
}