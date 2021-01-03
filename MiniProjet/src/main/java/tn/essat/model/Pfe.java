package tn.essat.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Pfe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String titre;
	
	@ManyToOne
	@JoinColumn(name = "typepfe_id")
	@JsonIgnoreProperties("listP")
	private TypePfes type;

	public Pfe() {
	}

	public Pfe(Integer id, String titre, TypePfes typepfe) {
		super();
		this.id = id;
		this.titre = titre;
		this.type = typepfe;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public TypePfes getType() {
		return type;
	}

	public void setType(TypePfes typepfe) {
		this.type = typepfe;
	}

	

}
