package com.productstore.demo.service;

import com.productstore.demo.model.Product;
import com.productstore.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAll() {
        return repo.findAll();
    }

    public Optional<Product> getById(String id) {
        return repo.findById(id);
    }

    public Product create(Product product) {
        return repo.save(product);
    }

    public Product update(String id, Product product) {
        product.setId(id);
        return repo.save(product);
    }

    public void delete(String id) {
        repo.deleteById(id);
    }
}
