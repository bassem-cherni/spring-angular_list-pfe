package tn.essat.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class TypePfes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nom;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "type")
	private List<Pfe> listP;
	
	public TypePfes() {
		super();
		this.listP = new ArrayList<Pfe>();
	}
	public TypePfes(Integer id, String nom) {
		super();
		this.id = id;
		this.nom = nom;
		this.listP = new ArrayList<Pfe>();
	}
	public List<Pfe> getListP() {
		return listP;
	}
	public void setListP(List<Pfe> listP) {
		this.listP = listP;
	}
	public void addpfe(Pfe p) {
		this.listP.add(p);		
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	
	
}
