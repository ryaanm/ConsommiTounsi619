package tn.esprit.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import tn.esprit.spring.entities.Cart;
import tn.esprit.spring.entities.Product;

public interface CartRepository extends JpaRepository<Cart, Long> {
	@Query(value = "Select p.* From cart_produits c join Product p on c.produits_id_prod=p.id_prod where  p.id IN :listProduit", nativeQuery = true)
	public List<Product> getProductById(@Param("listProduit") List<Long> listProduit);

	@Query(value = "select * from Cart c inner join useres u on c.user_id_user =u.id_user where c.user_id_user = :idUser ", nativeQuery = true)
	public Cart SearchCartByUser(@Param("idUser") Long idUser);

	@Query(value = "select * from Cart c  where c.user_id_user = :id_user ", nativeQuery = true)
	public Cart SearchCartByUseres(@Param("id_user") Long idUser);
}