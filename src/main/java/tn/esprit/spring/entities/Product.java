package tn.esprit.spring.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class Product implements Serializable {

	private enum Categorie {
		cat1, cat2, a, aaa;
	}

	@Id
	@GeneratedValue
	private Long idProd;
	@Column(name = "name")
	private String name;
	@Column(name = "Price")
	private float Price;
	@Column(name = "Qte")
	private int Qte;
	@Column(name = "Codbar", nullable = false)
	private long Codbar;
	@Enumerated(EnumType.STRING)
	private Categorie categorie;
	@ManyToMany
	private List<Commande> commands;
	private Float tva;

	public Product() {
		super();
	}

	public List<Commande> getCommands() {
		return commands;
	}

	public Float getTva() {
		return tva;
	}

	public void setTva(Float tva) {
		this.tva = tva;
	}

	public void setCommands(List<Commande> commands) {
		this.commands = commands;
	}

	public Long getIdProd() {
		return idProd;
	}

	public void setIdProd(Long idProd) {
		this.idProd = idProd;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getPrice() {
		return Price;
	}

	public void setPrice(float price) {
		Price = price;
	}

	public int getQte() {
		return Qte;
	}

	public void setQte(int qte) {
		Qte = qte;
	}

	public long getCodbar() {
		return Codbar;
	}

	public void setCodbar(long codbar) throws Exception {
		String T = Long.toString(codbar);
		if (T.startsWith("619"))
			Codbar = codbar;
		else
			throw new Exception("Produit n est pas Tounsi");

	}

	public Categorie getCategorie() {
		return categorie;
	}

	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}
}