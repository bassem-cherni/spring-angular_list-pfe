package tn.essat.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.essat.model.TypePfes;

@Repository
public interface IGestionTypePfe  extends JpaRepository<TypePfes, Integer>{

}
