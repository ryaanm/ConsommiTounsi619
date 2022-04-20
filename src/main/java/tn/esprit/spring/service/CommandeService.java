package tn.esprit.spring.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entities.Commande;
import tn.esprit.spring.repository.CartRepository;
import tn.esprit.spring.repository.CommandeRepository;


@Service
public class CommandeService {
	@Autowired
	CartRepository cartRepeository;
	@Autowired
	CommandeRepository commandRepository;
	@Autowired
	CartService cartservice;

	public List<Commande> getAllcommande() {
		return (List<Commande>) commandRepository.findAll();
	}

	public void deletecommande(Long id) {

		Optional<Commande> commande = commandRepository.findById(id);

		if (commande.isPresent()) {
			commandRepository.deleteById(id);
		}
	}

	public Commande updatecommande(Commande fr) {

		return commandRepository.save(fr);
	}

	public List<Commande> getCommandepardate(Date date){
		   return commandRepository.findByComandedate(date);
		}
}