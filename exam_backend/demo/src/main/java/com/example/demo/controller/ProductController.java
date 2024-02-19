package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/products")
    public ResponseEntity<Page<Product>> showListProducts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "") String tenSanPham, Model model) {
        Pageable pageable = PageRequest.of(page,2, Sort.by("quantity").ascending());
        Page<Product> productPage = productService.findByTitleContaining(tenSanPham,pageable);
        if (!productPage.isEmpty()){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(productPage,HttpStatus.OK);
    }
}
