import firebase from '../config'
import { Client } from "@/core/Client";
import { ClientRepository } from "@/core/ClientRepository";

export default class ClientCollection implements ClientRepository{

    #converter = {
        toFirestore(cliente: Client) {
            return {
                name: cliente.name,
                age: cliente.age,
            }
        },
        fromFirestore(
                snapshot: firebase.firestore.QueryDocumentSnapshot,
                options: firebase.firestore.SnapshotOptions
            ): Client {
            const dados = snapshot.data(options)
            return new Client(dados.name, dados.age, snapshot.id)
        }
    }
    
    async save(cliente: Client): Promise<Client> {
        if(cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()!
        }
    }

    async delete(cliente: Client): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async getAll(): Promise<Client[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection('clients')
            .withConverter(this.#converter)
    }
}