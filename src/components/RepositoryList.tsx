import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

//https://api.github.com/orgs/rocketseat/repos
//map irá percorrer os repositorios e pra cada repositorio ele retorna algo

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]); // estado que irá armazenar a listagem. SEMPRE que for uma lista devemos começar um vetor vazio

  useEffect(() => {//dispara quando algo acontece na aplicação
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data =>  setRepositories(data))
  }, []) ;



  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
    
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}
        
      </ul>
    </section>
  )
}