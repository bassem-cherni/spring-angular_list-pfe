package tn.essat.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import tn.essat.model.Pfe;
@Repository
public interface IGestionPfe extends JpaRepository<Pfe, Integer>{
	@Query("select p from Pfe p where p.type.id=?1")
	public List<Pfe> getAllPfeByTypePfe(int id);
	@Query("select p from Pfe p where p.titre=?1")
	public List<Pfe> getAllPfeByTitre(String titre);
	
	@Query(value="select * from Pfe p where p.titre COLLATE 'utf8_general_ci' like %:search% ", nativeQuery = true)
	public List<Pfe> search(@Param("search") String search);

}
