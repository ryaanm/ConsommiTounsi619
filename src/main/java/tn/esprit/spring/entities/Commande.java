package tn.esprit.spring.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Commande implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	private String name;
	private String prenom;
	private String productname;
	private int qnt;
	private float montantUN;
	private float montantHT;

	@Enumerated(EnumType.STRING)
	private Typepayment commandType;

	@Temporal(TemporalType.DATE)
	private Date commandDate;

	@Column(name = "commandAdresse")
	private String commandAdresse;

	public Commande(Long id, String name, String prenom, String productname, int qnt, float montantUN, float montantHT,
			Typepayment commandType, Date commandDate, String commandAdresse) {
		super();
		this.id = id;
		this.name = name;
		this.prenom = prenom;
		this.productname = productname;
		this.qnt = qnt;
		this.montantUN = montantUN;
		this.montantHT = montantHT;
		this.commandType = commandType;
		this.commandDate = commandDate;
		this.commandAdresse = commandAdresse;
	}

	public Commande(String name, String prenom, String productname, int qnt, float montantHT, Typepayment commandType,
			Date commandDate, String commandAdresse) {
		super();
		this.name = name;
		this.prenom = prenom;
		this.productname = productname;
		this.qnt = qnt;
		this.montantHT = montantHT;
		this.commandType = commandType;
		this.commandDate = commandDate;
		this.commandAdresse = commandAdresse;
	}

	public Commande(String name, String prenom, String productname, int qnt, float montantUN, float montantHT,
			Typepayment commandType, Date commandDate, String commandAdresse) {
		super();
		this.name = name;
		this.prenom = prenom;
		this.productname = productname;
		this.qnt = qnt;
		this.montantUN = montantUN;
		this.montantHT = montantHT;
		this.commandType = commandType;
		this.commandDate = commandDate;
		this.commandAdresse = commandAdresse;
	}

	public float getMontantUN() {
		return montantUN;
	}

	public void setMontantUN(float montantUN) {
		this.montantUN = montantUN;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public int getQnt() {
		return qnt;
	}

	public void setQnt(int qnt) {
		this.qnt = qnt;
	}

	public float getMontantHT() {
		return montantHT;
	}

	public void setMontantHT(float montantHT) {
		this.montantHT = montantHT;
	}

	public Typepayment getCommandType() {
		return commandType;
	}

	public void setCommandType(Typepayment commandType) {
		this.commandType = commandType;
	}

	public Date getCommandDate() {
		return commandDate;
	}

	public void setCommandDate(Date commandDate) {
		this.commandDate = commandDate;
	}

	public String getCommandAdresse() {
		return commandAdresse;
	}

	public void setCommandAdresse(String commandAdresse) {
		this.commandAdresse = commandAdresse;
	}

	public Commande() {
		super();
	}


}