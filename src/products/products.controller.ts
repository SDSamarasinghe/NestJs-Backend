import { Controller, Post } from "@nestjs/common";

@Controller('Products')
export class ProductController {
    @Post()
    addProduct(): any{}
}