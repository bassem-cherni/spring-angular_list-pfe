package tn.essat.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.essat.dao.IGestionPfe;
import tn.essat.dao.IGestionTypePfe;
import tn.essat.model.Pfe;
import tn.essat.model.TypePfes;

@RestController
@CrossOrigin("*")
@RequestMapping("/rest")

public class Rest {
	@Autowired
	IGestionPfe daopfe;
	@Autowired
	IGestionTypePfe daotype;
	
	
	@GetMapping("/pfes")
	public List<Pfe> meth1(){
		return daopfe.findAll();		
	}
	
	@GetMapping("/count")
	public Integer count(){
		return daopfe.findAll().size();		
	}
	
	@GetMapping("/search/{search}")
	public List<Pfe> search(@PathVariable("search") String s){
		return daopfe.search(s);		
	}
	
	@GetMapping("/listpfe/{id}")
	public List<Pfe> meth3(@PathVariable("id") int id){
		return daopfe.getAllPfeByTypePfe(id);
	}
	
	
	@GetMapping("/listetype")
	public List<TypePfes> meth2(){
		return daotype.findAll();
	}
	 
	@PostMapping("/add")
	public void get3(@RequestBody Pfe pfe ){
	 daopfe.save(pfe);		
	}
	
	@DeleteMapping("/delete/{id}")
	public void get4(@PathVariable("id") int id){
		daopfe.deleteById(id);
	}
	
}
