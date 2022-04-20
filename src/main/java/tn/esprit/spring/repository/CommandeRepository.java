package tn.esprit.spring.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import tn.esprit.spring.entities.Commande;

public interface CommandeRepository extends CrudRepository<Commande, Long> {
	@Query(value = "SELECT * FROM commande WHERE id=?1", nativeQuery = true)
	public Commande getOne(long id);

	@Query(value = "SELECT * FROM commande WHERE commande_date=?1", nativeQuery = true)
	public List<Commande> findByComandedate(Date date);
}