import { Client } from "@/core/Client";
import { ClientRepository } from "@/core/ClientRepository";
import ClientCollection from "@/firebase/db/ClientCollection";
import { useEffect, useState } from "react";
import useTableOrForm from "./useTableOrForm";

export function useClients() {
    const [clients, setClients] = useState<Client[]>([])
    const [client, setClient] = useState<Client>(Client.void())

    const {
        showTable,
        showForm,
        tableVisible} = useTableOrForm()
  
    const repo: ClientRepository = new ClientCollection()
  
    useEffect(getAll, [])
  
    function getAll(){
      repo.getAll().then(clients => {
        setClients(clients)
        showTable()
      })
  
    }
  
    function clientSelected(client: Client) {
      setClient(client);
      showForm()
    }
  
    async function clientDeleted(client: Client) {
      await repo.delete(client)
      getAll()
    }
  
    async function saveClient(client: Client) {
      await repo.save(client)
      getAll()
    }
  
    function newClient() {
      setClient(Client.void());
      showForm()
    }

    return {
        client,
        clients,
        tableVisible,
        clientSelected,
        clientDeleted,
        saveClient,
        newClient,
        getAll,
        showTable
    }

}