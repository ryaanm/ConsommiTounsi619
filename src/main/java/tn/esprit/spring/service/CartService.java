package tn.esprit.spring.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tn.esprit.spring.entities.Cart;
import tn.esprit.spring.entities.Product;
import tn.esprit.spring.entities.User;
import tn.esprit.spring.repository.CartRepository;
import tn.esprit.spring.repository.IUserRepository;
import tn.esprit.spring.repository.ProductRepository;


@Service
public class CartService {
	@Autowired
	CartRepository cartRepeository;

	@Autowired
	ProductRepository productRepository;
	@Autowired
	IUserRepository userRepository;

	public List<Product> getAllProductByCart(Long cartId) {
		Cart dep = cartRepeository.findById(cartId).get();
		return dep.getProduits();
	}

	// get cart by Id
	public Cart getCartById(Long cartId) {
		return cartRepeository.findById(cartId).get();
	}

	// recherche cart par user
	public Cart SearchCartByUser(Long idUser){
		return cartRepeository.SearchCartByUseres(idUser);	
	}

// ajouter un produit a un panier
