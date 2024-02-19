package com.example.demo.service;

import com.example.demo.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


public interface IProductService {
    Page<Product> findByTitleContaining(String title, Pageable pageable);
}
