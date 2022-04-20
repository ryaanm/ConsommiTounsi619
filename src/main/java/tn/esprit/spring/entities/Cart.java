package tn.esprit.spring.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Cart implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private float montantHT;

	private float montantTTC;

	private float montantTVA;
	@JsonIgnore
	@ManyToMany
	private List<Product> produits;

	@JsonIgnore
	@OneToOne
	private User user;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public float getMontantHT() {
		return montantHT;
	}

	public void setMontantHT(float montantHT) {
		this.montantHT = montantHT;
	}

	public float getMontantTTC() {
		return montantTTC;
	}

	public void setMontantTTC(float montantTTC) {
		this.montantTTC = montantTTC;
	}

	public float getMontantTVA() {
		return montantTVA;
	}

	public void setMontantTVA(float montantTVA) {
		this.montantTVA = montantTVA;
	}

	public List<Product> getProduits() {
		return produits;
	}

	public void setProduits(List<Product> produits) {
		this.produits = produits;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Cart(Long id, float montantHT, float montantTTC, float montantTVA, List<Product> produits, User user) {
		super();
		this.id = id;
		this.montantHT = montantHT;
		this.montantTTC = montantTTC;
		this.montantTVA = montantTVA;
		this.produits = produits;
		this.user = user;
	}

	public Cart(Long id, float montantHT, float montantTTC, float montantTVA, List<Product> produits) {
		super();
		this.id = id;
		this.montantHT = montantHT;
		this.montantTTC = montantTTC;
		this.montantTVA = montantTVA;
		this.produits = produits;
	}

	public Cart(Long id, float montantHT, float montantTTC, float montantTVA, User user) {
		super();
		this.id = id;
		this.montantHT = montantHT;
		this.montantTTC = montantTTC;
		this.montantTVA = montantTVA;
		this.user = user;
	}

	public Cart() {
		super();
	}

}